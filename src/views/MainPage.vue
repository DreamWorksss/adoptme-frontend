<script setup>

</script>

<template>
  <div class="main-page">
    <div class="content">
      <p class="paragraph font-weight-light">
        At AdoptMe, we're your go-to destination for finding your ideal cat or dog companion.
        Easily search for your perfect match based on your preferences, knowing that adoption changes lives.
        If you can't adopt, your donations are invaluable in supporting our mission to rescue and rehome animals.
      </p>
      <p class="paragraph">
        Join us in spreading love, one paw at a time, and become a part of the AdoptMe family! 🐾
      </p>
    </div>
  </div>

  <div class="button-container">
    <v-btn rounded flat color="rgba(255, 201, 116, 0.7)" text="PET FINDER" class="custom-btn" @click="navigateToPetFinder" style="color: #5BB4A9;"></v-btn>
  </div>

  <v-container fluid class="pa-0">
    <div class="v-row">
      <v-img
        :aspect-ratio="16/9"
        cover
        src="https://www.capewayvet.com/blog/wp-content/uploads/2014/06/dog-shelter.jpg"
      ></v-img>
      <v-img
        :aspect-ratio="16/9"
        cover
        src="https://images.theconversation.com/files/517333/original/file-20230324-20-qmnsgu.jpg?ixlib=rb-1.1.0&rect=0%2C298%2C6413%2C3206&q=45&auto=format&w=1356&h=668&fit=crop"
      ></v-img>
      <v-img
        :aspect-ratio="16/9"
        cover
        src="https://www.cesarsway.com/wp-content/uploads/2015/11/You-to-the-rescue-Starting-your-own-shelter.jpg"
      ></v-img>
    </div>
  </v-container>

  <div class="button-container">
    <v-btn rounded flat color="rgba(255, 201, 116, 0.7)" text="SEE ALL PETS" class="custom-btn" @click="navigateToPets" style="color: #5BB4A9;"></v-btn>
  </div>

  <v-container fluid class="pa-0">
    <div class="v-row">
      <v-img
        :aspect-ratio="16/9"
        cover
        src="https://icma.org/sites/default/files/3218_Animal%20shelter.JPG"
      ></v-img>
      <v-img
        :aspect-ratio="16/9"
        cover
        src="https://i.pinimg.com/originals/97/19/9c/97199cdda2fec20471eb88c8da150220.jpg"
      ></v-img>
      <v-img
        :aspect-ratio="16/9"
        cover
        src="https://i.pinimg.com/736x/7a/24/4f/7a244faee80fc50315ba5082e302caf8.jpg"
      ></v-img>
    </div>
  </v-container>

   <div class="button-container">
    <v-btn rounded flat color="rgba(255, 201, 116, 0.7)" text="SEE ALL SHELTERS" class="custom-btn" @click="navigateToShelters" style="color: #5BB4A9;"></v-btn>
   </div>

</template>

<script>
export default {
  name: 'AdoptMePage',
  methods: {
    navigateToPetFinder() {
      this.$router.push('/petfinder');
    },
    navigateToPets() {
      this.$router.push('/pets');
    },
    navigateToShelters() {
      this.$router.push('/shelters');
    },
  },
}
</script>

<style>
.main-page {
  display: flex;
  justify-content: center;
  background: rgb(42, 157, 143);
  background: linear-gradient(
    0deg,
    rgba(42, 157, 143, 0.75) 0%, 
    rgba(255, 255, 255, 0) 80%
  );
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
}

.content {
  max-width: 80%;
  padding: 2em 1em; 
  text-align: center;
  margin: 0 auto;
  font-family: 'Nunito', sans-serif;
  font-weight: 300;
}

.paragraph {
  font-size: 1.9rem;
  font-style: italic;
  line-height: 1.5;
  color: #333;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 3%;
  margin-bottom: 7%;
}

.custom-btn {
  font-size: 1.25rem;
  padding: 0.3125rem 1.875rem;
  margin: 0 11.5rem; /* Increase the margin between buttons */
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3);
  border-radius: 12px; /* Set the desired border radius */
}

.image-container {
  display: flex;
  justify-content: center;
  margin-top: 5%;
  flex-wrap: wrap;
}

.image {
  width: 580px;
  margin: 0;
}

</style>