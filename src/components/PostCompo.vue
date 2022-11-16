<template>
  <div class="post" v-for="post in postsList" :key="post.id">
    <div class="post-Header">
      <div class="post-nav">
        <img :src="post.avatar" class="avatar" alt="Post picture">
        <a href="#">{{post.name}}</a>
      </div>
      <a href="#">{{post.date}}</a>
    </div>
    <div class="post-body">
      <p>{{post.text}}</p>
      <img class="post-pictures" alt="Post picture" :src=post.image>
    </div>
  </div>
</template>

<script>
export default {
  name: "postCompo",
  props: [],
  data: function() {
    return {}
  },
  computed: {
    postsList(){
      return this.$store.getters.postsList
    },
  }
}
</script>

<style scoped>
/*Styles the posts in the middle.*/
.post {
  background-color: #dadbdc;
  border-radius: 15px;
  padding: .5em 15px .9em;
  margin-bottom: 15px;
}

/*Positions items in the post header.*/
.post-Header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.post-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.post-Header a {
  padding: 10px;
}

/*Post header links' backgrounds change when hovering over them.*/
.avatar ~ a:hover { /*Applies to the name of a post (after avatar).*/
  background-color: #cecfd1;
  border-radius: 10px;
}
.post-Header > a:hover { /*Applies to the date of a post (not to post-nav).*/
  background-color: #cecfd1;
  border-radius: 10px;
}

/*Sets the sizes of the posts' avatars.*/
.avatar{
  width: 50px;
  height: 50px;
}

/*Sets the sizes of pictures in the posts.*/
.post-pictures {
  width: 100%;
  height: 100%;
}

/*Sets the sizes of likes.*/
.reactions {
  width: 35px;
  height: 35px;
}
</style>