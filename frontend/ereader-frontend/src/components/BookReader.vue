<script>
import ePub from 'epubjs';
export default{
    data() {
        return {
        }
    },
    methods: {
      renderEpub() {
        this.book = new ePub("./assets/Dune.epub")
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth/2,
          height: window.innerHeight-20
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
    <div class="book-wrapper">
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
  width: 50%;
}

.ebook{
    display: inline-block;
}

button {
    display: inline-block;
}
.book-wrapper{
    margin-left: 20%;
}
</style>