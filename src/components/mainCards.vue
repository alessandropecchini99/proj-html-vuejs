<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    select(index) {
      this.store.cardActiveIndex = index;
    },
  },
};
</script>

<template>
  <!-- CARDS -->
  <section>
    <div class="myContainer">
      <!-- card disponibili -->
      <div class="card-disponibili">
        <div
          v-for="(miniCard, index) in store.arrCards"
          :key="index"
          :class="{
            active: index == store.cardActiveIndex,
            lastItem: index === store.arrCards.length - 1,
          }"
          @click="select(index)"
        >
          <p>{{ miniCard.cardTitle }}</p>
        </div>
      </div>

      <!-- card selezionata -->
      <div class="card-selezionata">
        <div
          v-for="(card, index) in store.arrCards"
          :key="index"
          v-show="index === store.cardActiveIndex"
        >
          <h1>{{ card.title }}</h1>
          <p>{{ card.paragraph }}</p>
          <ul>
            <li v-for="testo in card.list" :key="testo">
              <i class="fa-solid fa-check"></i>
              <span>{{ testo }} </span>
            </li>
          </ul>
          <img :src="card.image" :alt="card.cardTitle" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/variables.scss" as *;

section {
  height: 700px;
  display: flex;
  justify-content: center;

  .myContainer {
    @include myContainer;
    height: fit-content;
    padding-top: 5.5em;

    display: flex;
    .card-disponibili {
      flex: 0 0 25%;
      min-width: fit-content;
      height: fit-content;

      p {
        font-size: 1.3em;
        font-family: "Merriweather", serif;
        color: grey;
        border-inline: 1px rgb(194, 194, 194) solid;
        border-top: 1px rgb(194, 194, 194) solid;
        padding-top: 1em;
        padding-bottom: 1em;
        padding-right: 1em;
        padding-left: 1.5em;
        margin: 0px;
        cursor: pointer;
      }

      .lastItem {
        p {
          border-bottom: 1px rgb(194, 194, 194) solid;
        }
      }
      .active {
        p {
          color: #00a0e4;
          border-left: 7px #00a0e4 solid;
          padding-left: 1.21em;
        }
      }
    }

    .card-selezionata {
      padding-top: 2em;
      padding-inline: 4em;
      cursor: default;
      position: relative;

      h1 {
        font-family: "Merriweather", serif;
        font-size: 3em;
        margin: 0px;
        padding-bottom: 0.6em;
      }

      p {
        font-size: 1.2em;
        color: grey;
        padding-bottom: 2.5em;
        margin: 0px;
        width: 800px;
      }

      ul {
        list-style-type: none;
        width: 600px;
        padding: 0px;
        margin: 0px;

        display: flex;
        flex-direction: column;
        gap: 1em;

        li {
          width: fit-content;
          i {
            color: #00a0e4;
            font-size: 1.4em;
            padding-right: 0.8em;
          }

          span {
            color: grey;
            font-size: 1.3em;
          }
        }
      }
      img {
        width: 160px;
        position: absolute;
        bottom: -60px;
        right: 0px;
      }
    }
  }
}
</style>
