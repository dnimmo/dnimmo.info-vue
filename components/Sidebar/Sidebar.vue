<template>
  <div class="wrapper">
    <sidebar-header/>
    <channel-list :activePage='activePage' />
  </div>
</template>

<script>
import SidebarHeader from './SidebarHeader.vue'
import ChannelList from './ChannelList.vue'

export default {
  components: {
    SidebarHeader,
    ChannelList
  },
  props: {
    activePage : {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    background-color: #3F0E40;
  }
</style>