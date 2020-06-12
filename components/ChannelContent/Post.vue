<template>
  <section class="wrapper">
    <div class="dateWrapper">
        <span></span>
        <div class="date">
          Date
        </div>
        <span></span>
    </div>
    <div class="postWrapper">
      <img class="avatar" src="images/nimmo.png" />
      <div class="postContent">
        <span class="username">
          Nimmo
        </span>
        <p>Main post content goes here.</p>
        <!-- this bit only appears if there's a link; obviously needs to be updated to make use of v-if -->
        <a 
          v-if=true 
          href="/"
          target="_blank">
            Linky goes here
        </a>
        <!-- this bit only appears if there's a thread link -->
        <div 
          v-if=true 
          class="threadLinkWrapper">
            <img class="threadLinkAvatar" src="images/nimmo.png" />
            <button class="threadLinkText">1 reply</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .wrapper {
    display: block;
    /* this needs to be amended to be able to blur posts when threads are open */
  }

  .dateWrapper {
    display: grid;
    grid-template-columns: 20% 60% 20%;

      @media screen and (min-width:800px){
        grid-template-columns: 40% 20% 40%;
      }
  }

  .date {
    text-align: center;
    font-size: 13px;
    font-weight: bold;  
    background-color: white;
    padding: 3px 10px;
    border: 1px solid rgb(216, 216, 216);
    border-radius: 20px;
  }

  .postWrapper {
    padding: 20px;
    display: grid;
    grid-template-columns: 50px 1fr;
    border-top: 1px solid rgb(216, 216, 216);
    margin-top: -15px;
    z-index: 9;
      
      @media screen and (min-width:450px){
        &:last-of-type{
          margin-bottom: 40px;
        } 
      }
  }

  .avatar {
    height: 37px;
    border-radius: 37px;
  }

  .username {
    font-weight: bold;
  }

  .postContent {
    display: grid;
    grid-template-rows: 20% 1fr;
  }

  .threadLinkWrapper {
    margin-top: 10px;
  }

  .threadLinkAvatar {
    border-radius: 50px;
    height:20px;
  }

  .threadLinkText {
    text-decoration: none;
    font-size: 14px;
    margin-left: 5px;
    vertical-align: top;
    font-weight: bold;
    background: none;
    border: none;
    cursor: pointer;
    color: #1264A3;
    margin-top: 1px;

      &:hover{
        text-decoration: underline;
      }
  }
</style>