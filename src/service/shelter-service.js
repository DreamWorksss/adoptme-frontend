import axios from "axios";
import endpoints from "./api-endpoints";

class ShelterService {
    constructor() {
        this.shelterId = 1;
    }

    set ShelterId(newShelterId) {
        this.shelterId = newShelterId;
    }

    async fetchShelterData() { 
        return axios.get(`${endpoints.shelter.retrieveShelter}?id=${this.shelterId}`);
    }

    async fetchPetsFromShelter() {
        return axios.get(`${endpoints.pets.retrivePets}?Page=0&PageSize=100`)
    }
}

const shelterService = new ShelterService();

export default shelterService;