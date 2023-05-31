<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import { store } from "./store";

import appHeader from "./components/appHeader.vue";
import appMain from "./components/appMain.vue";
import appFooter from "./components/appFooter.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    appHeader,
    appMain,
    appFooter,
  },
};
</script>

<template>
  <!-- SEZIONI PRINCIPALI -->
  <appHeader />

  <appMain />

  <appFooter />

  <!-- TOP BUTTON -->
  <section class="top">
    <a href="#"> <i class="fa-solid fa-chevron-up"></i> TOP </a>
  </section>
</template>

<style lang="scss">
@use "./assets/general.scss" as *;

.top {
  position: fixed;
  right: 0;
  top: 50%;

  a {
    background-color: #40c4ff;
    color: white;
    padding: 5px 10px;
    font-size: 0.85em;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
