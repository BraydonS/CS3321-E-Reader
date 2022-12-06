<template>
    <div id="login">
      <form @submit.prevent="login">
        <label for="username">Username</label>
        <input selected class="login" id="username" type="text" v-model="username" />
        <label for="password">Password</label>
        <input class="login" id="password" type="password" v-model="password" />
        <div id="submit-buttons">
          <button class="form-button" type="submit">Login</button>
          <button class="form-button" type="register">Register</button>
        </div>
      </form>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      login() {
        
      }
    }
  }
  </script>
  <style scoped>
  #login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 30px;
    border-style: solid;
    border-radius: 20px;
    border-color: rgba(0, 0, 255, 0.5);
  }
  label {
    margin: 8px 0;
    text-align: left;
    width: 240px;
    padding: 0px;
    opacity: 0.80;
  }
  input.login {
    border-style: solid;
    width: 220px;
    padding: 8px;
    margin: 8px 0;
    border-radius: 2px;
  }

  button.form-button {
    width: 80px;
    opacity: 0.66;
    border-radius: 5px;
    padding: 8px;
    margin: 8px 20px;
    text-decoration: none;
    border: none;
    color: white;
    background-color: black;
  }
    button.form-button:hover {
    width: 80px;
    position: relative;
    bottom: 0px;
    padding: 8px;
    margin: 8px 20px;
    text-decoration: none;
    border: none;
    color: white;
    background-color: blue;
  }
    button.form-button:active {
    width: 80px;
    position: relative;
    opacity: 1;
    bottom: 1px;
    padding: 8px;
    margin: 8px 20px;
    text-decoration: none;
    border: none;
    color: white;
    background-color: blue;
  }
  
  </style>