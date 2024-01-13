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

    <div class="image-container">
      <img src="../assets/dog1_main_page.jpg" alt="Dog 1" class="image">
      <img src="../assets/cat_main_page.jpg" alt="Cat 1" class="image">
      <img src="../assets/dog2_main_page.jpg" alt="Dog 2" class="image">
    </div>

   <div class="button-container">
    <v-btn rounded flat color="rgba(255, 201, 116, 0.7)" text="SEE ALL PETS" class="custom-btn" @click="navigateToPets" style="color: #5BB4A9;"></v-btn>
   </div>

  <div class="image-container">
      <img src="../assets/s1_main_page.jpg" alt="Shelter 1" class="image">
      <img src="../assets/s2_main_page.jpg" alt="Shelter 2" class="image">
      <img src="../assets/s3_main_page.jpg" alt="Shelter 3" class="image">
    </div>

   <div class="button-container">
    <v-btn rounded flat color="rgba(255, 201, 116, 0.7)" text="SEE ALL SHELTERS" class="custom-btn" @click="navigateToShelters" style="color: #5BB4A9;"></v-btn>
   </div>

</template>

<script>
export default {
  name: 'AdoptMePage',
  methods: {
    navigateToPets() {
      // Programmatically navigate to the "/pets" route
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
  margin-top: 5%;
  margin-bottom: 3%;
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
