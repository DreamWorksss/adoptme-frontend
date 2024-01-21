const baseApiEndpoint = "http://localhost:5038/api";
const petsEndpoint = `${baseApiEndpoint}/Pets`;
const donationEndpoint = `${baseApiEndpoint}/Donation`
const shelterEndpoint = `${baseApiEndpoint}/Shelter`
const adoptionRequest = `${baseApiEndpoint}/AdoptionRequest`

const endpoints = {
    adoptionRequest: {
        addAdoptionRequest:`${adoptionRequest}/AddAdoptionRequest`,
        deleteAdoptionRequest:`${adoptionRequest}/DeleteAdoptionRequest`,
    },
    donation:{
        retrieveDonations : `${donationEndpoint}/RetrieveDonations`,
        retrieveAllDonations : `${donationEndpoint}/RetrieveAllDonations`,
        retrieveDonation : `${donationEndpoint}/RetrieveDonation`,
        addDonation : `${donationEndpoint}/AddDonation`,
        updateDonation : `${donationEndpoint}/UpdateDonation`,
        deleteDonation : `${donationEndpoint}/DeleteDonation`,
    },
    pets : {
        retrivePets : `${petsEndpoint}/RetrievePets`,
        retrivePet : `${petsEndpoint}/RetrievePet`,
        retrievePetWithRequests : `${petsEndpoint}/RetrievePetWithRequests`,
        addPet : `${petsEndpoint}/AddPet`,
        deletePet : `${petsEndpoint}/DeletePet`,
        updatePet : `${petsEndpoint}/UpdatePet`,
        retrievePetsByShelter : `${petsEndpoint}/RetrievePetsByShelter`,
    },
    shelter: {
        retrieveShelters : `${shelterEndpoint}/RetrieveShelters`,
        retrieveAllShelters : `${shelterEndpoint}/RetrieveAllShelters`,
        retrieveShelter : `${shelterEndpoint}/RetrieveShelter`,
        addShelter : `${shelterEndpoint}/AddShelter`,
        updateShelter : `${shelterEndpoint}/UpdateShelter`,
        deleteShelter : `${shelterEndpoint}/DeleteShelter`

    }

}

export default endpoints;
