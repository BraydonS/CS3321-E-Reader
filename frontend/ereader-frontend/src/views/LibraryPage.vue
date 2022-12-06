

<template>
  <div id="library-control">
    <button class="library-control-buttons" @click="changeUploadVis" id="upload">Upload Book</button>
  </div>
    <div class="book-list">
      <div v-for="book in books" :key="book.title" class="book-item">
        <p id="title">{{ book.title }}</p>
        <p>{{ book.author }}</p>
      </div>
    </div>
    <div v-if="showUpload">
      <UploadBook/>
    </div>
    
  </template>

 
  
  <script scoped>
  import UploadBook from '../components/UploadBook.vue';
  import { ref, onMounted } from 'vue'

  export default {
    data() {
      return{
        showUpload: false
      }
      
    },
    components:{
      UploadBook
    },
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
    },
    methods: {
      changeUploadVis(){
        if (this.showUpload == false){
          this.showUpload = true
        }
        else {
          this.showUpload = false
        }
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
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1200px){
    .book-list {
      margin-top: 30px;
      display: grid;
      margin: auto;
      margin-left: 7em;
      grid-template-columns: repeat(4, 1fr);
    }
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

  #library-control {
    display: flex;
    margin: 0px;
    height: 40px;
    flex-direction: row;
    align-items: center;
    background-color: gray;
  }

  button.library-control-buttons {
    height: 40px;
    border: 0px;
    padding: 4px;
    background-color: rgba(0,0,255,0.66);
    color: white;
    font-weight: 800;
  }


  </style>