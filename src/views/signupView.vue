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
        <input type="text" name="email" placeholder="Email" required>
      </div>
      <div>
        <label>Password </label>
        <input type="text" name="password" placeholder="Password" required>
      </div>
      <div class="more_padding">
        <input class="blue_button" type="submit" value="Signup">
      </div>
      <!--
      <div class="more_padding">
        <a class="blue_text">Forget password</a>
      </div>
      -->
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