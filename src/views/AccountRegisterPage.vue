<script setup>
import useFormStore from "@/Store/formStore";
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

const formStore = useFormStore();
const route = useRoute();
const router = useRouter();

const formData = reactive({
    shelterName: "",
    phoneNumber: "",
    email: "", 
    shelterPicture: "",
    shelterDescription: "",
    password: "",
    confirmPassword: ""
});

const submitForm  = () => {
    // API call here
    console.log(formData);
    router.back();
};
</script>

<template>

<v-form class="styled-form">
    <v-container class="styled-container">
      <v-row style="margin-bottom: 1rem">
        <v-text-field
            id="shelterName"
            v-model="formData.shelterName"
            label="Shelter Name"
            bg-color="#fff"
        ></v-text-field>
      </v-row>

      <v-row style="margin-bottom: 1rem">
        <v-text-field
            id="email"
            v-model="formData.email"
            label="Email"
            bg-color="#fff"
            append-inner-icon="mdi-email"
        ></v-text-field>
      </v-row>

      <v-row style="margin-bottom: 1rem">
        <v-text-field
            id="phoneNumber"
            v-model="formData.phoneNumber"
            label="Phone number"
            bg-color="#fff"
            append-inner-icon="mdi-phone"
        ></v-text-field>
      </v-row>

      <v-row style="margin-bottom: 1rem">
        <v-text-field
            id="shelterPicture"
            v-model="formData.shelterPicture"
            label="Shelter Picture"
            bg-color="#fff"
        ></v-text-field>
      </v-row>

      <v-row style="margin-bottom: 1rem">
        <v-text-field
            id="shelterDescription"
            v-model="formData.shelterDescription"
            label="Shelter Description"
            bg-color="#fff"
        ></v-text-field>
      </v-row>

      <v-row style="margin-bottom: 1rem">
        <v-text-field
            id="password"
            v-model="formData.password"
            label="Password"
            type="password"
            bg-color="#fff"
        ></v-text-field>
      </v-row>

      <v-row style="margin-bottom: 1rem">
        <v-text-field
            id="confirmPassword"
            v-model="formData.confirmPassword"
            label="Confirm Password"
            type="password"
            bg-color="#fff"
        ></v-text-field>
      </v-row>

      <v-row style="margin-bottom: 1rem">
        <v-btn
            rounded-1
            class="button"
            @click="submitForm"
            text="Register"
        ></v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped>
.styled-form {
  background: linear-gradient(to bottom, #ffffff, #2a9d8f);
  height: 120vh;
  padding-top: 5%;
}

.styled-container {
  width: 35%;
}

.button {
  border: none;
  width: 30%;
  margin: auto;
  border-radius: 0.5rem;
  background-color: #ffc974;
  color: #fff;
  cursor: pointer;
  box-shadow: 0.2rem 0.2rem 0.2rem 0rem rgba(65, 65, 65, 0.5);
}

</style>