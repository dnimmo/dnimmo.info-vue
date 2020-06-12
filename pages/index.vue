<template>
  <div>
    <div class="root">
      <sidebar/>
      <channel-content/>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar/Sidebar.vue'
import ChannelContent from '~/components/ChannelContent/ChannelContent.vue'

export default {  
  components: {
    Sidebar,
    ChannelContent
  }
}
</script>

<style lang="scss" scoped>
.root {
  min-height: 95vh;
  color: white;
  font-family: 'Hind', sans-serif;
  
  @media(min-width: 450px) {
    display: grid;
    grid-template-columns: 257px 1fr;
  }
}
</style>

