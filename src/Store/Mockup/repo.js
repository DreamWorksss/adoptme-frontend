function createRepository() {
    this.petList = [
        {
            id: 0,
            name: "Rocky",
            gender: "male",
            dateOfBirth: "16-05-2019",
            shelter: "Paw Palace",
            shelterID: 0,
            description:
                "“Rocky, a heartwarming Golden Retriever, found his second chance at happiness through the compassionate efforts of Paw Palace. Rescued from challenging circumstances, Rocky now radiates joy and warmth. His gentle nature and friendly demeanor make him a beloved member of our shelter. Despite his past, Rocky embraces every moment with an infectious spirit, reminding us all of the transformative power of love and care. Adopting Rocky means welcoming a loyal companion into your home, ready to fill your life with boundless love and tail-wagging joy.”",
            imageUrl:
                "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J",
        },
        {
            id: 1,
            name: "Max",
            gender: "male",
            dateOfBirth: "18-11-2022",
            shelter: "Paws and Claws Haven",
            shelterID: 0,
            description:
                '"Max, an adorable dog with a charming personality, awaits a loving home at Paws and Claws Haven. His playful spirit and friendly disposition make him an ideal companion for an active family. Max enjoys outdoor adventures and is sure to bring boundless joy to his adoptive family. If you\'re seeking a loyal canine friend, consider welcoming Max into your home."',
            imageUrl:
                "https://images.rawpixel.com/image_300/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg",
        },
        {
            id: 2,
            name: "Chloe",
            gender: "female",
            dateOfBirth: "13-04-2020",
            shelter: "Whisker Whispers",
            shelterID: 0,
            description:
                "\"Meet Chloe, a graceful feline resident of Whisker Whispers. This elegant cat enchants everyone with her charming presence. Chloe's journey began when our shelter's compassionate team found her abandoned, shivering, and scared on the cold city streets. She blossomed into the affectionate cat she is today. By welcoming Chloe into your home, you not only gain a stunning feline companion but also become a part of her heartwarming tale of transformation.\"",
            imageUrl:
                "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
        },
        {
            id: 3,
            name: "Oliver",
            gender: "male",
            dateOfBirth: "25-06-2023",
            shelter: "Meow Mansion",
            shelterID: 4,
            description:
                '"Oliver, a charming male cat, awaits a loving home at Meow Mansion. With his sleek fur and captivating eyes, Oliver is sure to capture your heart. Rescued from uncertain circumstances, he has blossomed into a playful and affectionate companion. Consider making Oliver a part of your family, and experience the joy of feline companionship."',
            imageUrl:
                "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
        },
        {
            id: 4,
            name: "Felix",
            gender: "male",
            dateOfBirth: "22-09-2019",
            shelter: "Purr Paradise",
            shelterID: 5,
            description:
                '" Felix, a charismatic male cat from Purr Paradise, is ready to bring endless joy to your home. With his smooth-haired red coat, Felix exudes beauty and charm. His playful antics and loving nature make him an ideal companion for those seeking a delightful feline friend. Consider welcoming Felix into your home and become a part of his journey of happiness."',
            imageUrl:
                "https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.668xw:1.00xh;0.119xw,0&resize=1200:*",
        },
    ];

    this.addPet = (animal) => {
        const lastID = Math.max(
            ...this.petList.map((element) => element.id));
        console.log({ ...animal, id: lastID + 1, shelterID: 0 });
        this.petList.push({ ...animal, id: lastID + 1, shelterID: 0 });
    };

    this.findPetPositionById = (animalID) => {
        for (let index = 0; index < this.petList.length; index++) {
            const animal = this.petList[index];
            if (animal.id == animalID) return index;
        }

        return -1;
    };
    
    this.removePet = (animalId) => {
        const index = this.findPetPositionById(animalId);
        if (index == -1) return;

        this.petList.splice(index, 1);
    };

    this.updatePet = (newAnimal) => {
        const index = this.findPetPositionById(newAnimal.id);
        if (index == -1) return;

        this.petList[index] = newAnimal;
    };
}

export default createRepository;
