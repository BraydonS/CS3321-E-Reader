<template>
    <div id="login">
      <form @submit.prevent="register">
        <label for="name">Name</label>
        <input class="register" selected id="name" type="text" v-model="name" />
        <label for="email">Email</label>
        <input selected class="login" id="email" type="text" v-model="email" />
        <label for="password">Password</label>
        <input class="register" id="password" type="password" v-model="password" />
        <div id="submit-buttons">
          <button class="form-button" type="submit">Submit</button>
          <button class="form-button">Back</button>
        </div>
      </form>
    </div>
  </template>
  <script>

  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods: {
      register() {
        let newUser = {
          name: this.name,
          email: this.email,
          password: this.password
        }
      }
    }
  }
  </script>
  <style>
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
  input.register {
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