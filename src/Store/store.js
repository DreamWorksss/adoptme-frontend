import { defineStore } from "pinia";
import API from "./Mockup/api";
import { ref } from "vue";

//
const usePetStore = defineStore("pet", () => {
    const petList = ref([]);
    const selectedPet = ref(undefined)

    API.FetchAllPets()
        .then(result => {
            petList.value = [...result]
        })

    const refetchData = () => {
        API.FetchAllPets()
        .then(result => {
            petList.value = [...result]
        })
    }
 
    //remove this later
    // eslint-disable-next-line no-unused-vars
    const fetchPetDetails = (petID) => {
        // API call
        // axios.get(`/pets/${petId}`).then(response => this.selectedPet = response.data);
        // in the meantime:
        selectedPet.value = {
            name: "Chloe",
            gender: "female",
            dateOfBirth: "16-05-2019",
            shelter: "Whisker Whispers",
            description:
                "“Meet Chloe, the black and white beauty with a heartwarming story. Chloe's journey began when our shelter's compassionate team found her abandoned, shivering, and scared on the cold city streets. We provided her a safe haven where she blossomed into the elegant and affectionate cat she is today. Chloe now exudes grace and charm, a testament to the resilience of these remarkable animals.\n" +
                "By welcoming Chloe into your home, you not only gain a stunning feline companion but also become a part of her heartwarming tale of transformation.”",
            photo: "https://s.hdnux.com/photos/01/24/13/76/22069121/4/rawImage.jpg",
        }
    }

    const getAllPets = () => {
        return petList;
    };

    const fetchSelectedPet = (petId) => {
        API.FetchPet(petId)
            .then((result) => selectedPet.value = result)
    }

    const updatePetStore = () => {
        refetchData();
    }

    const setSelectedPet = (pet) => {
        selectedPet.value = pet;
    }

    return {petList, selectedPet, fetchSelectedPet, fetchPetDetails, setSelectedPet, updatePetStore, getAllPets};
});

export default usePetStore;
