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
      <div class="title">
        <h2>Popular Online Courses</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          impedit! Aliquid nostrum ipsam dicta eos commodi ipsa odit saepe.
        </p>
      </div>

      <div class="carosello">
        <div class="slider">
          <div
            @click="setcarIndex(index)"
            :class="{ active: index == carIndex }"
            class="corso"
            v-for="(corso, index) in store.corsi1"
            :key="index"
          >
            <img :src="corso.image" :alt="corso.title" />
            <!-- info del corso -->
            <div class="cardInfo">
              <!-- sezione titolo e prof -->
              <div class="corsoTitle">
                <h3>{{ corso.title }}</h3>
                <p>{{ corso.teacher }}</p>
                <div
                  :class="
                    corso.bedge == `FREE`
                      ? `free`
                      : corso.bedge == `20€`
                      ? 'paid'
                      : ``
                  "
                >
                  {{ corso.bedge }}
                </div>
              </div>
              <!-- descrizione -->
              <h6>{{ corso.text }}</h6>
              <!-- tag del corso -->
              <div class="tag">
                <i class="fa-solid fa-user"></i>
                <span>1</span>
                <i class="fa-solid fa-tag"></i>
                {{ corso.tag }}
              </div>
            </div>
          </div>
        </div>

        <div class="controlli">
          <span :value="carIndex" class="dot"></span>
          <span :value="carIndex" class="dot active"></span>
          <span :value="carIndex" class="dot"></span>
        </div>
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
    width: 70%;

    .title {
      text-align: center;
      line-height: 2em;
      padding-top: 5em;
      padding-bottom: 3em;
      h2 {
        font-family: "Merriweather", serif;
      }
    }

    .carosello {
      .slider {
        display: flex;
        gap: 4em;

        .corso {
          width: calc(100% / 3);
          background-color: white;
          height: fit-content;
          padding-bottom: 1em;
          border: 1px rgb(201, 201, 201) solid;

          img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }

          .cardInfo {
            display: flex;
            flex-direction: column;
            gap: 1em;
            position: relative;
            padding: 1em;
            color: rgb(168, 168, 168);

            .corsoTitle {
              // titolo corso
              h3 {
                font-size: 1.5em;
                font-family: "Merriweather", serif;
                color: black;
              }
              //   nome prof
              p {
                margin: 0px;
                color: rgb(187, 187, 187);
              }

              //   bedge
              div {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 20px;
                right: 15px;
                padding: 0.2em 0.8em;
                color: white;
                border-radius: 10px;
                font-family: "Roboto", sans-serif;
                font-size: 0.9em;
                font-weight: 900;
              }
              .free {
                background-color: rgb(255, 204, 0);
              }
              .paid {
                background-color: #00a0e4;
              }
            }

            // descrizione
            h6 {
              color: rgb(133, 133, 133);
            }

            // tag finale
            .tag {
              font-weight: 900;

              i {
                padding-right: 0.3em;
              }

              span {
                padding-right: 1.2em;
              }
            }
          }
        }
      }
      .controlli {
        width: 100%;
        padding-top: 2em;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.7em;
        .dot {
          background-color: #8fddff;
          height: 15px;
          width: 15px;
          border-radius: 50px;
        }

        .active {
          background-color: #00a0e4;
        }
      }
    }
  }
}
</style>
