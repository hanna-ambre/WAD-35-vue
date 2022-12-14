<template>
  <div class="header">
    <ul class="nav">
      <li><router-link to="/">Home</router-link></li>
      <li id="separating_bar">|</li>
      <li><router-link to="/contactUs">Contact us</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "headerCompo",
  methods: {
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
  justify-content: center;

}

/*Users can't select the little separating bar in the navigation.*/
#separating_bar {
  user-select: none;
}
</style>