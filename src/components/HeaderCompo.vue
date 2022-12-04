<template>
  <div class="header">
    <ul class="nav">
      <li><router-link to="/">Home</router-link></li>
      <li id="separating_bar">|</li>
      <li><router-link to="/signup">Sign-up</router-link></li>
      <!--is here temporeraly till we figure out how to work with backend--->
      <li id="separating_bar">|</li>
      <li><router-link to="/newPost">Create a new Post</router-link></li>
      <li id="separating_bar">|</li>
      <li><router-link to="/contactUs">contact us</router-link></li>
    </ul>
    <div class="dropdown">
      <button class="logoButton" v-on:click="change_dropdown_menu ">
        <img class="logo" alt="My picture" src="@/assets/ragnar.jpg">
      </button>
      <div id="Dropdown" class="dropdown-content">
        <a id="menuOption1" class="name" href="#">Ragnar</a>
        <a id="menuOption2" class="mail" href="#">RagnarLodbrok@yahoo-inc.com</a>
        <a id="menuOption3" class="logout" href="#">logout</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerCompo",
  methods: {
    change_dropdown_menu: function() {
      this.$store.commit("change_dropdown_menu")
    }
  }
}
</script>

<style scoped>
/*Header links' backgrounds change when hovering over them.*/
.nav li a:hover {
  background-color: #b0b0b0;
  border-radius: 5px;
}

/*Header links have more padding.*/
.nav li a {
  padding: 10px 15px;
}

/*Keeps header logo from touching the right side of the screen.*/
.logo {
  height: 50px;
  width: 50px;
}

.header {
  /*Header box color and padding.*/
  background-color: #bfbfbf;
  border-radius: 15px;

  /*Header box is sticky.
  position: sticky;
  top: 0px;*/

  /*Items in header box are in a row, stretched to the width of the screen.*/
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

}

/*Users can't select the little separating bar in the navigation.*/
#separating_bar {
  user-select: none;
}

/* DROPDOWN MENU WHEN CLICKING ON HEADER AVATAR: */

/* Dropdown Button */
.logoButton {
  background-color: #bfbfbf;
  color: white;
  padding: 16px;
  margin-right: 8px;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
.logoButton:hover{
  background-color: #b0b0b0;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #e6e6e6;
  right: 0;
  min-width: 160px;
  white-space: nowrap;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 10px;
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  width: 100%;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  float:left;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #d6d6d6;
  border-radius: 10px;
}
</style>