<script>
export default {};
</script>

<template>
  <footer>
    <!-- info -->
    <div class="info">
      <!-- contact -->
      <div class="contact">
        <img src="../assets/img/footer/logo-light.png" alt="logo" />
        <p>
          Providing Life Changing Experiences Through Education. Class That Fit
          Your Busy Life. Closer to Home
        </p>
        <div><i class="fa-solid fa-phone-volume"></i> 1-677-124-44227</div>
        <div><i class="fa-regular fa-clock"></i> Mon- Sat 8:00 - 18:00</div>
      </div>
      <!-- corsi popolari -->
      <div class="courses">
        <h1>Popular Courses</h1>
        <div>
          <h4>Business English</h4>
          <p>Preston Marshall</p>
        </div>
        <div>
          <h4>Social Computing</h4>
          <p>David Sanders</p>
        </div>
        <div>
          <h4>Learn Spanish</h4>
          <p>Jennie King</p>
        </div>
      </div>
      <!-- Supporto -->
      <div class="supporto">
        <h1>Support</h1>
        <ul>
          <li>User dashboard</li>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>Course Offer</li>
          <li>Event</li>
        </ul>
      </div>
      <!-- mappa -->
      <div class="mappa">
        <h1>Flexible Learning</h1>
        <img src="../assets/img/footer/footer-img-1.png" alt="" />
      </div>
    </div>

    <!-- barra -->
    <hr />

    <!-- copyrights -->
    <div class="copyright">
      <p>Copyrights 2017 Mikado Themes</p>
      <div class="copy-info">
        <p>CALL +44 300 0266</p>
        <p>FOLLOW US</p>
        <div class="icon">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook-f"></i>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/variables.scss" as *;

footer {
  height: 700px;
  background-color: #222222;
  color: #959595;
  .info {
    @include myContainer;
    padding-top: 8em;
    padding-bottom: 3em;
    height: fit-content;
    display: flex;
    gap: 1em;

    .contact,
    .courses,
    .supporto,
    .mappa {
      flex-basis: calc((100% / 4) - 1em);

      h1 {
        color: white;
        font-size: 2.2em;
        font-family: "Merriweather", serif;
        margin: 0px;
        padding-bottom: 1em;
      }
    }

    .contact {
      img {
        width: 220px;
        padding-bottom: 2em;
      }

      p {
        width: 300px;
        padding-bottom: 2.2em;
        margin: 0px;
        font-size: 1.3em;
        line-height: 1.7em;
      }

      div {
        color: white;
        margin-bottom: 1.3em;
        font-family: "Roboto", sans-serif;
        font-weight: 100;
        font-size: 1.2em;

        i {
          margin-right: 1em;
        }
      }
    }

    .courses {
      div {
        padding-bottom: 1em;
        h4 {
          font-size: 1.5em;
          font-family: "Merriweather", serif;
        }

        p {
          font-size: 1.1em;
          font-weight: 200;
        }
      }
    }

    .supporto {
      ul {
        list-style-type: none;
        padding: 0px;

        li {
          padding-bottom: 1em;
          font-size: 1.4em;
        }
      }
    }

    .mappa {
      img {
        width: 100%;
      }
    }
  }

  hr {
    @include myContainer;
    height: 0px;
    border: 1px #505050 solid;
  }

  .copyright {
    @include myContainer;
    height: fit-content;
    padding-top: 2em;
    font-family: "Roboto", sans-serif;
    font-weight: 100;

    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0px;
    }
    .copy-info {
      display: flex;
      align-items: center;
      gap: 2em;

      .icon {
        display: flex;
        align-items: center;
        gap: 0.8em;
      }
    }
  }
}
</style>
