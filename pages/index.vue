<template>
  <div class="root">
    <sidebar/>
    <channel-content :channelSlug="channelSlug"/>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar/Sidebar.vue'
import ChannelContent from '~/components/ChannelContent/ChannelContent.vue'
import { channels } from '~/data/channels'

export default {  
  data() {
    return { 
      channelSlug: channels[0].slug 
    }
  },
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

