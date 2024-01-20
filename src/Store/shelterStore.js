import { defineStore } from "pinia";
import { ref } from "vue";
import useUIStateStore from "./uiStateStore";
import API from "./Mockup/api";
import usePetStore from "./store";
import shelterService from "@/service/shelter-service";

const SHELTER_ID = 0;

const useShelterPetStore = defineStore("shelter", () => {
    const shelterPets = ref([]);
    const shelterName = ref("");

    const selectedPet = ref(undefined);

    const petStore = usePetStore();

    const updatePetStoreCallback = petStore.updatePetStore;

    const uiState = useUIStateStore();
    uiState.shelterName = shelterName;
    
    shelterService.fetchShelterData()
        .then(result => {
            shelterName.value = result.data.name;
        });
    
    shelterService.fetchPetsFromShelter()
    .then(result => {
        shelterPets.value = [...result];
    })
    
    /*API.FetchAllPetsFromShelter(SHELTER_ID).then((result) => {
        shelterPets.value = [...result];
        console.log(result);
    });*/

    const refetchData = () => {
        shelterService.fetchPetsFromShelter()
        .then(result => {
            shelterPets.value = [...result];
        })
    };

    /*const refetchData = () => {
        API.FetchAllPetsFromShelter(SHELTER_ID).then((result) => {
            shelterPets.value = [...result];
        });
    };*/

    const dataUpdated = () => {
        refetchData();
        updatePetStoreCallback();
    };

    const getShelterPets = () => {
        return shelterPets;
    };
    
    const addPet = (pet) => {
        shelterService.addPet(pet).then(() => dataUpdated());
    }
    /*const addPet = (pet) => {
        API.AddPet(pet).then(() => dataUpdated());
    };*/

    const deletePet = (petID) => {
        API.RemovePet(petID).then(() => dataUpdated());
    };

    const updatePet = (pet) => {
        API.UpdatePet(pet).then(() => {
            dataUpdated();
        });
    };

    const setSelectedPet = (pet) => {
        selectedPet.value = pet;
        API.FetchRequestForPet(pet.id).then((result) => {
            selectedPet.value["adoptionRequests"] = result;
        });
    };

    const fetchSelectedPet = (petId) => {
        API.FetchPet(petId).then((result) => {
            selectedPet.value = result;
            API.FetchRequestForPet(petId).then((result) => {
                selectedPet.value["adoptionRequests"] = result;
            });
        });
    };

    const deleteAdoptionRequest = (requestId) => {
        API.DeleteRequest(requestId).then(() => {
            for (
                let index = 0;
                index < selectedPet.value.adoptionRequests.length;
                index++
            ) {
                const request = selectedPet.value.adoptionRequests[index];
                if (request.id === requestId) {
                    console.log(selectedPet)
                    selectedPet.value.adoptionRequests.splice(index, 1);
                }
            }
        });
    };

    return {
        shelterPets,
        selectedPet,
        getShelterPets,
        addPet,
        deletePet,
        updatePet,
        setSelectedPet,
        fetchSelectedPet,
        deleteAdoptionRequest,
    };
});

export default useShelterPetStore;
