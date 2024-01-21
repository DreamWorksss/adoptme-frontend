import { defineStore } from "pinia";
import API from "./Mockup/api";
import { ref } from "vue";
import petService from "@/service/pet-service";

//
const usePetStore = defineStore("pet", () => {
    const petList = ref([]);
    const selectedPet = ref(undefined)

    petService.fetchPets().then(result => petList.value = [...result])
    /*API.FetchAllPets()
        .then(result => {
            petList.value = [...result]
    })*/

    const refetchData = () => {
        petService.fetchPets().then(result => petList.value = [...result])
    }
 

    const getAllPets = () => {
        return petList;
    };

    const fetchSelectedPet = (petId) => {
        petService.fetchSelectedPet(petId).then((result) => selectedPet.value = result)
    }

    const updatePetStore = () => {
        refetchData();
    }

    const setSelectedPet = (pet) => {
        selectedPet.value = pet;
    }

    return {petList, selectedPet, fetchSelectedPet, setSelectedPet, updatePetStore, getAllPets};
});

export default usePetStore;
