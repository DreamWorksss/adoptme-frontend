<script setup>
import UserPetCard from "@/components/PetCards/UserPetCard.vue";
import router from "@/router";
import { ref, watch } from "vue";
import usePetStore from "@/Store/store.js";
import { computed } from "vue";

const shelterStore = usePetStore()
const shelterPets = shelterStore.getAllPets();

const searchTerm = ref("");
const filterOption = ref("");
const filteredPets = computed(() => {
	let pets;
	switch (filterOption.value) {
		case "Female":
			pets = shelterPets.value.filter(
				(pet) => pet.gender.toLowerCase() === "female"
			);
			break;
		case "Male":
			pets = shelterPets.value.filter(
				(pet) => pet.gender.toLowerCase() === "male"
			);
			break;
		default:
			// Default to no filtering if the option is not recognized
			pets = shelterPets.value;
	}
	return pets;
});
const petStore = usePetStore();

const applyFilter = () => {
	
};

watch(searchTerm, applyFilter);
watch(filterOption, applyFilter);

const openDetails = (pet) => {
	petStore.setSelectedPet(pet);
	router.push({ name: "PetDetails", params: { id: pet.id } });
};
</script>

<template>
    <div class="ma-8">
		<div class="d-flex justify-space-between" color="green">
			<div class="d-flex flex-fill">
				<v-text-field
					v-model="searchTerm"
					flat
					class="search-bar mr-4"
					density="compact"
					variant="solo"
					label="Search"
					append-inner-icon="mdi-magnify"
					single-line
					hide-details
					bg-color="rgb(255, 201, 116, 0.6)"
				>
				</v-text-field>
			</div>

			<v-menu>
				<template v-slot:activator="{ props }">
					<v-btn
						flat
						color="rgb(255, 201, 116, 0.6)"
						v-bind="props"
						height="auto"
					>
						Filter &nbsp;<font-awesome-icon
							:icon="['fas', 'arrow-down']"
							style="color: #5bb4a9"
						/>
					</v-btn>
				</template>
				<v-list>
					<v-list-item @click="filterOption = 'All'">All</v-list-item>
					<v-list-item @click="filterOption = 'Female'"
						>Female</v-list-item
					>
					<v-list-item @click="filterOption = 'Male'"
						>Male</v-list-item
					>
				</v-list>
			</v-menu>
		</div>

		<v-divider
			class="my-3"
			thickness="2"
			color="rgba(42, 157, 143, 0.8)"
		></v-divider>

		<v-container fluid class="pa-0">
			<v-row justify="start">
				<v-col
					cols="12"
					sm="6"
					md="4"
					lg="4"
					v-for="(pet, index) in filteredPets"
					:key="index"
				>
					<UserPetCard
						:id="pet.id"
						:name="pet.name"
						:gender="pet.gender"
						:shelter="pet.shelter"
						:imageUrl="pet.imageUrl"
						:moreCallback="() => openDetails(pet)"
					></UserPetCard>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<style>
.search-bar {
	max-width: 30%;
}

.corner-image {
	background: rgb(42, 157, 143);
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 0.5) 0%,
		rgba(255, 255, 255, 0) 30%
	);
}
</style>

<script>
export default {
	name: "PetListView",
};
</script>
