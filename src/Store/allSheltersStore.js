import { defineStore } from "pinia";
import { ref } from "vue";
import endpoints from "@/service/api-endpoints";
import axios from "axios";

const useShelterStore = defineStore("allShelter", () => {
    const shelterList = ref([]);
    const fetchAllShelters = () => {
        return axios.get(`${endpoints.shelter.retrieveAllShelters}`).then(result => 
        {
            if (result.status == "200") {
                var entitites = result.data
                shelterList.value = [...entitites];
            }
        });
    }
    fetchAllShelters();

    const getAllShelters = () => {
        return shelterList;
        };

    return {shelterList, getAllShelters};
});

export default useShelterStore;
