<template>
  <header-compo></header-compo>
  <div>
    <button @click="Logout" class="logout">Logout</button>
  </div>
  <div class="container">
    <div class="banner"></div>
    <div class="middle">
      <post-compo></post-compo>
    </div>
    <div class="banner"></div>
  </div>
  <footer-compo></footer-compo>
</template>

<script>
import headerCompo from "@/components/HeaderCompo.vue";
import footerCompo from "@/components/FooterCompo.vue";
import postCompo from "@/components/PostCompo.vue";
import store from '@/store';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "main",
  components: { 
    headerCompo, 
    footerCompo, 
    postCompo 
  },
methods: {
  Logout() {
    fetch("http://localhost:3000/auth/logout", {
      credentials: 'include'
    })
        .then((response) => response.json())
        // eslint-disable-next-line
        .then((data) => {
          console.log('jwt removed, ' + data);
          this.$router.push("/login");
        })
        // eslint-disable-next-line
        .catch((e) => {
          console.log("error logout: " + e);
        });
  },
  reset_likes() {
    store.commit("reset_likes")
  }
}
}
</script>

<style scoped>
/*Positions the banners on the left and right with the posts in the center.*/
.container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: auto;

  padding-top: .7em;
  padding-bottom: .7em;
}

/*Positions and styles the boxes on either side.*/
.banner {
  margin: 0;
  width: 12%;
  background-color: #bfbfbf;
  border-radius: 15px;

}

/*Positions the box in the middle.*/
.middle {
  margin: auto;
  width: 70%;
}

/*Positions the log out button.*/
.logout {
  display: flex;
  margin: 10px auto auto auto;
}

/*
    Applies when the browser's width is less than 1000px wide:
*/
@media (max-width: 1199px) {
  .banner {
    display: none;
  }
  .middle {
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>