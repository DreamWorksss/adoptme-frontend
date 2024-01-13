<script setup>
import { ref } from "vue";
import { shallowRef } from "vue";

const DEFAULT_IMAGE =
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

const props = defineProps({
    submitCallback: Function,
});

const file = shallowRef([]);
const name = shallowRef("");
const gender = shallowRef();
const dateOfBirth = shallowRef("");
const color = shallowRef("");
const description = shallowRef("");
const previewImage = ref(DEFAULT_IMAGE);

const clearFields = () => {
    name.value = "";
    gender.value = undefined;
    dateOfBirth.value = "";
    color.value = "";
    description.value = "";
    file.value = [];
    previewImage.value = DEFAULT_IMAGE;
};

const encodeImageFileAsURL = async (filePath) => {
    return new Promise((resolve, reject) => {
        var reader = new FileReader();

        reader.onloadend = async () => {
            resolve(reader.result);
        };

        reader.onerror = async () => {
            reject();
        };

        reader.readAsDataURL(filePath);
    });
};

const fileChanged = async () => {
  previewImage.value = null;
    previewImage.value =
        file.value.length == 0
            ? DEFAULT_IMAGE
            : await encodeImageFileAsURL(file.value[0]);
};

const addPet = async (isActive) => {
    let baseImg = "";

    try {
        baseImg = await encodeImageFileAsURL(file.value[0]);
    } catch {
        baseImg = DEFAULT_IMAGE;
    }

    let petObj = {
        name: name.value,
        gender: gender.value,
        dateOfBirth: dateOfBirth.value,
        color: color.value,
        description: description.value,
        imageUrl: baseImg,
    };

    isActive.value = false;
    props.submitCallback(petObj);

    clearFields();
};
</script>

<template>
    <v-dialog transition="dialog-top-transition" width="70%" persistent>
        <template v-slot:activator="{ props }">
            <v-btn
                v-bind="props"
                flat
                height="auto"
                color="rgb(255, 201, 116, 0.6)"
                >Add +</v-btn
            >
        </template>
        <template v-slot:default="{ isActive }">
            <v-card class="v-card-background">
                <v-toolbar flat density="compact" title="asad">
                    <template #title>
                        <div
                            class="text-h5 font-weight-light text-white"
                            color="white"
                        >
                            Add pet
                        </div>
                    </template>
                </v-toolbar>
                <v-card-item>
                    <v-form>
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12">
                                    <v-container fluid class="ma-0 pa-0">
                                        <v-row>
                                            <v-col cols="12" sm="12" md="4">
                                                <v-img
                                                    :aspect-ratio="16 / 9"
                                                    cover
                                                    :src="previewImage"
                                                >
                                                    <template
                                                        v-slot:placeholder
                                                    >
                                                        <div
                                                            class="d-flex align-center justify-center fill-height"
                                                        >
                                                            <v-progress-circular
                                                                color="grey-lighten-4"
                                                                indeterminate
                                                            ></v-progress-circular>
                                                        </div>
                                                    </template>
                                                </v-img>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                sm="12"
                                                md="8"
                                                class="align-center d-flex"
                                            >
                                                <v-file-input
                                                    class="align-end"
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
                                                    v-model="file"
                                                    @change="
                                                        {
                                                            fileChanged(file);
                                                        }
                                                    "
                                                    @click:clear="
                                                        {
                                                            previewImage =
                                                                DEFAULT_IMAGE;
                                                        }
                                                    "
                                                >
                                                </v-file-input>
                                            </v-col>
                                        </v-row>
                                    </v-container>
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
                                addPet(isActive);
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
