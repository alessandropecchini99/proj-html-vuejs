<script>
export default {
  props: {
    arrNavBar: Array,
  },
};
</script>

<template>
  <!-- NAVBAR -->
  <div class="navbar">
    <img src="../../assets/img/header/logo-light.png" alt="" />
    <ul>
      <li v-for="menu in arrNavBar" :key="menu">{{ menu }}</li>
    </ul>
    <div class="nav-icon">
      <i class="fa-solid fa-magnifying-glass"></i>
      <div class="cart-number">
        <i class="fa-solid fa-bag-shopping"></i>
        <p>0</p>
      </div>
      <i class="fa-solid fa-bars"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/variables.scss" as *;

.navbar {
  @include myContainer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 1em;
  height: fit-content;
  color: white;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  img {
    width: 230px;
    cursor: pointer;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1em;
    font-size: 1.35em;
    margin: 0px;

    li {
      cursor: pointer;
      transition: 0.2s ease;
      &:hover {
        color: rgb(203, 203, 203);
        transition: 0.2s ease;
      }
    }
  }

  .nav-icon {
    width: 230px;
    display: flex;
    justify-content: end;
    gap: 2em;
    font-size: 1.35em;

    i {
      cursor: pointer;
      transition: 0.2s ease;
      &:hover {
        color: rgb(203, 203, 203);
        transition: 0.2s ease;
      }
    }

    .cart-number {
      display: flex;
      position: relative;

      &:hover {
        color: white;
      }

      p {
        font-family: "Roboto", sans-serif;
        cursor: pointer;
        background-color: #40c4ff;
        border-radius: 50%;
        font-size: 0.5em;
        padding: 1px 6px;
        position: absolute;
        top: -3px;
        right: -8px;
      }
    }
  }
}
</style>
