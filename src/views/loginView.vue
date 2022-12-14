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
            required v-model="email"
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
            required v-model="password"
        />
      </div>
      <div id="error">
        <p></p>
      </div>
      <div class="more_padding">
        <!---<input class="blue_button" type="submit" value="Login" @click="check($event)">--->
        <button @click="LogIn" class="center">Log in</button>
        <p>Or</p>
        <!---<input class="blue_button" type="submit" value="Signup" @click="check($event)">--->
        <button @click='this.$router.push("/signup")' class="center">Sign up</button>
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
    LogIn() {
      var data = {email: this.email, password: this.password};
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        credentials: 'include', // Don't forget to specify this if you need cookies
        body: JSON.stringify(data)})
          .then((response) => response.json())
          .then(() => {
            console.log(data);
            location.assign("/");})
          .catch((e) => {
            console.log("error: " + e);});
    },
    /*check(e) {
      var value = document.getElementById('password_creation_input').value;
      if (value.length<8) {
        e.preventDefault()
        console.log("The password is too short, current length is " + value.length + " and the needed length is at least 8.")
        document.getElementById("error").innerText = ("The password is too short, current length is " + value.length + " and the needed length is at least 8.");
      }
      else if (value.length>15) {
        e.preventDefault()
        console.log("The password is too long, current length is " + value.length + " and the maximum length is 15.")
        document.getElementById("error").innerText = ("The password is too long, current length is " + value.length + " and the maximum length is 15.")
      }
      else if (!(validatePasswordLowercase(value))){
        e.preventDefault()
        console.log("There have to be at least 2 lowercase characters.")
        document.getElementById("error").innerText = ("There have to be at least 2 lowercase characters.")
      }
      else if (!(validatePasswordNumbers(value))){
        e.preventDefault()
        console.log("There has to be at least 1 numeric value.")
        document.getElementById("error").innerText = ("There has to be at least 1 numeric value.")
      }
      else if (!(validatePasswordStartsUppercase(value))){
        e.preventDefault()
        console.log("The password must start with an uppercase character.")
        document.getElementById("error").innerText = ("The password must start with an uppercase character.")
      }
      else if (!(validatePasswordcontains_(value))){
        e.preventDefault()
        console.log("The password must contain an underline symbol ('_').")
        document.getElementById("error").innerText = ("The password must contain an underline symbol ('_').")
      }
    }*/
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.more_padding p {
  margin-right: 10px;
  margin-left: 10px;
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