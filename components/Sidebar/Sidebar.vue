<template>
  <aside class="wrapper">
    <sidebar-header/>
    <channel-list/>
  </aside>
</template>

<script>
import SidebarHeader from './SidebarHeader.vue'
import ChannelList from './ChannelList.vue'

export default {
  components: {
    SidebarHeader,
    ChannelList
  }
}
</script>

<style scoped>
  .wrapper {
    background-color: #3F0E40;
  }
</style>