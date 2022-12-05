<template>
  <div id="library-control">
    <input class="file-input" type="file" @change="uploadFile" ref="file">
    <button id="upload">Upload Book</button>
  </div>
    <div class="book-list">
      <div v-for="book in books" :key="book.title" class="book-item">
        <p id="title">{{ book.title }}</p>
        <p>{{ book.author }}</p>
      </div>
    </div>
  </template>

 
  
  <script>
  import {ref} from "vue"

  export default {
    name: 'BookList',
    props: {
      books: {
        type: Array,
        required: true,
      }
    },
    setup() {
      const file = ref(null)

      const uploadFile = async() => {
        // TODO: Implement upload logic
        console.log("Add upload logic")
      }
    }
  }
  </script>
  
  <style scoped>
  .book-list {
    margin-top: 30px;
    display: grid;
    margin: auto;
    margin-left: 7em;
    grid-template-columns: repeat(4, 1fr);
  }
  
  .book-item {
    padding: 80px 20px;
    width: 200px;
    margin: 2em 0em;
    margin-bottom: 40px;
    border-style: solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-radius: 5px;
    background-color: #6e4616;
    border-color: #6e4616;
    box-shadow: 5px 0px wheat;
    
  }

  #title {
    font-size: 25px;
  }

  #upload {
    
  }

  </style>