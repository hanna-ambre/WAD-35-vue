  <template>
  <header-compo></header-compo>
  <div class="container">
    <div class="banner"></div>
    <div class="middle">
      <post-compo></post-compo>
    </div>
    <div class="banner"></div>
  </div>
  <div>
    <button class="reset_likes" v-on:click="reset_likes">Reset likes</button>
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
  reset_likes(){
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

/*positions the like button between footer and posts*/
.reset_likes {
  margin: auto;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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