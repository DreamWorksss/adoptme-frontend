<template>
  <form class="styled-form">
    <div class="form-row">
      <input type="text" id="name" v-model="formData.name" required placeholder="Name" />
    </div>

    <div class="form-row">
      <input type="phone_number" id="phoneNumber" v-model="formData.phoneNumber" required placeholder="Phone number" />
    </div>

    <div class="form-row">
      <input type="email" id="email" v-model="formData.email" required placeholder="Email" />
    </div>

    <div class="form-row" style="height: 40%;">
      <textarea style="height: 50%;" id="message" v-model="formData.message" required placeholder="Message"></textarea>
    </div>

    <div class="form-row" style="margin-top: -6rem;">
      <v-btn rounded-1 flat class="button" @click="submitForm" text="Submit"></v-btn>
    </div>

  </form>
</template>
  
<script setup>
import useFormStore from "@/Store/formStore";
import { reactive } from "vue";
import { useRoute } from "vue-router";

const formStore = useFormStore();
const route = useRoute();

console.log(formStore);

const formData = reactive({
  petID: route.params.id,
  name: '',
  phoneNumber: '',
  email: '',
  message: ''
});

const submitForm = () => {
  // API call here
  console.log(formStore);
  console.log('Form submitted with data:', formData);
}

/*export default {
  data() {
    return {
      formData: {
        petID: this.$route.params.id,
        name: '',
        phoneNumber: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // API call here
      console.log(formStore);
      console.log('Form submitted with data:', this.formData);
    }
  }
};*/
</script>
  
<style scoped>
.styled-form {
  background: linear-gradient(to bottom, #ffffff, #2A9D8F);
  height: 100vh;
  padding-top: 5%;
}

.form-row {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  width: 35%;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-sizing: border-box;
  box-shadow: 0.2rem 0.2rem 0.2rem 0rem rgba(65, 65, 65, 0.5);
}

textarea {
  width: 35%;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-sizing: border-box;
  box-shadow: 0.2rem 0.2rem 0.2rem 0rem rgba(65, 65, 65, 0.5);
}

button {
  border: none;
  width: 10%;
  border-radius: 0.5rem;
  background-color: #ffc974;
  color: #fff;
  cursor: pointer;
  box-shadow: 0.2rem 0.2rem 0.2rem 0rem rgba(65, 65, 65, 0.5);
}
</style>