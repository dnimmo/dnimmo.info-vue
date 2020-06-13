<template>
  <div class="wrapper">
    <h1 class="mainHeading">DavidNimmoCV</h1>
    <div class="usernameWrapper">
      <span class="statusIndicator"></span>
      <span class="username">Nimmo</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    border-top: 1px solid rgb(82,38,83);
    padding: 0 20px;
    background-color: #3F0E40;
    color: white;
  }

  .mainHeading {
    font-size: 16px;
    margin-bottom: 0;
  }

  .usernameWrapper {
    display: grid;
    grid-template-columns: 20px 1fr;
    font-size: 12px;
    margin-top: 0;
  }

  .statusIndicator {
    background-color: #2BAC76;
    width: 7px;
    border: 1px solid #2BAC76;
    color: #2BAC76; 
    border-radius: 100%;
    height: 7px;
    margin-top: 3px;
  }

  .username {
    opacity: 0.8;
    margin-top: -1px;
    margin-left: -5px;
  }
</style>