import axios from "axios";
import endpoints from "./api-endpoints";

class ShelterService {
    constructor() {
        this.shelterId = 1;
    }

    fetchShelterData() { 
        axios.get(endpoints.shelter.retrieveShelter)
    }
}

const shelterService = new ShelterService();

export default shelterService;