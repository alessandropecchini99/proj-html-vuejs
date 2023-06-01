<script>
import { store } from "../../store";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    setcarIndex(index) {
      this.store.carIndex = index;
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
        <div
          v-for="(corsi, index) in store.corsi"
          :key="index"
          :class="{ active: index == this.store.carIndex }"
          class="corsi"
          @click="setcarIndex(index)"
        >
          <!-- corso1 -->
          <div class="corso" v-for="corso in corsi.corso1" :key="corso.title">
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
          <!-- corso2 -->
          <div class="corso" v-for="corso in corsi.corso2" :key="corso.title">
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
          <!-- corso3 -->
          <div class="corso" v-for="corso in corsi.corso3" :key="corso.title">
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
          <span
            v-for="(dot, index) in store.corsi"
            :value="store.carIndex"
            :class="{ activeDot: index == store.carIndex }"
            :key="index"
            @click="setcarIndex(index)"
            class="dot"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/variables.scss" as *;

hr {
  margin-top: 0px;
}

section {
  height: fit-content;
  padding-bottom: 5em;
  background-image: url(../../assets/img/main/bck.png);

  .myContainer {
    @include myContainer;
    width: 70%;
    cursor: default;

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
      .corsi {
        display: none;
      }
      .active {
        display: block;
        display: flex;
        gap: 2em;
      }

      .corso {
        width: calc(100% / 3);
        background-color: white;
        height: fit-content;
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
            height: 100px;
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
        cursor: pointer;
      }

      .activeDot {
        background-color: #00a0e4;
      }
    }
  }
}
</style>
