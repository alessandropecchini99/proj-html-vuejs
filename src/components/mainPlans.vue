<script>
export default {
  props: {
    arrPlans: String,
    arrPlanType: Object,
  },
};
</script>

•
<template>
  <!-- PLANS -->
  <hr />
  <section>
    <div class="generale">
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
          <div v-for="data in arrPlans">
            <p>{{ data }}</p>
          </div>
        </div>

        <div class="piani">
          <div
            v-for="plan in arrPlanType"
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
              <i class="fa-solid fa-xmark" v-show="text == false"></i>
              <i class="fa-solid fa-check" v-show="text == true"></i>
            </div>
            <div class="button">
              <button>GET IT NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/variables.scss" as *;

section {
  height: fit-content;
  padding-bottom: 3em;
  background-image: url(../assets/img/main/bck.png);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .intro {
    text-align: center;
    line-height: 2em;
    padding-top: 5em;
    padding-bottom: 3em;
  }

  .table {
    display: flex;
    justify-content: center;

    background-color: white;
    width: fit-content;

    .service {
      height: fit-content;

      .sale {
        height: 251px;
        border-top: 5px #40c4ff solid;
        background-color: #effaff;
        border-left: 1px grey solid;
        h2 {
          font-family: "Merriweather", serif;
          font-size: 1.7em;
          width: 255px;
          margin: 0;
          padding-top: 40%;
          padding-inline: 0.8em;
        }
      }

      div {
        border-bottom: 1px grey solid;
        display: flex;
        align-items: center;

        p {
          margin: 0px;
          padding: 1em;
          font-family: "Merriweather", serif;
          border-left: 1px grey solid;
        }
      }
    }

    .piani {
      display: flex;

      border-right: 1px grey solid;
      border-bottom: 1px grey solid;

      .colonnaTitolo {
        .title {
          height: 250px;
          padding: 2em;
          display: flex;
          flex-direction: column;
          align-items: center;

          border-top: 5px #40c4ff solid;
          border-left: 1px grey solid;
          background-color: #effaff;

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
          border-left: 1px grey solid;
          border-top: 1px grey solid;

          i {
            font-size: 1.1em;
          }
        }

        .button {
          display: flex;
          justify-content: center;
          align-items: center;

          border-left: 1px grey solid;
          border-top: 1px grey solid;
          font-family: "Roboto", sans-serif;
          font-weight: 900;
          background-color: #effaff;
          height: 100px;
          button {
            background-color: white;
            border: 2px grey solid;
            padding: 1em 2em;
            height: fit-content;

            &:hover {
              background-color: #40c4ff;
              color: white;
            }
          }
        }
      }
    }
  }

  .lastItem {
    color: red;
  }
}
</style>
