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
  <!-- PLANS -->
  <hr />
  <section>
    <div class="intro">
      <h1>Pricing Plans</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        aliquam, fuga consequuntur itaque unde explicabo nulla!
      </p>
    </div>

    <div class="table">
      <div class="service">
        <div class="sale">
          <h2>
            Save up to 40% <br />
            by paying weekly
          </h2>
        </div>
        <div v-for="data in store.arrPlans">
          <p>{{ data }}</p>
        </div>
      </div>

      <div class="piani">
        <div
          v-for="plan in store.arrPlanType"
          :key="plan.title.name"
          class="colonnaTitolo"
        >
          <div class="title">
            <div class="azzurro"></div>
            <img :src="plan.title.image" :alt="plan.title.name" />
            <h2>{{ plan.title.name }}</h2>
            <p>{{ plan.price }}</p>
          </div>
          <div v-for="(text, index) in plan.text" :key="index" class="text">
            <span v-show="typeof text === 'string'">{{ text }}</span>
            <i class="fa-solid fa-check" v-show="text == true"></i>
            <i class="fa-solid fa-xmark" v-show="text == false"></i>
          </div>
          <div class="button">
            <button>GET IT NOW</button>
          </div>
        </div>
      </div>
      <div class="svg-icon">
        <div class="svg-container-circle">
          <img :src="store.arrSvg[0]" alt="svg2" class="circle" />
        </div>

        <div class="svg-container-cart">
          <img :src="store.arrSvg[1]" alt="svg2" class="cart" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
hr {
  margin-top: 0px;
}

section {
  height: fit-content;
  padding-bottom: 3em;
  background-image: url(../../assets/img/main/bck.png);
  display: flex;
  flex-direction: column;
  align-items: center;

  .intro {
    text-align: center;
    line-height: 2em;
    padding-top: 5em;
    padding-bottom: 3em;
    cursor: default;

    h1 {
      font-family: "Merriweather", serif;
    }

    p {
      color: grey;
      font-size: 1.2em;
      padding-top: 0.2em;
    }
  }

  .table {
    display: flex;
    justify-content: center;
    background-color: white;
    position: relative;
    width: fit-content;

    .service {
      height: fit-content;
      border-top: 5px #a8e3ff solid;
      cursor: default;

      &:hover {
        border-top: 5px #40c4ff solid;
      }

      .sale {
        height: 251px;
        background-color: #effaff;
        border-left: 1px rgb(201, 201, 201) solid;
        width: 350px;

        h2 {
          font-family: "Merriweather", serif;
          font-size: 1.7em;
          line-height: 1.5em;
          width: 75%;
          margin: 0;
          padding-top: 100px;
          padding-inline: 0.8em;
        }
      }

      div {
        border-bottom: 1px rgb(201, 201, 201) solid;
        display: flex;
        align-items: center;

        p {
          margin: 0px;
          padding: 1em;
          font-family: "Merriweather", serif;
          border-left: 1px rgb(201, 201, 201) solid;
          color: grey;
        }
      }
    }

    .piani {
      display: flex;
      border-right: 1px rgb(201, 201, 201) solid;
      border-bottom: 1px rgb(201, 201, 201) solid;

      .colonnaTitolo {
        border-top: 5px #a8e3ff solid;
        width: 330px;
        cursor: default;

        &:hover {
          border-top: 5px #40c4ff solid;
        }

        .title {
          height: 250px;
          padding: 2em;
          display: flex;
          flex-direction: column;
          align-items: center;

          background-color: #effaff;
          border-left: 1px rgb(201, 201, 201) solid;

          img {
            width: 100px;
          }

          h2 {
            margin: 0px;
            padding-top: 1em;
            padding-bottom: 0.5em;
            padding-inline: 1em;

            font-size: 1.5em;
            font-family: "Merriweather", serif;
          }

          p {
            margin: 0px;
            font-family: "Roboto", sans-serif;
            font-size: 1.2em;
          }
        }

        .text {
          padding: 1em;
          text-align: center;
          font-family: "Roboto", sans-serif;
          font-weight: 100;
          color: grey;
          border-left: 1px rgb(201, 201, 201) solid;
          border-top: 1px rgb(201, 201, 201) solid;

          i {
            font-size: 1.1em;
          }

          .fa-check {
            color: #40c4ff;
          }
        }

        .button {
          display: flex;
          justify-content: center;
          align-items: center;

          border-left: 1px rgb(201, 201, 201) solid;
          border-top: 1px rgb(201, 201, 201) solid;
          font-family: "Roboto", sans-serif;
          font-weight: 900;
          background-color: #effaff;
          height: 100px;
          button {
            background-color: white;
            border: 2px rgb(201, 201, 201) solid;
            padding: 1em 2em;
            height: fit-content;
            font-weight: 400;
            color: rgb(67, 67, 67);

            &:hover {
              background-color: #40c4ff;
              color: white;
            }
          }
        }
      }
    }

    .svg-icon {
      position: absolute;
      top: 20px;
      right: -57px;
      padding: 0.5em;

      .svg-container-circle {
        width: 50px;
        height: 50px;
        padding: 2px;
        background-color: #ef2853;
        margin-bottom: 0.7em;

        &:hover {
          filter: opacity(0.8);
        }
        .circle {
          width: 100%;
        }
      }
      .svg-container-cart {
        width: 50px;
        height: 50px;
        padding: 6px;
        box-shadow: 0px 0px 9px -1px rgb(187, 187, 187);

        &:hover {
          filter: opacity(0.8);
        }
        .cart {
          width: 100%;
        }
      }
    }
  }
}
</style>
