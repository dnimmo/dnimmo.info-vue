<template>
  <section class="channelContentWrapper">
    <channel-header :header="channelDetails" />
    <div 
      class="postContainer"
      :class="$store.state.name === states.DISPLAYING_THREAD_CONTENT ? 'unfocus' : 'focus' " 
      >
      <post 
        v-for="post in posts" 
        :key="post.mainPostContent"
        :post="post"
        :openThreadFunction="openThread"
      />
    </div>
    <thread
      v-if="$store.state.name === states.DISPLAYING_THREAD_CONTENT" 
      :header="$store.state.threadContent.header"
      :posts="$store.state.threadContent.posts"
      :closeThreadFunction="closeThread"
    />
  </section>
</template>

<script>
import ChannelHeader from './ChannelHeader'
import Post from './Post'
import Thread from './ThreadContent'
import getChannel from '~/data/channels'
import store, { states } from '~/state/channel_content'

export default {
  store,
  props: {
    channelSlug: {
      type: String,
      required: true,
    },
  },
  data () {
    const channel = getChannel(this.channelSlug)

    return {  
      states,
      channelDetails: {
        title: channel.name,
        slug: channel.slug,
        description: channel.description
      },
      posts: channel.content 
    }
  },
  methods: {
    openThread({ header, posts }) {
      this.$store.commit('openThread', { header, posts })
    },
    closeThread() {
      this.$store.commit('closeThread')
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

  .postCointainer {
    transition: 2s opacity ease-in-out;
  }

  .focus {
    opacity: 1;
  }
  
  .unfocus {
    display: none;

    @media screen and (min-width:450px) {
      display: block;
      opacity: 0.3;
    }
  }
</style>