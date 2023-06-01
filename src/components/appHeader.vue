<script>
import headerNavBar from "./headerComponents/headerNavBar.vue";
import headerCarosello from "./headerComponents/headerCarosello.vue";

export default {
  data() {
    return {
      // NAVBAR ---------
      arrNavBar: [
        `HOME`,
        `COURSES`,
        `INSTRUCTORS`,
        `EVENTS`,
        `PAGES`,
        `ELEMENTS`,
      ],

      // CAROSELLO ------
      arrCarousell: [
        {
          image: `../src/assets/img/header/bck-header.jpg`,
          title: `Contemporary Ideas`,
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            reiciendis. Odit quos corporis veritatis consectetur, amet
            consequatur minus maxime soluta esse, aliquid vel omnis vero.`,
        },
        {
          image: `../src/assets/img/header/bck-header-2.jpg`,
          title: `Online Classes`,
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            reiciendis. Odit quos corporis veritatis consectetur, amet
            consequatur minus maxime soluta esse, aliquid vel omnis vero.`,
        },
        {
          image: `../src/assets/img/header/bck-header-3.jpg`,
          title: `Online Materials`,
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            reiciendis. Odit quos corporis veritatis consectetur, amet
            consequatur minus maxime soluta esse, aliquid vel omnis vero.`,
        },
      ],
    };
  },
  components: {
    headerNavBar,
    headerCarosello,
  },
};
</script>

<template>
  <header>
    <headerNavBar :arrNavBar="arrNavBar" />
    <headerCarosello :arrCarousell="arrCarousell" />
  </header>
</template>

<style lang="scss" scoped></style>
