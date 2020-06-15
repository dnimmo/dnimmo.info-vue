<template>
  <section class="wrapper">
    <div 
      v-if="post.date"
      class="dateWrapper">
        <span></span>
        <div class="date">
          {{post.date}}
        </div>
        <span></span>
    </div>
    <div class="postWrapper">
      <img class="avatar" :src="post.avatar || '/images/nimmo.png'" />
      <div class="postContent">
        <span class="username">
          {{ post.username || "Nimmo" }}
        </span>
        <div>
          <p v-for="paragraph in post.mainPostContent" :key="paragraph">{{paragraph}}</p>
        </div>
        <a 
          v-if="post.link" 
          :href="post.link"
          target="_blank">
            {{post.linkText || post.link}}
        </a>
        <div 
          v-if="post.threadContent" 
          class="threadLinkWrapper">
            <img class="threadLinkAvatar" src="/images/nimmo.png" />
            <button 
              class="threadLinkText"
              @click="openThread"
            >
              {{
              post.threadContent.length === 1 
                ? "1 reply" 
                : `${post.threadContent.length} replies`
              }}
            </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    post: {
      date: {
        type: String,
        required: false
      },
      mainPostContent: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: false
      },
      linkText: {
        type: String,
        required: false
      },
      threadContent: {
        type: Array,
        required: false
      }
    }
    , openThreadFunction: {
      type: Function,
      required: false,
    }
  },
  methods: {
    openThread() {
      this.openThreadFunction({
        header: {
          title: "Thread",
          description: this.post.mainPostContent[0]
        },
        posts: this.post.threadContent
      })
    }
  }
}
</script>

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
    grid-template-rows: 50px 1fr;

    @media screen and (min-width:450px) {
      grid-template-rows: 20px 1fr;
    }
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