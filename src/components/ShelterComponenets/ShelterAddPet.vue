<script setup>
import { shallowRef } from "vue";

const props = defineProps({ 
  submitCallback: Function
});

const name = shallowRef("");
const gender = shallowRef();
const dateOfBirth = shallowRef("");
const color = shallowRef("");
const description = shallowRef("");

const clearFields = () => {
  name.value = "";
  gender.value = undefined;  
  dateOfBirth.value = "";
  color.value = "";
  description.value = "";
}; 

const addAnimal = () => {
  let animalObj = {
    name: name.value,
    gender: gender.value,
    dateOfBirth: dateOfBirth.value,
    color: color.value,
    description: description.value,
    imageUrl: "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
  };

  props.submitCallback(animalObj);
};
</script>

<template>
  <v-dialog transition="dialog-top-transition" width="70%" persistent>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" flat height="auto" color="rgb(255, 201, 116, 0.6)"
        >Add +</v-btn
      >
    </template>
    <template v-slot:default="{ isActive }">
      <v-card class="v-card-background">
        <v-toolbar flat density="compact" title="asad">
          <template #title>
            <div class="text-h5 font-weight-light text-white" color="white">
              Add animal
            </div>
          </template>
        </v-toolbar>
        <v-card-item>
          <v-form>
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-file-input
                    chips
                    color="#2A9D8F"
                    baseColor="#2A9D8F"
                    single-line
                    hide-details
                    accept="image/*"
                    label="Attach an image"
                    variant="outlined"
                    prepend-inner-icon="mdi-paperclip"
                    prepend-icon=""
                  >
                  </v-file-input>
                </v-col>

                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    v-model="name"
                    label="Name"
                    placeholder="Rex"
                    variant="outlined"
                    color="#2A9D8F"
                    baseColor="#2A9D8F"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="6">
                  <v-select
                    v-model="gender"
                    color="#2A9D8F"
                    baseColor="#2A9D8F"
                    :items="['Male', 'Female', 'Other']"
                    label="Gender"
                    variant="outlined"
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    v-model="dateOfBirth"
                    color="#2A9D8F"
                    baseColor="#2A9D8F"
                    label="Date of birth"
                    placeholder="01/01/2000"
                    append-inner-icon="mdi-calendar"
                    variant="outlined"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    v-model="color"
                    color="#2A9D8F"
                    baseColor="#2A9D8F"
                    label="Color"
                    placeholder="White"
                    variant="outlined"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    v-model="description"
                    color="#2A9D8F"
                    baseColor="#2A9D8F"
                    variant="outlined"
                    label="Description"
                    auto-grow
                    rows="2"
                    placeholder="Description of the pet"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-item>
        <v-card-actions class="justify-end v-action-background">
          <v-btn
            variant="text"
            @click="
              {
                isActive.value = false;
                clearFields();
              }
            "
            >Cancel</v-btn
          >
          <v-btn
            variant="text"
            @click="
              {
                addAnimal();
                isActive.value = false;
              }
            "
            >Confirm</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>
.v-toolbar {
  border-bottom: 0.1rem solid rgb(42, 157, 143);
  background: rgba(42, 157, 143, 1);
}

.v-card-background {
  background: white;
}

.v-card-background .v-action-background {
  background: rgba(42, 157, 143, 0.2);
}
</style>
