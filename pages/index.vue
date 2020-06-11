<template>
  <section class="wrapper">
    <sidebar/>
  </section>
</template>

<script>
import Sidebar from '~/components/Sidebar/Sidebar.vue'

export default {  
  components: {
    Sidebar
  }
}
</script>

<style scoped>
.wrapper {
  min-height: 95vh;
  color: white;
  font-family: 'Hind', sans-serif;
  @media(min-width: 450px){
    display: grid;
    grid-template-columns: 257px 1fr;
  }
}
</style>

