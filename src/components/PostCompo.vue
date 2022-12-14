<template>
  <div class="post" v-for="post in posts" :key="post.id">
    <div class="post-Header">
      <a @click='this.$router.push({path:`/editPost/${post.id}`})'>
        <span class="date"> {{ onlyDate(post.date) }} </span> <br />
        <span class="body"> {{ post.body }} </span> <br />
      </a>
    </div>
  </div>
  <div class="buttons">
    <button @click='this.$router.push("/newPost")' class="addPost">Add Post</button>
    <button v-on:click="DeleteAll">Delete all</button>
  </div>
</template>

<script>
export default {
  name: "postCompo",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    onlyDate(date) {
            let dateNew = new Date(date)
            return (dateNew.getMonth()+1+ "/" +  dateNew.getDate() + "/" + dateNew.getFullYear())
        },
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
            this.$router.go();
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
};
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

a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.post-Header > a:hover { /*Applies to the date of a post (not to post-nav).*/
  background-color: #cecfd1;
  border-radius: 10px;
}

.buttons {
  display: flex;
  justify-content: center;
}

.addPost {
  margin-right: 40px;
}
</style>