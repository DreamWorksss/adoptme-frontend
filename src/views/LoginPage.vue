<template>
  <div class="login-page">
    <div class="left-section">
      <img src="@/assets/dog_login_page.jpg" alt="Dog" class="dog-image">
    </div>

    <div class="right-section">
      <div class="login-form">
        <h2 class="login-title">Login Account</h2>
        <form @submit.prevent="login">
          <div class="input-group">
            <input type="text" id="username" v-model="username" required>
            <label for="username">Username</label>
          </div>
          <div class="input-group">
            <input type="password" id="password" v-model="password" required>
            <label for="password">Password</label>
          </div>
          <a href="#/passwordreset" class="forgot-password">Forgot password?</a>
          <v-btn rounded color="#ffc974" text="Login" class="custom-btn"></v-btn>
        </form>
        <div class="create-account">
        <a href="#/register" class="create-account">Request account➜</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Handle login logic here
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      // You can implement your login logic using an API call or other methods
      // For this example, it logs the username and password to the console
    }
  }
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: rgb(42, 157, 143);
  background: linear-gradient(
    0deg,
    rgba(42, 157, 143, 0.75) 0%, 
    rgba(255, 255, 255, 0) 80%
  );
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
}

.login-title {
  font-size: 1.5rem;
  text-decoration: underline; 
}

.left-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dog-image {
  width: 95%;
  max-width: 100rem;
  height: auto;
  max-height: 60vh;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
}

.right-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  text-align: center;
  padding: 3rem;
  background-color: #fff;
  border-radius:1rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
  border: 0.05rem solid orange;
}

.login-form h2 {
  font-size: 1.5rem;
  margin-bottom: 5rem;
}

.input-group {
  position: relative;
  margin-bottom: 2.3rem; 
}

.input-group input {
  border: none;
  border-bottom: 0.1rem solid orange;
  padding: 0rem;
  width: 100%;
  border-radius: 0rem;
}

.input-group input:focus {
  outline: none;
}

.input-group label {
  position: absolute;
  top: 0rem;
  left: 0.5rem; 
  pointer-events: none;
  transition: 0.3s ease-out all;
}

.input-group input:focus + label,
.input-group input:not(:placeholder-shown) + label {
  top: -1.25rem; 
  font-size: 0.75rem;
}

.forgot-password {
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem; 
  margin-left: 6rem;
  margin-top: -1.5rem;
}

.create-account {
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.3s ease; 
  font-size: 1rem; 
  padding: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-bottom: 0.3125rem;
}

input {
  padding: 1rem;
  margin-bottom: 0.9375rem;
  width: 20rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid #ccc;
}

.custom-btn {
  margin-top: 0.9375rem;
  padding: 0.625rem 1.25rem;
  background-color: #ffc974;
  color: #333;
  border: none;
  border-radius: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.custom-btn:hover {
  background-color: #ffa500;
}
</style>
