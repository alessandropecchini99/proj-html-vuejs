<script>
import { store } from "../../store";
export default {
  data() {
    return {
      store,
    };
  },
  mounted() {
    const myCarouselElement = document.querySelector("#myCarousel");
  },
};
</script>

<template>
  <!-- REVIEW -->
  <section>
    <!-- carosello -->
    <div id="carouselExampleCaptions" class="carousel slide">
      <!-- bottoni per scelta immagine -->
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <!-- immagini del carosello -->
      <div class="carousel-inner">
        <div
          v-for="(review, index) in store.arrReview"
          :key="index"
          class="carousel-item"
          :class="{ active: index == store.reviewActiveIndex }"
        >
          <img
            src="../../assets/img/main/review/img-trasparente.png"
            class="d-block w-100"
            alt="trasparente"
          />
          <div class="revStyle carousel-caption">
            <img :src="review.image" :alt="review.name" />
            <p>
              {{ review.text }}
            </p>
            <div>
              <h3>{{ review.name }}</h3>
              <h5>{{ review.role }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/variables.scss" as *;

section {
  color: white;
  background-image: url(../../assets/img/main/review/bck-mondo.png);
  background-position: top;

  #carouselExampleCaptions {
    .carousel-indicators {
      display: flex;
      gap: 0.5em;
      padding-bottom: 2em;

      button {
        width: 13px;
        height: 13px;
        border-radius: 100%;
      }
    }

    .revStyle {
      @include myContainer;
      width: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2.5em;
      text-align: center;
      cursor: default;

      img {
        height: 130px;
      }

      p {
        margin: 0px;
        font-size: 1.5em;
        width: 90%;
      }

      div {
        h3 {
          font-family: "Merriweather", serif;
          margin: 0px;
        }

        h5 {
          padding-top: 1.2em;
          margin: 0px;

          font-size: 1em;
          font-weight: 800;
          letter-spacing: 2px;
        }
      }
    }
    .carousel-item {
      height: 800px;
    }
  }
}
</style>
