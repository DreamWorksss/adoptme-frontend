import axios from "axios";
import endpoints from "./api-endpoints";
import {fromPetDtoToPet, fromPetToDTO} from "./helpers/pet-helpers";

class PetService {
    constructor() {
        
    }

    async fetchPets() {
        return axios.get(`${endpoints.pets.retrivePets}?Filters.IsAvailable=true&Page=0&PageSize=100`)
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

    async fetchSelectedPet(petID) {
        return axios.get(`${endpoints.pets.retrivePet}?id=${petID}`).then(result => fromPetDtoToPet(result.data.result));
    }

    async addRequest(request) {
        return axios.post(`${endpoints.adoptionRequest.addAdoptionRequest}`, request);
    }
}

var petService = new PetService();
export default petService;