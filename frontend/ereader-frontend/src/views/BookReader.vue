<script>
import ePub from 'epubjs';
export default{
  props: {
      activeBook: {
        type: String,
        required: true
      }
  },
    data() {
        return {
          readerWidth: window.innerWidth/2,
          readerHeight: window.innerHeight-20
        }
    },
    methods: {
      back (){
        this.$router.replace({name:'Library'})
      },
      
      renderEpub() {
        this.book = new ePub(this.activeBook)
        this.rendition = this.book.renderTo('ebook', {
          width: "100%",
          height: "100%",
        });
        this.rendition.display()
      } ,
      nextPage(){
        this.rendition.next()
      },
      prevPage(){
        this.rendition.prev()
      }
    },
    mounted() {
        this.renderEpub()
    },
    
}
</script>

<template>
  <div class="nav">
    <button class="back" @click="back">Back</button>
  </div>
    <div class="book-wrapper center">
        <button class="reader-button" type="button" @keydown.left="prevPage" @click="prevPage"></button>
        <div id="ebook">
        </div>
        <button class="reader-button" type="button" @keydown.right="nextPage" @click="nextPage"></button>
    </div>
    <div id="book-controls">
      
    </div>
</template>

<style scoped>
.center {
  margin: auto;
}

#ebook{
    display: inline-block;
    border: 10px;
    border-color: red;
    width: 70vw;
    height: 40vw;
}

button.reader-button {
    display: inline-block;
    position: relative;
    margin: 0;
    flex-grow: 1;

    background-color: white; /* Green */
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
button.reader-button:hover {
    display: inline-block;
    position: relative;
    margin: 0;
    flex-grow: 1;

    background-color: gray; /* Green */
    opacity: 0.10;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
.book-wrapper{
    display: flex;
    justify-content: center;
}

div.nav {
  height: auto;
}

button.back {
    width: 80px;
    opacity: 0.66;
    border-radius: 5px;
    padding: 8px;
    margin: 8px 8px;
    text-decoration: none;
    border: none;
    color: white;
    background-color: black;
  }
    button.back:hover {
    width: 80px;
    position: relative;
    bottom: 0px;
    padding: 8px;
    margin: 8px 8px;
    text-decoration: none;
    border: none;
    color: white;
    background-color: blue;
  }
    button.back:active {
    width: 80px;
    position: relative;
    opacity: 1;
    bottom: 1px;
    padding: 8px;
    margin: 8px 8px;
    text-decoration: none;
    border: none;
    color: white;
    background-color: blue;
  }
</style>