<template>
  <section class="channelContentWrapper">
    <channel-header />
    <post />
    <thread />
  </section>
</template>

<script>
import ChannelHeader from './ChannelHeader'
import Post from './Post'
import Thread from './ThreadContent'

export default {
  components: {
    ChannelHeader,
    Post,
    Thread
  }
}
</script>

<style lang="scss" scoped>
  .channelContentWrapper {
    background-color: #fff;
    color: #000; 

    @media screen and (min-width:450px) {
      box-shadow: inset 5px 5px 10px rgba(0,0,0,0.1);
      height: 100vh;
      overflow: overlay;
    }
  }

</style>