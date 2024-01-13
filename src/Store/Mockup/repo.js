function createRepository() {
    this.petList = [
        {
            id: 0,
            name: "Rocky",
            gender: "male",
            dateOfBirth: "16-05-2019",
            shelter: "Hopeful Hearts",
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
            shelter: "Hopeful Hearts",
            shelterID: 0,
            adoptionRequests: [],
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
            shelter: "Hopeful Hearts",
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

    this.shelterList = [
        {
            id: 0,
            name: "Hopeful Hearts",
            imageUrl:"https://mda.maryland.gov/vetboard/PublishingImages/shelterpic.jpg",
            description: "Welcome to our compassionate animal shelter, where every wag of a tail and purr of contentment matters. At our shelter, we provide a safe haven for abandoned, neglected, and surrendered animals. Our dedicated team strives to match each furry friend with their forever home, ensuring they receive love, care, and attention."
        },
        {
            id: 1,
            name: "Purr Paradise",
            imageUrl:"https://www.spcai.org/wp-content/uploads/2022/03/gostomel4-scaled.jpeg",
            description: "Discover a sanctuary for animals in need at our shelter, a place where compassion meets commitment. Our shelter stands as a beacon of hope for homeless pets, offering them a second chance at happiness. From playful puppies to serene seniors, we house a diverse array of animals awaiting loving families."
        },
        {
            id: 2,
            name: "Meow Mansion",
            imageUrl:"https://images.wsj.net/im-831237?width=700&height=466",
            description: "Step into our welcoming animal shelter, a haven where tails never stop wagging and hearts are always full. Our mission is simple: to rescue, rehabilitate, and rehome animals in need. With a dedicated team of caregivers and volunteers, we provide a nurturing environment for our furry residents."
        }
    ];

    this.adoptionRequests = [
        {
            id: 1,
            petID: 0,
            name: "PR",
            phoneNumber: "0773217090",
            email: "popescu_razvan@gmail.com",
            message: "I want to adopt this cootie patootie. =)))",
        },
        {
            id: 1,
            petID: 0,
            name: "Popescu Razvan",
            phoneNumber: "0773217090",
            email: "popescu_razvan@gmail.com",
            message: "I want to adopt this cootie patootie. =)))",
        },
        {
            id: 2,
            petID: 1,
            name: "Petrescu Georgiana",
            phoneNumber: "0738114028",
            email: "petrescu_georgiana@gmail.com",
            message: " I want to adopt this cutie patootie. <333",
        },
    ];
    this.getPetById = (id) => {
        const index = this.findPetPositionById(id);

        if (index != -1) {
            return this.petList[index];
        }

        return undefined;
    };

    this.addPet = (animal) => {
        const lastID = Math.max(...this.petList.map((element) => element.id));
        this.petList.push({ ...animal, id: lastID + 1, shelterID: 0, shelter: "Hopeful Hearts" });
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

    this.addRequest = (newRequest) => {
        const lastID = Math.max(...this.adoptionRequests.map((element) => element.id));
        this.adoptionRequests.push({ ...newRequest, id: lastID + 1});
    };

    this.findRequestPositionById = (requestID) => {
        for (let index = 0; index < this.adoptionRequests.length; index++) {
            const request = this.adoptionRequests[index];
            if (request.id == requestID) return index;
        }

        return -1;
    };

    this.removeRequest = (requestID) => {
        const index = this.findRequestPositionById(requestID);
        if (index == -1) return;

        this.adoptionRequests.splice(index, 1);
    }

    this.findRequestsForPet = (petID) => {
        const result = [];
        
        for (const request of this.adoptionRequests)
        {
            if (request.petID == petID)
                result.push(request);
        }

        return result;
    }
}

export default createRepository;
