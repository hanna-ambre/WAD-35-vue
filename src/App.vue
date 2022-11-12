<template>
  <router-view/>
</template>

<style>
* {
  font-family: sans-serif;
  box-sizing: border-box;
  color: black;
}

/* Keeps header/footer touching the top/bottom of the page, instead of there being a gap.*/
body {
  line-height: 1.6;
  margin: 0;
}

/*No padding and also no dots for lists.*/
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

/*Links aren't underlined*/
a {
  text-decoration: none;
}

/*All lists' items are shown in a row.*/
li {
  padding: 10px 10px;
  text-align: left;
  display: inline-block;
  font-size: .99em;
}

</style>
