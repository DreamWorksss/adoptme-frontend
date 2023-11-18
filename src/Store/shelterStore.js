import { defineStore } from "pinia";
import { ref } from "vue";
import useUIStateStore from "./uiStateStore";

const usePetStore = defineStore("shelter", () => {
  const shelterName = ref("Hopeful Hearts");
  const uiState = useUIStateStore();
  uiState.shelterName = shelterName.value;
  const shelterPets = ref([
    { id:1, name: "aaaaa", dateOfBirth: "12.12.2021", gender: "male" },
    { id:2, name: "bbbbb", dateOfBirth: "12.12.2020", gender: "male" },
    { id:3, name: "ccccc", dateOfBirth: "12.12.2019", gender: "female" },
    { id:4, name: "ddddd", dateOfBirth: "12.12.2018", gender: "male" },
  ]);

  const getShelterPets = () => {
    return shelterPets;
  }
  const addPet = (pet) => {
    var lastID = Math.max(...shelterPets.value.map(element => element.id));
    shelterPets.value.push({...pet, id: lastID + 1});
  };

  const deletePet = (petID) => {
    const index = shelterPets.value.findIndex(element => element.id === petID);

    if (index < 0)
      return;

    shelterPets.value.splice(index, 1);
  }

  return { shelterPets, getShelterPets, addPet, deletePet };
});

export default usePetStore;