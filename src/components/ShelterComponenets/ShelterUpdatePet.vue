<script setup>
import useShelterUIStore from "@/Store/ui-store/shelterUIStore";
import useShelterPetStore from "@/Store/shelterStore";

const props = defineProps({
    submitCallback: Function,
});


const shelterUIStore = useShelterUIStore();
const shetlerStore = useShelterPetStore();
const dialogVisibility = shelterUIStore.getDialogVisibility();
var pet = shelterUIStore.getPetToUpdate();


const clearFields = () => {
    shelterUIStore.clearPetFields()
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
    pet.previewImage.value = null;
    pet.previewImage.value =
        pet.file.value.length == 0
            ? pet.defaultImage
            : await encodeImageFileAsURL(pet.file.value[0]);
};

const updatePet = async (isActive) => {
    let baseImg = "";

    try {
        baseImg = await encodeImageFileAsURL(pet.file.value[0]);
    } catch {
        baseImg = pet.defaultImage.value;
    }

    let petObj = {
        id: pet.id.value,
        name: pet.name.value,
        gender: pet.gender.value,
        dateOfBirth: pet.dateOfBirth.value,
        color: pet.color.value,
        description: pet.description.value,
        imageUrl: baseImg,
    };
    
    isActive.value = false;
    shetlerStore.updatePet(petObj);
    clearFields();
};
</script>

<template>
    <v-dialog transition="dialog-top-transition" width="70%" persistent v-model="dialogVisibility">
        
        <template v-slot:default="{ isActive }">
            <v-card class="v-card-background">
                <v-toolbar flat density="compact" title="asad">
                    <template #title>
                        <div
                            class="text-h5 font-weight-light text-white"
                            color="white"
                        >
                            Update pet
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
                                                    :src="pet.previewImage.value"
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
                                                    v-model="pet.file.value"
                                                    @change="
                                                        {
                                                            fileChanged(file);
                                                        }
                                                    "
                                                    @click:clear="
                                                        {
                                                            pet.previewImage.value = pet.defaultImage.value;
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
                                        v-model="pet.name.value"
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
                                        v-model="pet.gender.value"
                                        color="#2A9D8F"
                                        baseColor="#2A9D8F"
                                        :items="['Male', 'Female', 'Other']"
                                        label="Gender"
                                        variant="outlined"
                                    ></v-select>
                                </v-col>

                                <v-col cols="12" sm="12" md="6">
                                    <v-text-field
                                        v-model="pet.dateOfBirth.value"
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
                                        v-model="pet.color.value"
                                        color="#2A9D8F"
                                        baseColor="#2A9D8F"
                                        label="Color"
                                        placeholder="White"
                                        variant="outlined"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-textarea
                                        v-model="pet.description.value"
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
                                updatePet(isActive);
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
