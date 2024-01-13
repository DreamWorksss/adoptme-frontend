<script setup>
import useAccountRequestsStore from "@/Store/accountRequestsStore.js";
import { reactive } from "vue";
import { onMounted } from "vue";

const store = useAccountRequestsStore();

let accountRequests = store.getAccountRequests();

const fetchAccountRequests = async () => {
  try {
    store.fetchAccountRequests();
  } catch (error) {
    console.error("Error fetching account requests:", error);
  }
};

const acceptRequest = (id) => {
  store.acceptAccountRequest(id);
};

const declineRequest = (id) => {
  store.declineAccountRequest(id);
};

onMounted(async () => {
  // Fetch account requests on component mount
  await fetchAccountRequests();
});
</script>

<template>
  <div class="account-requests-page">
    <v-card
      v-for="(request, index) in accountRequests"
      :key="index"
      class="request-card"
      color="#FFC974"
      dark
    >
      <!-- Shelter Details -->
      <div class="label pa-3 text-h6 font-weight-light">
        <span style="color: gray">Shelter Name: </span
        ><span>{{ request.shelterName }}</span>
      </div>
      <!-- ... (Other details) ... -->

      <!-- Accept/Decline Buttons -->
      <v-card-actions class="justify-end">
        <v-btn
          color="#5BB4A9"
          text
          :style="{
            border: '2px solid #5BB4A9',
            'border-radius': '10px',
            background: 'white',
          }"
          @click="acceptRequest(request.id)"
        >
          ACCEPT
        </v-btn>
        <v-btn
          color="#5BB4A9"
          text
          :style="{
            border: '2px solid #5BB4A9',
            'border-radius': '10px',
            background: 'white',
          }"
          @click="declineRequest(request.id)"
        >
          DECLINE
        </v-btn>
      </v-card-actions>
    </v-card>

    <div class="no-request-text" v-if="accountRequests.length === 0">
      No account request yet
    </div>
  </div>
</template>
