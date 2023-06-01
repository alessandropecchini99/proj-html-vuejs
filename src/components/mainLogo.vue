<script>
export default {
  props: {
    arrLogo: String,
    arrLogoHover: String,
  },
};
</script>

<template>
  <!-- LOGO -->
  <hr />
  <section>
    <div class="myContainer">
      <div v-for="logo in arrLogo" :key="logo">
        <img :src="logo" :alt="logo" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/variables.scss" as *;

hr {
  margin: 0px;
}

section {
  height: fit-content;
  padding-top: 4em;
  padding-bottom: 4em;

  .myContainer {
    @include myContainer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;

    img {
      width: 320px;
      padding: 1em;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
