<script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "ShelterPetDetailsPage",
    computed: {
      petDetails() {
        console.log("1");
        return {};
        //return usePetStore().selectedPet;
      },
    },
    mounted() {
      const petId = this.$route.params.id;
      // usePetStore().fetchPetDetails(petId);
    },
    methods: {
      redirectToForm() {
        this.$router.push("/form/" + this.$route.params.id);
      },
    },
  });
  </script>

<template>
    <div class="pet-details-page">
      <div class="d-flex flex-row font-italic mt-3">
        <div
          class="text-content text-left text-h6 font-weight-regular w-66 ml-15"
        >
          <p>Name: {{ petDetails.name }}</p>
          <p>Gender: {{ petDetails.gender }}</p>
          <p>Date of Birth: {{ petDetails.dateOfBirth }}</p>
          <p>Shelter: {{ petDetails.shelter }}</p>
          <p>Description:</p>
          <p class="font-weight-light mt-4 mr-6">
            {{ petDetails.description }}
          </p>
        </div>
        <div class="d-flex flex-column w-100">
          <v-img
            cover
            :src="petDetails.photo"
            alt="Photo of {{ petDetails.name }}"
            :aspect-ratio="16 / 9"
          >
          </v-img>
        </div>
      </div>

      <br><br>
      <hr class="full-width-hr">
      <br>

      <v-card class="request-card" color="#FFC974" dark>
      <div class="label pa-3 text-h6 font-weight-light">
        <span style="color: gray;">Name: </span><span>{{ "Mihai Moraru" }}</span></div>
      <div class="label pa-3 text-h6 font-weight-light">
        <span style="color: gray;">Phone number: </span><span>{{ "0778256978" }}</span></div>
      <div class="label pa-3 text-h6 font-weight-light">
        <span style="color: gray;">Email: </span>{{ "mihai_moraru@gmail.com" }}</div>
      <div class="label pa-3 text-h6 font-weight-light">
        <span style="color: gray;">Message: </span>{{ "I want to adopt this cootie patootie. =)))" }}</div>

      <v-card-actions class="justify-end">
        <v-btn color="#5BB4A9" text :style="{ border: '2px solid #5BB4A9', 'border-radius': '10px', background: 'white' }">ACCEPT</v-btn>
        <v-btn color="#5BB4A9" text :style="{ border: '2px solid #5BB4A9', 'border-radius': '10px', background: 'white' }">DECLINE</v-btn>
      </v-card-actions>
    </v-card>

    <br>

    </div>

  </template>
  
  <style>
  .pet-details-page {
    background: linear-gradient(
      0deg,
      rgba(42, 157, 143, 0.75) 0%,
      rgba(255, 255, 255, 0) 50%
    );
  }
  
  .text-content {
    font-family: Inter, serif, sans-serif;
  }
  
  .adopt-button {
    background: #f0d7a3;
    color: #2a9d8fbf;
  }

  .full-width-hr {
    color: #f0d7a3;
    width: 100%;
    margin: 0;
    border: 2px solid;
  }

  .request-card {
    width: 75%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    background: rgb(255,201,116);
    background: linear-gradient(0deg, rgba(255,201,116,0.7) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    border: 2px solid #FFC974; 
  }

  .label {
    font-size: 20px;
    font-style: italic;
    text-align: left;
    color: black;
  }
  </style>
  