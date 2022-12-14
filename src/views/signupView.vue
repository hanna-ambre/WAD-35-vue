<template>
  <header-compo></header-compo>
  <div class="box_center">
    <form action="/">
      <div>
        <label for="email">Email </label>
        <input
            type="text"
            id="email_input"
            name="email"
            placeholder="email@example.com"
            required
            v-model="email"
        />
      </div>
      <div>
        <label for="password">Password </label>
        <input
            type="password"
            name="password"
            id="password_creation_input"
            :minlength="8"
            :maxlength="15"
            placeholder="Password"
            required
            v-model="password"
        />
      </div>
      <div id="error">
        <p></p>
      </div>
      <div class="more_padding">
        <!---<input class="blue_button" type="submit" value="Signup" @click="check($event)">--->
        <button @click="SignUp" class="SignUp">Sign up</button>
      </div>
    </form>
  </div>
  <footer-compo></footer-compo>
</template>

<script>
import headerCompo from "@/components/HeaderCompo.vue";
import footerCompo from "@/components/FooterCompo.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "signup",
  components: { headerCompo, footerCompo },
  methods: {
    SignUp() {
      var data = {email: this.email, password: this.password};
      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: 'include', // Don't forget to specify this if you need cookies
        body: JSON.stringify(data)})
          .then((response) => response.json())
          .then(() => {
            location.assign("/");})
          .catch((e) => {
            console.log("error: " + e);});
    }
  }
}
</script>

<style scoped>
/*Positions and styles the box for the signup page.*/
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

/*Styles the error message.*/
#error{
  width: 250px;
  color: #a91717;
  font-size: small;
  text-align: left;
  align-items: center;
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