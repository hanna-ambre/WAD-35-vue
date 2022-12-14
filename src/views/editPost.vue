<template>
  <header-compo></header-compo>

  <div class="box_center">
    <form action="/">
      <label>A Post</label>
      <div>
        <label for="body">Body: </label>
        <input name="body" type="text" id="body" required v-model="post.body" />
      </div>
      <div class="left_padding">
        <input class="blue_button" type="submit" value="Update" @click="updatePost">
      </div>
      <div class="right_padding">
        <input class="blue_button" type="submit" value="Delete" @click="deletePost">
      </div>
    </form>
  </div>
  <footer-compo></footer-compo>
</template>

<script>
import headerCompo from "@/components/HeaderCompo";
import footerCompo from "@/components/FooterCompo";

export default {
  name: "editPost",
  components: { headerCompo, footerCompo },
  data() {
    return {
      post: {
        id: "",
        body: ""
      },
    };
  },
  methods: {
    fetchAPost(id) {
      fetch(`http://localhost:3000/posts/${id}`)
          .then((response) => response.json())
          .then((data) => (this.post = data))
          .catch((err) => console.log(err.message));
    },
    updatePost() {
      fetch(`http://localhost:3000/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/posts");
          })
          .catch((e) => {
            console.log(e);
          });
    },
    deletePost() {
      fetch(`http://localhost:3000/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/posts");
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.fetchAPost(this.$route.params.id);
  },
}
</script>

<style scoped>
.box_center {
  background-color: #dadbdc;
  border-radius: 15px;
  padding: .5em 10px;

  width: fit-content;
  height: fit-content;
  margin: 30px auto 30px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.left_padding {
  padding-top: 10px;
  text-align: left;
}

.right_padding {
  padding-top: 10px;
  text-align: right;
}

/*Positions Email and Password text to the left on the signup page.*/
form > div {
  text-align: right;
  padding: 5px;
}

/*Sizing and styling for text boxes in login screen.*/
input[type="text"] {
  padding: 5px;
  border: none;
}

/*Some buttons are blue.*/
.blue_button {
  background-color: #324c86;
  color: white;
  padding: .4em;
  border: #324c86;
  cursor: pointer;
}

/*Occasional blue text.*/
.blue_text {
  color: #4faeef;
}

/*
    Applies when the browser's width is less than 1000px wide:
*/
@media (max-width: 275px) {
  #error {
    width: fit-content;
  }
}
</style>