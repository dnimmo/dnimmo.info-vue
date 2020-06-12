<template>
  <section class="wrapper">
    <header class="sidebarHeader">
      <button 
        @click="toggleChannels"
        class="sidebarToggle">
        <img src="images/menu-close.svg" />
        <h2 class="sidebarTitle">Channels</h2>
      </button>
    </header>
    <div 
      v-if="$store.state.expanded"
      class="channelList">
      <!-- TODO: Add all the channels here as links, but from the state rather -->
        <p class="channelLinkText"># general</p>
        <p class="channelLinkText"># etc</p>
    </div>
  </section>
</template>

<script>
import store from '~/state/channel_list'

export default {
  store,
  methods: {
    toggleChannels() {
      this.$store.commit('toggleExpanded')
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    border-top: 1px solid rgb(82,38,83);
  }

  .sidebarHeader {
    padding: 2px 0 2px 12px;
    margin-top: 10px;
    margin-bottom: 0;
    opacity: 0.8;
  }

  .sidebarToggle {
    cursor: pointer;
    background: none;
    border: none;
    outline: 0;
    font-size: 16px;
    font-weight: normal;
    color: #cfc3cf;
    transition: transform 0.1s linear;
      
      &:first-of-type{
        text-align: left;
      };
  
      &:hover{
        transform: scale(1.2);

        &:first-of-type{
          transform: none;
        };
      };
  }

  .sidebarTitle {
    display: inline;
    font-size: 18px;
    font-weight: normal;
    padding-left: 4px;
    opacity: 0.8;
    color: white;
  }

  .channelLinkText {
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    color: #cfc3cf;
    display: block;
    opacity: 0.8;
    padding: 2px 42px;
    margin: 2px 0;
    overflow: hidden;
    text-overflow: ellipsis;

      &:hover {
        opacity: 1;
        background-color: #350d36;
     }
  }

</style>

