<template>
  <!-- TODO: Reduce the repetition amongst the page files-->
  <div class="root">
    <sidebar/>
    <channel-content channelSlug="projects"/>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar/Sidebar'
import ChannelContent from '~/components/ChannelContent/ChannelContent'

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
  margin: -8px;
  
  @media(min-width: 450px) {
    display: grid;
    grid-template-columns: 257px 1fr;
  }
}
</style>

