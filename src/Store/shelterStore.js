import { defineStore } from "pinia";
import { ref } from "vue";
import useUIStateStore from "./uiStateStore";

const usePetStore = defineStore("shelter", () => {
  const shelterName = ref("Hopeful Hearts");
  const uiState = useUIStateStore();
  uiState.shelterName = shelterName.value;
  const shelterPets = ref([
    { id:1, name: "Rocky", gender: "male", dateOfBirth: "20.06.2021", shelter: "Hopeful Hearts", description: 'Rocky, a heartwarming Golden Retriever, found his second chance at happiness through the compassionate efforts of Paw Palace. Rescued from challenging circumstances, Rocky now radiates joy and warmth. His gentle nature and friendly demeanor make him a beloved member of our shelter. Despite his past, Rocky embraces every moment with an infectious spirit, reminding us all of the transformative power of love and care. Adopting Rocky means welcoming a loyal companion into your home, ready to fill your life with boundless love and tail-wagging joy.', 
    imageUrl: "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J" },
    { id:2, name: "Rex", gender: "male", dateOfBirth: "12.12.2020", shelter: "Hopeful Hearts", description:"Meet Rex, a charming male dog with a heartwarming story. Born on December 12, 2020, Rex is not just a pet; he's a bundle of joy looking for a forever home. This lovable canine resident from \"Hopeful Hearts\" shelter has an endearing personality that is bound to steal your heart. \nRex is a handsome fellow with a sleek coat and soulful eyes that reflect a history of resilience and hope. Despite life's challenges, he has maintained his friendly and affectionate nature. His playful spirit is contagious, and he loves engaging in various activities, be it a game of fetch, a leisurely stroll, or simply cuddling up for some quality time.\n\nThis adorable pooch thrives on companionship and is eager to form a lasting bond with a caring family. Rex's loyalty knows no bounds, making him the perfect addition to a loving home. If you're ready to open your heart and home to a furry friend, Rex is more than willing to reciprocate with unconditional love and unwavering loyalty.",
    imageUrl: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { id:3, name: "Cleopatra", gender: "female", dateOfBirth: "03.12.2019", shelter: "Hopeful Hearts", description: "Meet Cleopatra, a majestic female cat with an air of royalty that captivates all who encounter her. Born on December 3, 2019, Cleopatra has graced the halls of \"Hopeful Hearts\" shelter with her elegant presence. This feline beauty boasts a luxurious coat and mesmerizing eyes that reflect wisdom beyond her years.\n\n\Cleopatra is more than just a cat; she\'s a queen seeking her rightful throne in a loving home. Despite her regal demeanor, she is known for her gentle and affectionate nature. This feline royalty enjoys lounging in the sun, exploring her surroundings, and indulging in the occasional playful chase. Her graceful presence and soothing purrs make Cleopatra an ideal companion for those who appreciate the finer things in life. If you\'re ready to welcome sophistication and charm into your home, consider making Cleopatra the queen of your heart.", 
    imageUrl: "https://i.insider.com/5b33968e5e48ec1f008b4588?width=1200&format=jpeg" },
    { id:4, name: "Thor", gender: "male", dateOfBirth: "14.10.2018", shelter: "Hopeful Hearts", description: "Introducing Thor, a male dog with the heart of a warrior and a spirit as strong as his namesake. Born on October 14, 2018, Thor has been a loyal resident of \"Hopeful Hearts\" shelter, waiting for the right family to appreciate his strength and kindness. This mighty canine is ready to bring joy, laughter, and a touch of adventure into your life. Thor is a striking figure with a robust build, a testament to his resilience and vitality. His energetic personality shines through as he bounds through the play area, always eager for a game of fetch or a refreshing outdoor adventure. Despite his powerful exterior, Thor is a gentle giant with a heart full of love for those who earn his trust. If you're seeking a steadfast companion who embodies loyalty and courage, Thor is the perfect match. Consider inviting this mighty canine warrior into your home and embark on a journey of shared joy and unwavering companionship.",
    imageUrl: "https://www.purina.co.uk/sites/default/files/2020-12/Dog_1098119012_Teaser.jpg" },
  ]);

  const getShelterPets = () => {
    return shelterPets;
  }
  const addPet = (pet) => {
    var lastID = Math.max(...shelterPets.value.map(element => element.id));
    shelterPets.value.push({...pet, id: lastID + 1});
  };

  const deletePet = (petID) => {
    const index = shelterPets.value.findIndex(element => element.id === petID);

    if (index < 0)
      return;

    shelterPets.value.splice(index, 1);
  }

  return { shelterPets, getShelterPets, addPet, deletePet };
});

export default usePetStore;
