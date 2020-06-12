<template>
  <section class="wrapper">
    <header class="channelHeader">
      <h1 class="channelTitle">Channel title</h1>
      <span class="channelSubtitle">(#channel-subtitle)</span>
      <p class="channelDescription">Channel description</p>
    </header>
    <div class="channelTopSpacing"></div>
    <post />
  </section>
</template>

<script>
import Post from './Post.vue'

export default {
  components: {
    Post
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    background-color: #fff;
    color: #000; 

      @media screen and (min-width:450px) {
        box-shadow: inset 5px 5px 10px rgba(0,0,0,0.1);
        height: 100vh;
        overflow: overlay;
      }
  }

  .channelHeader {
    padding: 11px 15px 4px;
    border-bottom: 1px solid #d8d8d8;
    width: 100%;
    background-color: #fff;

      @media screen and (min-width:450px) {    
        position: fixed;
      }
  }

  .channelTitle {
    display: inline;
    margin: 0;
    font-size: 14px;
  }

  .channelSubtitle {
    font-size: 14px;
    color: #999;
  }

  .channelDescription {
    font-size: 14px;
    margin: 0;
    color: #999;
  }

  .channelTopSpacing {
    height: 20px;
      @media screen and (min-width:450px) {
        height: 80px;
      };
  }
</style>