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
        }
    },
    methods: {
      back (){
        let ebook = document.getElementById('ebook');
        ebook.innerHTML = "";
        this.$router.replace({name:'Library'})
      },
      renderEpub() {
        this.book = new ePub(this.activeBook)
        this.rendition = this.book.renderTo('ebook', {
          width: "100%",
          height: "100%",
        });
        this.rendition.display()
        this.book.loaded.navigation.then(function(toc){
        var $select = document.getElementById("toc"),
            docfrag = document.createDocumentFragment();

        toc.forEach(function(chapter) {
          var option = document.createElement("option");
          option.textContent = chapter.label;
          option.ref = chapter.href;

          docfrag.appendChild(option);
        });

        $select.appendChild(docfrag);

      });
      } ,
      nextPage(){
        this.rendition.next()
      },
      prevPage(){
        this.rendition.prev()
      },
      updateChapter(){
        var $select = document.getElementById("toc")
        var index = $select.selectedIndex,
          url = $select.options[index].ref;
        this.rendition.display(url);
      }
    },
    mounted() {
        this.renderEpub()
        
    }
    
}
</script>

<template>
    <div class="nav">
      <button class="back" @click="back">Back</button>
      <select @change="updateChapter" id="toc"></select>
    </div>
      <div class="book-wrapper center">
          <button class="reader-button next-page" type="button" @keydown.left="prevPage" @click="prevPage">
            <img class="arrow" src="../../assets/left_arrow.png"/>
          </button>
          <div id="ebook">
          </div>
          <button class="reader-button prev-page" type="button" @keydown.right="nextPage" @click="nextPage">
            <img class="arrow" src="../../assets/right_arrow.png"/>
          </button>
      </div>
</template>

<style scoped>
.center {
  margin: auto;
}

select{
    width: 200px;
    text-decoration: none;
    border: none;
    color: white;
    font-size: 12px;
    background-color: gray;
}

select:hover{
    opacity: 0.66;
    background-color: rgba(0, 0, 255, 1);
    text-decoration: none;
    border: none;
    color: white;
}

img.arrow {
  width: 20px;
}



#ebook{
    display: inline-block;
    border: 10px;
    border-color: red;
    width: 70vw;
    height: 95vh;
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

    background-color: rgba(128, 128, 128, 0.125); /* Green */
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
  height: 40px;
  display: flex;
  background-color: gray;
}

button.back {
    width: 80px;
    text-decoration: none;
    border: none;
    color: white;
    background-color: gray;
  }
    button.back:hover {
    opacity:0.66;
    width: 80px;
    position: relative;
    text-decoration: none;
    border: none;
    color: white;
    background-color: blue;
  }
    button.back:active {
    width: 80px;
    position: relative;
    text-decoration: none;
    border: none;
    color: white;
    background-color: blue;
  }
</style>