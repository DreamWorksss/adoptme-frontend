const fromPetDtoToPet = (petDTO) => {
    const dob = new Date(petDTO["birthdate"]);
    delete petDTO["birthdate"];
    let requests = [];
    if (petDTO["adoptionRequests"] == undefined)
        requests = [];
    else {
        petDTO["adoptionRequests"].forEach(r => requests.push(fromDtoToRequest(r)));
    }
    const pet = {...petDTO, "dateOfBirth": dob.toLocaleDateString("en-US"), adoptionRequests: requests};
    
    return pet;

}

const fromPetToDTO = (pet) => {
    const dob = new Date(pet["dateOfBirth"]);
    delete pet["dateOfBirth"];
    const petDTO = {...pet, "birthdate": dob.toISOString()};
    
    return petDTO;
}

const fromRequestToDTO = (request) => {
    const email = request['email'];
    delete request['email'];
    const phoneNumber = request['phoneNumber'];
    delete request['phoneNumber'];
    const requestDTO = {...request, "userEmail": email, "phone": phoneNumber};
    return requestDTO;
}

const fromDtoToRequest = (requestDTO) => {
    const email = requestDTO['userEmail'];
    delete requestDTO['userEmail'];
    const phoneNumber = requestDTO['phone'];
    delete requestDTO['phone'];
    const request = {...requestDTO, "email": email, "phoneNumber": phoneNumber};
    return request;
}

export {fromPetDtoToPet, fromPetToDTO, fromRequestToDTO};