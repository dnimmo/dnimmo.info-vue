<template>
  <section class="channelContentWrapper">
    <channel-header :header="channelDetails" />
    <post 
      v-for="post in posts" 
      :key="post.mainPostContent"
      :post="post"
    />
    <thread
      v-if=false 
    />
  </section>
</template>

<script>
import ChannelHeader from './ChannelHeader'
import Post from './Post'
import Thread from './ThreadContent'
import getChannel from '~/data/channels'

const channel =
  getChannel('general')

export default {
  props: {
    channelSlug: {
      type: String,
      required: true,
    },
  },
  data () {
    return {  
      channelDetails: {
        title: channel.name,
        slug: channel.slug,
        description: channel.description
      },
      posts: channel.content 
    }
  },
  components: {
    ChannelHeader,
    Post,
    Thread
  },
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