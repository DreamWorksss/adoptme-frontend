import {defineStore} from 'pinia';
export const usePetStore = defineStore('pet', {
    state: () => ({
        selectedPet: {
            name: '',
            gender: '',
            dateOfBirth: '',
            shelter: '',
            description: '',
            photo: '',
        },
    }),
    actions: {
        fetchPetDetails(petId) {
            // API call
            // axios.get(`/pets/${petId}`).then(response => this.selectedPet = response.data);
            // in the meantime:
            this.selectedPet = {
                name: 'Chloe',
                gender: 'female',
                dateOfBirth: '16-05-2019',
                shelter: 'Whisker Whispers',
                description: '“Meet Chloe, the black and white beauty with a heartwarming story. Chloe\'s journey began when our shelter\'s compassionate team found her abandoned, shivering, and scared on the cold city streets. We provided her a safe haven where she blossomed into the elegant and affectionate cat she is today. Chloe now exudes grace and charm, a testament to the resilience of these remarkable animals.\n' +
                    'By welcoming Chloe into your home, you not only gain a stunning feline companion but also become a part of her heartwarming tale of transformation.”',
                photo: 'https://s.hdnux.com/photos/01/24/13/76/22069121/4/rawImage.jpg',
            };
        },
    },
});
