<template>
  <div>
    <header class="channelHeader">
      <h1 class="channelTitle">{{header.title}}</h1>
      <span 
        v-if="header.id"
        class="channelSubtitle">(# {{header.id}})
      </span>
      <p class="channelDescription">{{header.description}}</p>
      <slot />
    </header>
    <div class="channelTopSpacing"></div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      title: {
        type: String,
        required: true
      },
      slug: {
        type: String,
        required: false
      },
      description: {
        type: String,
        required: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .channelHeader {
    padding: 11px 15px 4px;
    border-bottom: 1px solid #d8d8d8;
    background-color: #fff;

      @media screen and (min-width:450px) {  
        width: 100%;  
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