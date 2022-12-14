<template>
  <header-compo></header-compo>
  <div class="box_center">
    <table>
      <thead>
      <th>name</th>
      <th>email</th>
      </thead>
      <tbody>
      <tr>
        <td>Ilmar Möls</td>
        <td>mols.ilmar@gmail.com</td>
      </tr>
    <tr>
      <td>André Oestmann</td>
      <td>andy.oestmann@gmail.com</td>
    </tr>
    <tr>
      <td>Hanna Saskia Ambre</td>
      <td>hanna.s.ambre@gmail.com</td>
    </tr>
      </tbody>
    </table>
  </div>
  <footer-compo></footer-compo>
</template>

<script>
import headerCompo from "@/components/HeaderCompo";
import footerCompo from "@/components/FooterCompo";

export default {
  name: "contactUs",
  components: { headerCompo, footerCompo },
}
</script>

<style scoped>
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
</style>