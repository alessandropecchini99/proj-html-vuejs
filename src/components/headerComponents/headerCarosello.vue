<script>
export default {
  props: {
    arrCarousell: Object,
  },
};
</script>

<template>
  <!-- JUMBO - CAROSELLO -->
  <div id="myCarousel" class="carousel slide">
    <!-- bottoni per scelta immagine -->
    <ol class="carousel-indicators">
      <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
      <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
      <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
    </ol>
    <!-- immagini del carosello -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          :src="arrCarousell[0].image"
          class="d-block w-100"
          alt="man-at-pc"
        />
        <div class="jumbo carousel-caption">
          <h1>{{ arrCarousell[0].title }}</h1>
          <p>
            {{ arrCarousell[0].text }}
          </p>
          <button>REGISTRER NOW</button>
        </div>
      </div>
      <div class="carousel-item">
        <img
          :src="arrCarousell[1].image"
          class="d-block w-100"
          alt="friend-studying"
        />
        <div class="jumbo carousel-caption">
          <h1>{{ arrCarousell[1].title }}</h1>
          <p>
            {{ arrCarousell[1].text }}
          </p>
          <button>REGISTRER NOW</button>
        </div>
      </div>
      <div class="carousel-item">
        <img
          :src="arrCarousell[2].image"
          class="d-block w-100"
          alt="girl-studies"
        />
        <div class="jumbo carousel-caption">
          <h1>{{ arrCarousell[2].title }}</h1>
          <p>
            {{ arrCarousell[2].text }}
          </p>
          <button>REGISTRER NOW</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/variables.scss" as *;

#myCarousel {
  position: relative;
  height: 100vh;
  color: white;

  //   PROVARE A MODIFICARE I CLICK DEL CAROSELLO
  //   .carousel-indicators {
  //     color: black;
  //     li {
  //       width: 20px;
  //       height: 20px;
  //       border-radius: 100%;
  //     }
  //   }
  .carousel-item {
    height: 100vh;

    img {
      height: 100%;
      object-fit: cover;
      filter: brightness(55%);
    }
  }

  //   JUMBO
  .jumbo {
    @include myContainer;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    text-align: center;

    h1 {
      font-family: "Merriweather", serif;
      font-size: 6em;
      font-weight: 700;
      letter-spacing: 1px;
      cursor: default;
    }

    p {
      width: 65%;
      font-size: 1.25em;
      font-weight: 100;
      cursor: default;
    }

    button {
      border: 0px;
      padding: 20px 40px;
      background-color: #40c4ff;
      color: white;
      letter-spacing: 1px;
      transition: 0.2s ease;

      &:hover {
        background-color: #00aeff;
        transition: 0.2s ease;
      }
    }
  }
}
</style>
