<template>
  <div class="post" v-for="post in posts" :key="post.id">
    <div class="post-Header">
      <a :href="'/api/apost/' + post.id">
        <span class="date"> {{ post.date }} </span> <br />
        <span class="body"> {{ post.body }} </span> <br />
      </a>
    </div>
  </div>
  <div class="container">
    <button @click='this.$router.push("/newPost")' class="addPost">Add Post</button>
  <div class="DeleteAll">
    <button v-on:click="DeleteAll">
     Delete all
    </button>
  </div>
  </div>
</template>

<script>
export default {
  name: "AllPosts",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
          .then((response) => response.json())
          .then((data) => (this.posts = data))
          .catch((err) => console.log(err.message));
    },
    DeleteAll(){
      fetch(`http://localhost:3000/api/posts/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
          });
    },
    addPost() {
      var data = {
        body: this.post.body,
      };
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
          .then((response) => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
};
/*
import store from "@/store"
import router from "@/router";

export default {
  name: "postCompo",
  props: {
  },
  data: function() {
    return {}
  },
  methods: {
    fetchPosts() {
      fetch(`http://localhost:3000/allPosts`)
          .then((response) => response.json())
          .then((data) => (this.posts = data))
          .catch((err) => console.log(err.message));
    },
    like_post(id){
      console.log(id)
      store.commit("like_post", {id})
    },
    addPost(){
      console.log("moving to Add post page")
      router.push({ path:'/newPost'})
    },

  },
  computed: {
    postsList(){
      return store.getters.postsList
    },
  }
}
*/
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

.post-likes {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.post-likes button{
  padding: 0;
  border: none;
  background: none;
}

.post-likes button:hover {
  cursor: pointer;
  background:#cecfd1;
}
.post-likes img {
  width: 50px;
  height: 50px;
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
  width: 40px;
  height: 40px;
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
.container {
  display: flex;
  justify-content: center;
}
</style>