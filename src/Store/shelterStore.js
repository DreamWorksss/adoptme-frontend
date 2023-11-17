import { defineStore } from "pinia";
import { computed, ref } from "vue";

const usePetStore = defineStore("shelter", () => {
  const shelterPets = ref([
    { name: "aaaaa", dateOfBirth: "12.12.2021", gender: "male" },
    { name: "bbbbb", dateOfBirth: "12.12.2020", gender: "male" },
    { name: "ccccc", dateOfBirth: "12.12.2019", gender: "female" },
    { name: "ddddd", dateOfBirth: "12.12.2018", gender: "male" },
  ]);

  const getShelterPets = () => {
    return shelterPets;
  }
  const addPet = (pet) => {
    console.log(pet);
    shelterPets.value.push(pet);
  };

  return { shelterPets, getShelterPets, addPet };
});

export default usePetStore;
