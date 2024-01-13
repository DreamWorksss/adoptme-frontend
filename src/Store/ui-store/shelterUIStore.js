import { defineStore } from "pinia";
import { ref, shallowRef } from "vue";

const DEFAULT_IMAGE =
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

const useShelterUIStore = defineStore("ui-shelter", () => {
    const updateDialogVisibility = ref(false);
    const petToUpdate = {
        id: shallowRef(0),
        file: shallowRef([]),
        name: shallowRef(""),
        gender: shallowRef(),
        dateOfBirth: shallowRef(""),
        color: shallowRef(""),
        description: shallowRef(""),
        previewImage: ref(""),
        defaultImage: ref("")
    };

    const setPetToUpdate = (pet) => {
        petToUpdate.id.value = pet.id;
        petToUpdate.name.value = pet.name;
        petToUpdate.gender.value = pet.gender;
        petToUpdate.dateOfBirth.value = pet.dateOfBirth;
        petToUpdate.color.value = pet.color;
        petToUpdate.description.value = pet.description;
        petToUpdate.file.value = [];
        petToUpdate.previewImage.value = pet.imageUrl;
        petToUpdate.defaultImage.value = pet.imageUrl;
    };

    const clearPetFields = () => {
        petToUpdate.name.value = "";
        petToUpdate.gender.value = undefined;
        petToUpdate.dateOfBirth.value = "";
        petToUpdate.color.value = "";
        petToUpdate.description.value = "";
        petToUpdate.file.value = [];
        petToUpdate.previewImage.value = DEFAULT_IMAGE;
        petToUpdate.defaultImage.value = DEFAULT_IMAGE;
    }

    const getPetToUpdate = () => {
        return petToUpdate;
    }

    const getDialogVisibility = () => {
        return updateDialogVisibility;
    };

    const setDialogVisibility = (value) => {
        updateDialogVisibility.value = value;
    };

    return { getPetToUpdate, getDialogVisibility, setDialogVisibility, setPetToUpdate, clearPetFields };
});

export default useShelterUIStore;
