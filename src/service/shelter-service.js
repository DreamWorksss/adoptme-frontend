import axios from "axios";
import endpoints from "./api-endpoints";
import {fromPetDtoToPet, fromPetToDTO} from "./helpers/pet-helpers";

class ShelterService {
    constructor() {
        this.shelterId = 0;
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

    async addPet(pet) {
        let petDTO = fromPetToDTO(pet);
        petDTO["shelterId"] = this.shelterId;
        return axios.post(`${endpoints.pets.addPet}`, {...petDTO});
    }
    
    async deletePet(petID) {
        return axios.delete(`${endpoints.pets.deletePet}?id=${petID}`);
    }

    async updatePet(pet) {
        const petDto = fromPetToDTO(pet);
        delete petDto["id"];
        console.log(petDto);
        return axios.put(`${endpoints.pets.updatePet}/${pet.id}`, petDto);
    }

    async getPet(petID) {
        return axios.get(`${endpoints.pets.retrievePetWithRequests}?id=${petID}`).then(result => fromPetDtoToPet(result.data.result));
    }

    async deleteAdoptionRequest(id) {
        return axios.delete(`${endpoints.adoptionRequest.deleteAdoptionRequest}?id=${id}`);
    }

    async fetchAllShelters() {
        return axios.get(`${endpoints.shelter.retrieveAllShelters}`).then(result => 
            {
                console.log(result);
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
}

const shelterService = new ShelterService();

export default shelterService;