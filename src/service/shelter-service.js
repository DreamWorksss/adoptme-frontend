import axios from "axios";
import endpoints from "./api-endpoints";
import {fromPetDtoToPet, fromPetToDTO} from "./helpers/pet-helpers";

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
        return axios.get(`${endpoints.pets.retrievePetsByShelter}?ShelterId=${this.shelterId}&Page=0&PageSize=100`)
        .then(result => 
            {
                const pets = [];
                if (result.status == "200") {
                    var entitites = result.data.result.entities
                    entitites.forEach(petDTO => {
                        const pet = fromPetDtoToPet(petDTO);
                        pets.push(pet);
                    });
                }
                return pets;
            });
    }

    async addPet(pet){
        let petDTO = fromPetToDTO(pet);
        console.log(petDTO);
        return axios.post(`${endpoints.pets.addPet}`, {...petDTO});
    }
}

const shelterService = new ShelterService();

export default shelterService;