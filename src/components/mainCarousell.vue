<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
      carIndex: 0,
    };
  },
  methods: {
    setcarIndex(index) {
      this.carIndex = index;
    },
  },
};
</script>

<template>
  <hr />
  <section>
    <div class="myContainer">
      <div class="info">
        <h2>Popular Online Courses</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          impedit! Aliquid nostrum ipsam dicta eos commodi ipsa odit saepe.
        </p>
      </div>

      <div class="carosello">
        <div
          @click="setcarIndex(index)"
          :class="{ active: index == carIndex }"
          class="corso"
          v-for="(corso, index) in store.corsi1"
          :key="index"
        >
          <img :src="corso.image" :alt="corso.title" />
          <div class="cardInfo">
            <div class="corsoTitle">
              <h3>{{ corso.title }}</h3>
              <p>{{ corso.teacher }}</p>
            </div>
            <h6>{{ corso.text }}</h6>
            <div class="tag">
              {{ corso.tag }}
            </div>
          </div>
        </div>

        <!-- <span
          :value="carIndex"
          :class="{ activedot: index == carIndex }"
          v-for="(member, index) in store.corsi1"
          :key="idex"
          class="dot"
        ></span> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/variables.scss" as *;

section {
  height: fit-content;
  padding-bottom: 5em;
  background-image: url(../assets/img/main/bck.png);

  .myContainer {
    @include myContainer;

    .info {
      text-align: center;
      line-height: 2em;
      padding-top: 5em;
      padding-bottom: 3em;
    }

    .carosello {
      display: flex;
      justify-content: space-between;

      .corso {
        width: calc((100% / 3) - 2em);
        background-color: white;
        height: fit-content;
        padding-bottom: 1em;
        border: 1px grey solid;

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .cardInfo {
          display: flex;
          flex-direction: column;
          gap: 1em;
          padding: 1em;

          color: grey;

          .corsoTitle {
            h3 {
              font-family: "Merriweather", serif;
              color: black;
            }
          }
        }
      }
      .punto {
        background-color: black;
        width: 20px;
        height: 10px;
      }
    }
  }
}
</style>
