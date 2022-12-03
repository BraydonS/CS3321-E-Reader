<template>
    <div id="login">
      <form @submit.prevent="login">
        <label for="username">Username</label>
        <input selected id="username" type="text" v-model="username" />
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" />
        <div id="submit-buttons">
          <button type="submit">Submit</button>
          <button type="back">Back</button>
        </div>
      </form>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        
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
  }
  label {
    margin: 8px 0;
    text-align: left;
    width: 240px;
    padding: 0px;
    opacity: 0.80;
  }
  input {
    border-style: solid;
    width: 220px;
    padding: 8px;
    margin: 8px 0;
    border-radius: 2px;
  }
  button {
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
    button:hover {
    width: 80px;
    position: relative;
    bottom: 1px;
    padding: 8px;
    margin: 8px 20px;
    text-decoration: none;
    border: none;
    color: white;
    background-color: blue;
  }
  
  </style>