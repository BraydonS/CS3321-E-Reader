<script>
import ePub from 'epubjs';
export default{
    data() {
        return {
          readerWidth: window.innerWidth/2,
          readerHeight: window.innerHeight-20
        }
    },
    methods: {
      renderEpub() {
        this.book = new ePub("./CS3321-E-Reader/assets/Dune.epub")
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
    }
}
</script>

<template>
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
</style>