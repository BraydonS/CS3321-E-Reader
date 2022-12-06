<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import LibraryPage from './views/LibraryPage.vue';
import BookReader from './views/BookReader.vue';

export default {
  components: {
  },
  name: 'App',
  data() {
    return {
    }
  }
}
</script>

