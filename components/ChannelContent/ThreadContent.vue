<template>
  <section class="threadWrapper">
    <channel-header
      :header="header"
    >
      <button 
        class="button"
        @click="closeThreadFunction">
          Close thread
      </button>
    </channel-header>
    <div class="spacer" />
    <post 
      v-for="post in posts"
      :animate="false"
      :key="post.mainPostContent"
      :post="post"
    />
  </section>
</template>

<script>
import ChannelHeader from './ChannelHeader'
import Post from './Post'

export default {
  props: {
    header: {
      title: {
        type: String,
        required: true
      },
      slug: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    },
    posts: {
      type: Array,
      required: true,
    },
    closeThreadFunction: {
      type: Function,
      required: true
    }
  },
  components: {
    ChannelHeader,
    Post
  }
}
</script>

<style lang="scss" scoped>
  @keyframes slideUp {
    from {
      transform: translate3d(0, 200vh, 0)
    }

    to {
      transform: translate3d(0, 0, 0)
    }
  }

  @keyframes slideIn {
    from {
      transform: translate3d(100vw, 0, 0)
    }

    to {
      transform: translate3d(0, 0, 0)
    }
  }

  .threadWrapper {
    position: absolute;
    top: 0;
    right: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    border-left: 1px solid #d8d8d8;
    overflow: scroll;
    animation: slideUp .3s;

    @media screen and (min-width:450px){
      width: 50%;
      animation: slideIn .3s;
    };
  }

  .button {
    background: none;
    border: 1px solid #777;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px 0;
    cursor: pointer;
  }

  .spacer {
    height: 35px;
  }
</style>