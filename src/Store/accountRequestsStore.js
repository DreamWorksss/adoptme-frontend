// accountRequestsStore.js

import { reactive } from "vue";

// Mock data for testing purposes
const mockAccountRequests = [
  {
    id: 1,
    shelterName: "Example Shelter 1",
    phoneNumber: "123-456-7890",
    email: "example1@example.com",
    shelterDescription: "A wonderful shelter",
    shelterImageUrl: "https://icma.org/sites/default/files/3218_Animal%20shelter.JPG",
  },
  {
    id: 2,
    shelterName: "Example Shelter 2",
    phoneNumber: "987-654-3210",
    email: "example2@example.com",
    shelterDescription: "Another amazing shelter",
    shelterImageUrl: "https://okcfox.com/resources/media/e0839c7d-96d0-4c2c-9d9c-240a55cccfaf-large16x9_Rendering.jpeg?1684953373619",
  },
  {
    id: 3,
    shelterName: "Example Shelter 1",
    phoneNumber: "123-456-7890",
    email: "example1@example.com",
    shelterDescription: "A wonderful shelter",
    shelterImageUrl: "https://icma.org/sites/default/files/3218_Animal%20shelter.JPG",
  },
  {
    id: 4,
    shelterName: "Example Shelter 2",
    phoneNumber: "987-654-3210",
    email: "example2@example.com",
    shelterDescription: "Another amazing shelter",
    shelterImageUrl: "https://okcfox.com/resources/media/e0839c7d-96d0-4c2c-9d9c-240a55cccfaf-large16x9_Rendering.jpeg?1684953373619",
  },
];

const state = reactive({
  accountRequests: [],
});

const fetchAccountRequests = async () => {
  // Replace this with your actual API call to fetch account requests
  // For now, using mock data
  state.accountRequests = [...mockAccountRequests];
};

const acceptAccountRequest = (id) => {
  // Replace this with your actual API call to accept the account request
  // For now, updating the state directly
  const requestIndex = state.accountRequests.findIndex((request) => request.id == id);
  console.log(id);
  if (requestIndex !== -1) {
    state.accountRequests.splice(requestIndex, 1);
    console.log(state.accountRequests);
  }
};

const declineAccountRequest = (id) => {
  // Replace this with your actual API call to decline the account request
  // For now, updating the state directly
  const requestIndex = state.accountRequests.findIndex((request) => request.id === id);
  if (requestIndex !== -1) {
    state.accountRequests.splice(requestIndex, 1);
  }
};

const getAccountRequests = () => {
  return state.accountRequests;
};

const useAccountRequestsStore = () => {
    return {
      fetchAccountRequests,
      acceptAccountRequest,
      declineAccountRequest,
      getAccountRequests,
    };
  };
  
  export default useAccountRequestsStore;
