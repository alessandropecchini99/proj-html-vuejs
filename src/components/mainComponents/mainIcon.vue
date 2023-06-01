<script>
import { store } from "../../store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <!-- ICON -->
  <div class="icon">
    <div v-for="(icon, index) in store.arrIcons" :key="index" class="card">
      <img :src="icon.image" :alt="icon.text" />
      <p>{{ icon.text }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/variables.scss" as *;

.icon {
  @include myContainer;
  display: flex;
  justify-content: space-between;
  gap: 2em;

  font-family: "Merriweather", serif;
  padding-top: 6em;
  padding-bottom: 10em;

  .card {
    background-color: #d9f0ff;
    width: 200px;
    height: 300px;
    transition: 0.2s ease;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #c1e6ff;
      transition: 0.2s ease;

      img {
        width: 150px;
        margin-bottom: 1.6em;
        filter: brightness(0.7);
        transition: 0.2s ease;
      }
    }

    img {
      width: 140px;
      transition: 0.2s ease;
      margin-bottom: 2.2em;
    }

    p {
      font-size: 1.5em;
      cursor: default;
    }
  }
}
</style>
