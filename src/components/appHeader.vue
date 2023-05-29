<script>
export default {
  mounted() {
    const myCarouselElement = document.querySelector("#myCarousel");
  },
};
</script>

<template>
  <section>
    <!-- NAVBAR -->
    <div class="navbar">
      <img src="../assets/img/header/logo-light.png" alt="" />
      <ul>
        <li>HOME</li>
        <li>COURSES</li>
        <li>INSTRUCTORS</li>
        <li>EVENTS</li>
        <li>PAGES</li>
        <li>ELEMENTS</li>
      </ul>
      <div class="nav-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
        <div class="cart-number">
          <i class="fa-solid fa-bag-shopping"></i>
          <p>0</p>
        </div>
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>

    <!-- JUMBO - CAROSELLO -->
    <div id="myCarousel" class="carousel slide">
      <!-- bottoni per scelta immagine -->
      <ol class="carousel-indicators">
        <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active">
          <i class="fa-solid fa-circle"></i>
        </li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
      </ol>
      <!-- immagini del carosello -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/img/header/bck-header.jpg"
            class="d-block w-100"
            alt="man-at-pc"
          />
          <div class="jumbo carousel-caption">
            <h1>Contemporary Ideas</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              reiciendis. Odit quos corporis veritatis consectetur, amet
              consequatur minus maxime soluta esse, aliquid vel omnis vero,
              facere quam ea deleniti eveniet.
            </p>
            <button>REGISTRER NOW</button>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/header/bck-header-2.jpg"
            class="d-block w-100"
            alt="friend-studying"
          />
          <div class="jumbo carousel-caption">
            <h1>Online Classes</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              reiciendis. Odit quos corporis veritatis consectetur, amet
              consequatur minus maxime soluta esse, aliquid vel omnis vero,
              facere quam ea deleniti eveniet.
            </p>
            <button>REGISTRER NOW</button>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/header/bck-header-3.jpg"
            class="d-block w-100"
            alt="girl-studies"
          />
          <div class="jumbo carousel-caption">
            <h1>Online Materials</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              reiciendis. Odit quos corporis veritatis consectetur, amet
              consequatur minus maxime soluta esse, aliquid vel omnis vero,
              facere quam ea deleniti eveniet.
            </p>
            <button>REGISTRER NOW</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/variables.scss" as *;

.navbar {
  @include myContainer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 1em;
  height: fit-content;
  color: white;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  img {
    width: 260px;
    cursor: pointer;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 3em;
    font-size: 1.2em;
    margin: 0px;

    li {
      cursor: pointer;
      transition: 0.2s ease;
      &:hover {
        color: rgb(203, 203, 203);
        transition: 0.2s ease;
      }
    }
  }

  .nav-icon {
    display: flex;
    justify-content: end;
    gap: 1.5em;
    font-size: 1.5em;

    i {
      cursor: pointer;
      transition: 0.2s ease;
      &:hover {
        color: rgb(203, 203, 203);
        transition: 0.2s ease;
      }
    }

    .cart-number {
      display: flex;
      position: relative;

      &:hover {
        color: white;
      }

      p {
        font-family: "Roboto", sans-serif;
        cursor: pointer;
        background-color: #40c4ff;
        border-radius: 50%;
        font-size: 0.5em;
        padding: 1px 6px;
        position: absolute;
        top: -3px;
        right: -8px;
      }
    }
  }
}

#myCarousel {
  position: relative;
  height: 100vh;
  color: white;

  //   PROVARE A MODIFICARE I CLICK DEL CAROSELLO
  .carousel-indicators {
    li {
      padding: 0px;
    }
  }
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
    width: 65%;
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
    }

    p {
      font-size: 1.25em;
      font-weight: 100;
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
