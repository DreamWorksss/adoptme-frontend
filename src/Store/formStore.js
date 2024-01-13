import { defineStore } from 'pinia';
import API from './Mockup/api';

const useFormStore = defineStore('form', () => {
    const addAdoptionRequest = (request) => {
      API.AddAdoptionRequest(request)
      .then(() => console.log(API.repo.adoptionRequests))
    };
  
    return { addAdoptionRequest };
});

export default useFormStore;