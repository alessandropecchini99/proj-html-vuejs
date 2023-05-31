<script>
export default {
  data() {
    return {
      activeIndex: 0,
      arrCards: [
        {
          cardTitle: `What we do`,
          title: `Learning Possibilities`,
          paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id consequatur laudantium sint consequuntur pariatur nulla dolore! Molestiae deleniti autem dolor, officia voluptatum fugit quae, voluptate provident voluptates iste sequi.`,
          list: [
            `We enrich lives through learning.`,
            `Maximizing potential through individual attention.`,
            `The trusted name for specialized training.`,
            `People teach. People learn. This is where they connect.`,
          ],
          image: `src/assets/img/main/cards/icon-1.png`,
        },
        {
          cardTitle: `Degree Programme`,
          title: `Degree Prova`,
          paragraph: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum consequatur quasi, totam veritatis et nisi fugiat nemo eveniet eius vero nobis quibusdam id quos ut soluta doloremque sequi sit quae.`,
          list: [`prova 1`, `prova 2`, `prova 3`],
          image: `src/assets/img/main/cards/icon-2.png`,
        },
        {
          cardTitle: `Career Achievements`,
          title: `Career Prova`,
          paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut iure sed accusantium harum! Debitis repudiandae obcaecati accusantium aliquid maxime, reiciendis ullam repellendus ducimus officia iure optio mollitia dicta possimus!`,
          list: [`prova 1`, `prova 2`, `prova 3`, `prova 4`],
          image: `src/assets/img/main/cards/icon-3.png`,
        },
        {
          cardTitle: `Personal Management`,
          title: `Personal Prova`,
          paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id consequatur laudantium sint consequuntur pariatur nulla dolore! Molestiae deleniti autem dolor, officia voluptatum fugit quae, voluptate provident voluptates iste sequi.`,
          list: [`prova 1`, `prova 2`, `prova 3`, `prova 4`, `prova 5`],
          image: `src/assets/img/main/cards/icon-4.png`,
        },
        {
          cardTitle: `Steps To Success`,
          title: `Steps Prova`,
          paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, laboriosam officiis quam voluptatum aliquid esse consequatur debitis veritatis architecto culpa quos pariatur sunt impedit nihil explicabo dolore quis perspiciatis qui.`,
          list: [`prova 1`, `prova 2`],
          image: `src/assets/img/main/cards/icon-5.png`,
        },
        {
          cardTitle: `Knowledge Transfer`,
          title: `Knowledge Prova`,
          paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id consequatur laudantium sint consequuntur pariatur nulla dolore! Molestiae deleniti autem dolor, officia voluptatum fugit quae, voluptate provident voluptates iste sequi.`,
          list: [
            `prova 1`,
            `prova 2`,
            `prova 3`,
            `prova 4`,
            `prova 5`,
            `prova 6`,
          ],
          image: `src/assets/img/main/cards/icon-6.png`,
        },
      ],
    };
  },
  methods: {
    select(index) {
      this.activeIndex = index;
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
          v-for="(miniCard, index) in arrCards"
          :key="index"
          :class="{
            active: index == activeIndex,
            lastItem: index === arrCards.length - 1,
          }"
          @click="select(index)"
        >
          <p>{{ miniCard.cardTitle }}</p>
        </div>
      </div>

      <!-- card selezionata -->
      <div class="card-selezionata">
        <div
          v-for="(card, index) in arrCards"
          :key="index"
          v-show="index === activeIndex"
        >
          <h1>{{ card.title }}</h1>
          <p>{{ card.paragraph }}</p>
          <ul>
            <li v-for="testo in card.list" :key="testo">
              <i class="fa-solid fa-check"></i>
              <span>{{ testo }}</span>
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
  .myContainer {
    @include myContainer;
    height: fit-content;
    padding-top: 5em;
    padding-bottom: 8em;

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
