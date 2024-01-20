import { defineStore } from "pinia";
import API from "./Mockup/api";
import { ref } from "vue";

const useShelterStore = defineStore("allShelter", () => {
    const shelterList = ref([]);

    API.FetchAllShelters()
        .then(result => {
            shelterList.value = [...result]
        })

    const getAllShelters = () => {
        return shelterList;
        };

    return {shelterList, getAllShelters};
});

export default useShelterStore;
