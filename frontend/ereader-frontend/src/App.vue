<template>
  <div id="app">
    <RegisterPage/>
  </div>
</template>

<script>
import LibraryPage from './components/LibraryPage.vue'
import BookReader from './components/BookReader.vue';
import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';

export default {
  name: 'App',
  components: {
    BookReader,
    LibraryPage,
    LoginPage,
    RegisterPage,
  },
  data() {
    return {
      books: [
        { title: 'book1', author: 'author1' },
        { title: 'book2', author: 'author2' },
        { title: 'book3', author: 'author3' },
        { title: 'book4', author: 'author4' },
        { title: 'book4', author: 'author4' },
        { title: 'book4', author: 'author4' },
        { title: 'book4', author: 'author4' },
        { title: 'book4', author: 'author4' },
        // ...
      ]
    }
  }
}
</script>

