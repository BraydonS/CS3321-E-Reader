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
        this.book = new ePub("./assets/Dune.epub")
        this.rendition = this.book.renderTo('read', {
          width: this.readerWidth,
          height: this.readerHeight,
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
        <button type="button" @click="prevPage">Back</button>
        <div class="ebook">  
            <div id="read"></div>
        </div>
        <button type="button" @click="nextPage">Foreward</button>
    </div>
</template>

<style>
.center {
  margin: auto;
}

.ebook{
    display: inline-block;
    border: 10px;
    border-color: red;
}

button {
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
.book-wrapper{
    display: flex;
    justify-content: center;
}
</style>