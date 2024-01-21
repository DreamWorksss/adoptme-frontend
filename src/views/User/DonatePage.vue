<script setup>
import useFormStore from "@/Store/formStore";
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

const formStore = useFormStore();
const route = useRoute();
const router = useRouter();

const formData = reactive({
    shelterID: route.params.id,
    name: "",
    phoneNumber: "",
    email: "",
    sum: "",
    paymentMethod: "",
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
            id="name"
            v-model="formData.name"
            label="Name"
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
            id="sum"
            v-model="formData.sum"
            label="Sum"
            bg-color="#fff"
            append-inner-icon="mdi-currency-eur"
        ></v-text-field>
      </v-row>

      <v-row style="margin-bottom: 1rem">
        <v-select
            id="paymentMethod"
            v-model="formData.paymentMethod"
            label="Payment method"
            bg-color="#fff"
            :items="['cash', 'card', 'check']"
        ></v-select>
      </v-row>

      <v-row style="margin-bottom: 1rem">
        <v-btn
            rounded-1
            class="button"
            @click="submitForm"
            text="Submit"
        ></v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped>
.styled-form {
  background: linear-gradient(to bottom, #ffffff, #2a9d8f);
  height: 90vh;
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
