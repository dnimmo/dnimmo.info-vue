<template>
  <div class="wrapper">
    <sidebar-header/>
    <channel-list/>
  </div>
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

<style lang="scss" scoped>
  .wrapper {
    background-color: #3F0E40;
  }
</style>