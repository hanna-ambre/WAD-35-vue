<template>
  <header-compo></header-compo>
  <div class="box_center">
    <form action="/">
      <h3>Add Post</h3>
      <label for="body">Body: </label>
      <input name="body" type="text" id="body" required v-model="post.body" />
      <div class="more_padding">
        <button type="button" @click="addPost">Add</button>
      </div>
    </form>
  </div>
  <footer-compo></footer-compo>
</template>


<script>
import headerCompo from "@/components/HeaderCompo";
import footerCompo from "@/components/FooterCompo";

export default {
  name: "AddPost",
  components: { headerCompo, footerCompo },
  data() {
    return {
      post: {
        body: "",
      },
    };
  },
  methods: {
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
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
  },
};
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

/*Positions certain links and buttons to the center and adds padding.*/
.more_padding {
  padding-top: 10px;
  text-align: center;
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