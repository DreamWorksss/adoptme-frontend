const fromPetDtoToPet = (petDTO) => {
    const dob = new Date(petDTO["birthdate"]);
    delete petDTO["birthdate"];
    const pet = {...petDTO, "dateOfBirth": dob.toLocaleDateString("en-US")};
    
    return pet;

}

const fromPetToDTO = (pet) => {
    const dob = new Date(pet["dateOfBirth"]);
    console.log(dob.toISOString())
    delete pet["dateOfBirth"];
    const petDTO = {...pet, "birthdate": dob.toISOString()};
    
    return petDTO;

}


export {fromPetDtoToPet, fromPetToDTO};