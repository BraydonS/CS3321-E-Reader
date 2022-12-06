<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
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

