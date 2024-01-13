import createRepository from "./repo";

var API = new createAPI();

function createAPI() {
    this.repo = new createRepository();

    this.FetchAllPets = () => {
        return new Promise((resolve) => {
            resolve(this.repo.petList);
        });
    };

    this.FetchAllPetsFromShelter = (shelterID) => {
        return new Promise((resolve) => {
            const filteredPets = this.repo.petList.filter(pet => pet.shelterID === shelterID);
            resolve(filteredPets);
        });
    };

    this.FetchPet = (petID) => {
        return new Promise((resolve) => {
            const petIndex = this.repo.findPetPositionById(petID);
            const pet = this.repo.petList[petIndex];
            resolve(pet);
        })
    }

    this.AddPet = (pet) => {
        return new Promise((resolve) => {
            this.repo.addPet(pet);
            resolve("OK");
        });
    };

    this.RemovePet = (petID) => {
        return new Promise((resolve) => {
            this.repo.removePet(petID);
            resolve("OK")
        });
    };

    this.UpdatePet = (pet) => {
        return new Promise((resolve) => {
            const newPet = {...this.repo.getPetById(pet.id), ...pet};
            
            this.repo.updatePet(newPet);
            resolve("OK")
        });
    }

    this.FetchRequestForPet = (petID) => {
        return new Promise((resolve => {
            const requests = this.repo.findRequestsForPet(petID);
            resolve(requests); 
        }));
    }

    this.AddAdoptionRequest = (requst) => {
        return new Promise((resolve => {
            this.repo.addRequest(requst);
            resolve("OK"); 
        }));
    }

    this.DeleteRequest = (requestID) => {
        return new Promise((resolve => {
            this.repo.removeRequest(requestID);
            resolve('OK');
        }));
    }
}

export default API;
