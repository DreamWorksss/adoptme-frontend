import { defineStore } from "pinia";
import { ref } from "vue";
import useUIStateStore from "./uiStateStore";

const usePetStore = defineStore("shelter", () => {
  const shelterName = ref("Hopeful Hearts");
  const uiState = useUIStateStore();
  uiState.shelterName = shelterName.value;
  const shelterPets = ref([
    { id:1, name: "Rocky", dateOfBirth: "20.06.2021", gender: "male", imageUrl: "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J" },
    { id:2, name: "Rex", dateOfBirth: "12.12.2020", gender: "male", imageUrl: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { id:3, name: "Cleopatra", dateOfBirth: "03.12.2019", gender: "female", imageUrl: "https://i.insider.com/5b33968e5e48ec1f008b4588?width=1200&format=jpeg" },
    { id:4, name: "Thor", dateOfBirth: "14.10.2018", gender: "male", imageUrl: "https://www.purina.co.uk/sites/default/files/2020-12/Dog_1098119012_Teaser.jpg" },
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
