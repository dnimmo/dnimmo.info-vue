<template>
  <section class="wrapper">
    <header class="sidebarHeader">
      <button 
        @click="toggleChannels"
        class="sidebarToggle">
        <!-- Channel toggle image -->
        <img v-if="$store.state.expanded" src="/images/menu-close.svg" />
        <img v-else src="/images/menu-open.svg" />
        <!-- /Channel toggle image -->
        <h2 class="sidebarTitle">Channels</h2>
      </button>
    </header>
    <transition name="expand">
      <nav 
        v-if="$store.state.expanded"
        class="channelList"
        >
        <nuxt-link 
          v-for="channel in channelList" 
          class="channelLinkText"
          :class="channel.id === activePage ? 'active' : 'inactive'"
          :key="channel.id"
          :to="channel.slug"
        >
          # {{channel.id}}
        </nuxt-link>
      </nav>
    </transition>
  </section>
</template>

<script>
import store from '~/state/channel_list'
import { channels } from '~/data/channels'

const channelList = 
  channels.map(
    ({ id, slug}) => ({ id, slug })
  )

export default {
  store,
  props : {
    activePage : {
      type: String,
      required: true
    }
  },
  data() {
    return {
      channelList,
    }
  },
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

  .channelList {
    overflow: hidden;
    max-height: 100%;
  }

  .expand-enter, .expand-leave-to {
    opacity: 0;
  }

  .expand-enter-to, .expand-leave {
    opacity: 1;
  }

  .expand-enter-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }

  .expand-leave-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
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

    &.active {
      background-color: #1164A3;
      opacity: 1;
    }
  }

</style>

