<template>
  <div class="footer">
    <ul class="nav">
      <li>
        <a href="https://ois2.ut.ee/">OIS</a>
      </li>
      <li>
        <a href="https://ut.ee/et">Tartu Ülikool</a>
      </li>
      <li>
        <a href="https://courses.cs.ut.ee/">Courses</a>
      </li>
    </ul>
    <img class="logo_tü" src="@/assets/Ülikooli_logo.png" alt="official logo">
    <p class="copyright">©2022 WAD team 35. All rights reserved. Various trademarks held by their respective owners.</p>
  </div>
</template>

<script>
export default {
  name: "footerCompo"
}
</script>

<style scoped>
/*Keeps footer logo from touching the right side of the screen.*/
.logo_tü {
  height: 50px;
  width: 100px;

}

/*Footer links' backgrounds change when hovering over them.*/
.nav li a:hover {
  background-color: #b0b0b0;
  border-radius: 5px;
}

/*Footer links have more padding.*/
.nav li a {
  padding: 10px 15px;
}

/*Styles and positions the footer box.*/
.footer {
  text-align: center;
  background-color: #bfbfbf;
  padding-top: .5em;
  padding-bottom: .5em;
  border-radius: 15px;
}

/*Makes the copyright text small.*/
.copyright {
  font-size: 10px;
}
</style>