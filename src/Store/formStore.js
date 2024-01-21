import { defineStore } from 'pinia';
import API from './Mockup/api';
import petService from '@/service/pet-service';
import { fromRequestToDTO } from '@/service/helpers/pet-helpers';

const useFormStore = defineStore('form', () => {
    const addAdoptionRequest = (request) => {
      var requestDTO = fromRequestToDTO(request);
      petService.addRequest(requestDTO);
    };
  
    return { addAdoptionRequest };
});

export default useFormStore;