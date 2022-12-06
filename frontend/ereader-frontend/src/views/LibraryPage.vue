

<template>
  <div id="library-control">
  </div>
    <div class="book-list">
      <div v-for="book in books" :key="book.title" class="book-item" @click="loadReader(book.id)">
        <p id="title">{{ book.title }}</p>
        <p>{{ book.author }}</p>
      </div>
    </div>
    
  </template>

 
  
  <script scoped>
  import { ref, onMounted } from 'vue'

  export default {
    data() {
      return{
        showUpload: false,
        books: [
        { id:0, title: 'Dune', author: 'Frank Herbert', url: "./CS3321-E-Reader/assets/Dune.epub"},
        { id:1, title: 'A Room With A View', author: 'E. M. Forster', url:"./CS3321-E-Reader/assets/aroom.epub" },
        { id:2, title: 'book3', author: 'author3' },
        { id:3, title: 'book4', author: 'author4' },
        { id:4, title: 'book4', author: 'author4' },
        { id:5, title: 'book4', author: 'author4' },
        { id:6, title: 'book4', author: 'author4' },
        { id:7, title: 'book4', author: 'author4' },
        // ...
      ]
      }
      
    },
    components:{
    },
    setup() {
      const file = ref(null)

      const uploadFile = async() => {
        // TODO: Implement upload logic
        console.log("Add upload logic")
      }
    },
    methods: {
      loadReader(id){
        let book = this.books.find(book => book.id === id);
        console.log(book.url)
        this.$router.replace({name:'Reader', params:{activeBook: book.url}});
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