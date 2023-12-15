import { defineStore } from "pinia";
import { ref } from "vue";
import useUIStateStore from "./uiStateStore";
import API from "./Mockup/api";
import usePetStore from "./store";

const SHELTER_ID = 0;

const useShelterPetStore = defineStore("shelter", () => {

    const shelterPets = ref([]);
    const shelterName = ref("Hopeful Hearts");

    const petStore = usePetStore(); 

    const updatePetStoreCallback = petStore.updatePetStore;

    const uiState = useUIStateStore();
    uiState.shelterName = shelterName.value;

    API.FetchAllPetsFromShelter(SHELTER_ID).then((result) => {
        shelterPets.value = [...result];
    });

    const refetchData = () => {
      API.FetchAllPetsFromShelter(SHELTER_ID).then((result) => {
        shelterPets.value = [...result];
    });
    }

    const dataUpdated = () => {
      refetchData();
      updatePetStoreCallback();
    }

    const getShelterPets = () => {
        return shelterPets;
    };

    const addPet = (pet) => {
      API.AddPet(pet)
        .then(() => dataUpdated())
    };

    const deletePet = (petID) => {
      API.RemovePet(petID)
        .then(() => dataUpdated())
    };

    return { shelterPets, getShelterPets, addPet, deletePet };
});

export default useShelterPetStore;
