

<template>
    <div class="header">
  <h2>E-Reader</h2>
</div>

<div class="navbar">
  <img src ="https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt = "Profile Picture" class="avatar">
  
  <div class="search-container">
    <form>
      <input v-model="message" type="text" placeholder="Search.." name="search">
    </form>
  </div>
  
</div>

<div class="row">
  <div class="side">
    <h2>Library</h2>
    <a href="#">Add Book</a>
    <a href="#">Delete Book</a>
    
  </div>
  <div class="main">
    <div class="book-list">
      <div v-for="book in filteredBooks" :key="book.id" class="book-item" @click="loadReader(book.id)">
        <p id="title">{{ book.title }}</p>
        <p id="author">{{ book.author }}</p>
      </div>
    </div>
  </div>
</div>

<div class="footer">
  
</div>
    
  </template>


  
  <script scoped>

  export default {
    data() {
      let books = [
        { id:0, title: 'Dune', author: 'Frank Herbert', url: "./assets/Dune.epub"},
        { id:1, title: 'A Room With A View', author: 'E. M. Forster', url:"./assets/aroom.epub" },
        { id:2, title: 'Moby Dick', author: 'Herman Melville', url:"./assets/moby.epub" },
        // ...
      ]
      return{
        showUpload: false,
        books: books,
        message: ""
      }
      
    },
    computed: {
      filteredBooks() {
        return this.books.filter(p =>{
          return p.title.toLowerCase().indexOf(this.message.toLowerCase()) != -1 || p.author.toLowerCase().indexOf(this.message.toLowerCase()) != -1;
        })
      }
    },
    methods: {
      loadReader(id){
        let book = this.books.find(book => book.id === id);
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
    margin-left: 1em;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1200px){
    .book-list {
      margin-top: 0px;
      display: grid;
      margin: auto;
      margin-left: 1em;
      grid-template-columns: repeat(4, 1fr);
    }
  }
    
  p{
    color:wheat;
  }

  .book-item {
    padding: 60px 20px;
    width: 200px;
    height: 300px;
    margin-top: 10px;
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
  .book-item:hover {
    padding: 60px 20px;
    width: 200px;
    position: relative;
    bottom: 5px;
    height: 300px;
    margin-top: 10px;
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

  * {
  box-sizing: border-box;
}

html {
  height: 100%
}

body {
  font-family: Arial, Helvetica, sans-serif;
  min-height: 100%;
  margin: 0;
  padding: 0;
}

/* Style the header */
.header {
  padding: 1px;
  text-align: center;
  background: #98B4D4;
  color: white;
}

/* Increase the font size of the h1 element */
.header h1 {
  font-size: 40px;
}

/* Style the top navigation bar */
.navbar {
  overflow: hidden;
  background-color: #333;
}

/* Style the profile picture */
.navbar .avatar {
  padding: 5px 5px;
  float: right;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.navbar input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.navbar .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.navbar .search-container button:hover {
  background: #ccc;
}


/* Style the Add/Delete book options */
.side a {
  display: block;
  color: black;
  text-decoration: none;
  padding: 14px 15px;
}

/* Style the Add/Delete book options */
.side a:hover {
  background-color: #ddd;
}

/* Style search box */
.navbar .search-container {
  float: left;
  text-align: center;
  padding: 0px 5px;
}


/* Change color on hover */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}

/* Column container */
.row {  
  display: flex;
  flex-wrap: wrap;
}

/* Create two unequal columns that sits next to each other */
/* Sidebar/left column */
.side {
  flex: 20%;
  background-color: #f1f1f1;
  padding: 20px;
}

/* Main column */
.main {   
  flex: 80%;
  background-color: white;
  padding: 20px;
}


/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
}

/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 700px) {
  .row {   
    flex-direction: column;
  }
}

/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */
@media screen and (max-width: 400px) {
  .navbar a {
    float: none;
    width:100%;
  }
}

@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
}


  </style>