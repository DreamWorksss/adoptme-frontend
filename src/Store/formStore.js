import { defineStore } from 'pinia';
import { ref } from "vue";

const useFormStore = defineStore('form', () => {

    const submittedForms = ref([
      { id:1, petID:1, name: "Popescu Razvan", phoneNumber: "0773217090", email: "popescu_razvan@gmail.com", message: "I want to adopt this cootie patootie. =)))" },
      { id:2, petID:1, name: "Petrescu Georgiana", phoneNumber: "0738114028", email: "petrescu_georgiana@gmail.com", message: " I want to adopt this cutie patootie. <333" },
    ]);
  
    const getSubmittedForms = () => {
      return submittedForms;
    };

    const addForm = (form) => {
      var lastID = Math.max(...submittedForms.value.map(element => element.id));
      submittedForms.value.push({...form, id: lastID + 1});
    };
  
    return { submittedForms, getSubmittedForms, addForm };
});

export default useFormStore;