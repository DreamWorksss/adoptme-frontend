const baseApiEndpoint = "http://localhost:5038/api";
const petsEndpoint = `${baseApiEndpoint}/Pets`;
const donationEndpoint = `${baseApiEndpoint}/Donation`
const shelterEndpoint = `${baseApiEndpoint}/Shelter`

const endpoints = {
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
        addPet : `${petsEndpoint}/AddPet`,
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
