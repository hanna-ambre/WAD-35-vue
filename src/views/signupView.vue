<template>
  <header-compo></header-compo>
  <div class="box_center">
    <!--
    <h4> Welcome to PostIt</h4>
    <a class="blue_text">Create an account</a>
    <span>or<br>Please log in</span>
    -->
    <form action="/">
      <div>
        <label>Email </label>
        <input
            type="text"
            id="email_input"
            name="email"
            placeholder="email@example.com" required
        />
      </div>
      <div>
        <label>Password </label>
        <input
            type="text"
            name="password"
            id="password_creation_input"
            :minlength="8"
            :maxlength="15"
            placeholder="Password" required
        />
        <p id="error"></p>
      </div>
      <div class="more_padding">
        <input class="blue_button" type="submit" value="Signup" @click="check($event)">
      </div>
    </form>
  </div>
  <footer-compo></footer-compo>
</template>

<script>

export function validatePasswordStartsUppercase(password) {
  if ((/[A-Z]/).test(password.charAt(0))) {
    return true
  } else {
    return false
  }
}

export function validatePasswordUppercase(password) {
  if ((/[A-Z]/).test(password)) {
    return true
  } else {
    return false
  }
}

export function validatePasswordcontains_(password) {
  if ((/_/).test(password)) {
    return true
  } else {
    return false
  }
}

export function validatePasswordLowercase(password) {
  if ((/[a-z]/).test(password)) {
    return true
  } else {
    return false
  }
}

export function validatePasswordNumbers(password) {
  return /[0-9]/.test(password);
}

import headerCompo from "@/components/HeaderCompo.vue";
import footerCompo from "@/components/FooterCompo.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "signup",
  components: { headerCompo, footerCompo },
  data() {
    return {
      password: '',
    }
  },
  methods: {
    check(e) {
      var value = document.getElementById('password_creation_input').value;
      if (value.length<8) {
        e.preventDefault()
        console.log("The password is too short, current lenght is " + value.length + " and the needed lenght is at least 8.")
        document.getElementById("error").innerText = ("The password is too short, current lenght is " + value.length + " and the needed lenght is at least 8.");
        alert("The size of the password does not meet the NATO standard. (The current lenght is " + value.length + " and the needed lenght is at least 8.");
      }
      else if (value.length>14) {
        e.preventDefault()
        console.log("The password is too long, current lenght is " + value.length + " and the maximum lenght is 14.")
        document.getElementById("error").innerText = ("The size of the password does not meet the NATO standard. (The current lenght is " + value.length + " and the maximum lenght is 14.")
      }
      else if (!(validatePasswordUppercase(value))) {
        e.preventDefault()
        console.log("there are not enough Upper case letters!")
        document.getElementById("error").innerText = ("there are not enough Upper case letters!")
      }
      else if (!(validatePasswordLowercase(value))){
        e.preventDefault()
        console.log("there are not enough Lower case letters!")
        document.getElementById("error").innerText = ("there are not enough Lower case letters")
      }
      else if (!(validatePasswordNumbers(value))){
        e.preventDefault()
        console.log("The password lacks your power rating(add any numeric value)!")
        document.getElementById("error").innerText = ("The password lacks your power rating(add any numeric value)!")
      }
      else if (!(validatePasswordStartsUppercase(value))){
        e.preventDefault()
        console.log("The start is not strong enough, Start the password with uppercase character!")
        document.getElementById("error").innerText = ("The start is not strong enough, Start the password with uppercase character!")
      }
      else if (!(validatePasswordcontains_(value))){
        e.preventDefault()
        console.log("the password is not autistic enough add '_' to it")
        document.getElementById("error").innerText = ("the password is not autistic enough add '_' to it")
      }
    },
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


</style>