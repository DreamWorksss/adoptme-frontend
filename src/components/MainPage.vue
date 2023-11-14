<template>
  <div class="main-page">
    <div class="content">
      <p class="paragraph">
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
      <v-btn rounded flat color="#ffc974" text="ADOPT" style="font-size: 20px; padding: 5px 30px;"></v-btn>
      <v-btn rounded flat color="#ffc974" text="DONATE" style="font-size: 20px; padding: 5px 30px;"></v-btn>
      <v-btn rounded flat color="#ffc974" text="VOLUNTEER" style="font-size: 20px; padding: 5px 30px;"></v-btn>
    </div>

    <div class="image-container">
      <img src="@/assets/dog1.jpg" alt="Dog 1" class="image">
      <img src="@/assets/cat.jpg" alt="Cat 1" class="image">
      <img src="@/assets/dog2.jpg" alt="Dog 2" class="image">
    </div>

</template>

<script>
export default {
  name: 'AdoptMePage'
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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.content {
  max-width: 30cm;
  padding: 2em 1em; 
  text-align: center;
  margin: 0 auto;
}

.paragraph {
  font-size: 31px;
  font-weight: lighter;
  font-style: italic;
  line-height: 1.5;
  color: #333;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.v-btn {
  margin: 0 70px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.image-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.image {
  width: 300px;
  margin: 0;
}

</style>
