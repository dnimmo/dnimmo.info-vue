<template>
  <section class="wrapper">
    <header class="sidebarHeader">
      <button 
        class="sidebarToggle">
        <img src="images/menu-close.svg" />
      </button>
      <h2 class="sidebarTitle">Channels</h2>
    </header>
    <div class="channelList">
      <!-- TODO: Add all the channels here as links, but from the state rather -->
      <p class="channelLinkText">#general</p>
      <p class="channelLinkText">#etc</p>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
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
  }

    .sidebarToggle:first-of-type {
      text-align: left;
    };
  
    .sidebarToggle:hover {
      transform: scale(1.2);
    };

    .sidebarToggle:first-of-type:hover {
      transform: none;
    }

  .sidebarTitle {
    display: inline;
    font-size: 18px;
    font-weight: normal;
    padding-left: 4px;
  }

  .channelList {
    border-top: 1px solid rgb(82,38,83);
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
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

</style>