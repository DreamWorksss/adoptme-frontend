<template>
    <v-container>
      <v-form>
        <v-row v-for="(question, index) in questions" :key="index">
        <v-col class="d-flex justify-center">
            <v-card style="min-width: 60%;" color="#5BB4A9">
              <v-card-title>{{ question.text }}</v-card-title>
              <v-radio-group v-model="answers[index]" row>
                <v-radio :label="option" :value="option" v-for="(option, i) in question.options" :key="i"></v-radio>
              </v-radio-group>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn rounded flat color="rgba(255, 201, 116, 0.7)" text="SEE ALL SHELTERS" class="custom-btn" @click="submit" style="color: #5BB4A9;">Submit</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </template>
  
  <script>
import { useRouter } from 'vue-router';
import usePetStore from '@/Store/store.js';

export default {
  data() {
    return {
      questions: [
        { text: "How would you describe your ideal pet's temperament?", options: ["Affectionate", "Playful", "Intelligent"] },
        { text: "What trait is most important to you in a pet companion?", options: ["Loyal", "Adaptable", "Vigilant"] },
        { text: "When choosing a pet, what quality do you value the most?", options: ["Friendly", "Well-groomed", "Empathetic"] },
        { text: "Which characteristic is crucial for effective communication with your pet?", options: ["Communicative", "Obedient", "Protective"] },
        { text: "Do you prefer a pet that is more patient or more active?", options: ["Patient", "Energetic"] },
      ],
      answers: [],
    };
  },
  methods: {
    submit() {
      const router = useRouter();  // Get the router instance
      const petStore = usePetStore();
      const fetchAllPetsPromise = petStore.fetchAllPetsPromise;

      console.log(fetchAllPetsPromise)

      fetchAllPetsPromise()
        .then(petList => {
          const petId = this.filterPetsByAttributes(petList);
          let pet;
          petList.forEach(p => {
            if(p.id == petId)
            pet = p;
          })
          petStore.setSelectedPet(pet);
          this.$router.push({ name: "PetDetails", params: { id: petId } });
          console.log("Selected Pet ID:", petId);
        })
        .catch(error => {
          console.error("Error fetching pets:", error);
        });
    },
    filterPetsByAttributes(petList) {
      const attributeCountMap = {};

      petList.forEach(pet => {
        attributeCountMap[pet.id] = 0;

        this.answers.forEach(selectedAttribute => {
          if (pet.description.toLowerCase().includes(selectedAttribute.toLowerCase())) {
            attributeCountMap[pet.id]++;
          }
        });
      });
      const petIdWithMaxAttributes = Object.keys(attributeCountMap).reduce((a, b) => attributeCountMap[a] > attributeCountMap[b] ? a : b);

      return petIdWithMaxAttributes;
    },
  },
};
</script>

  
  <style scoped>
  </style>
  