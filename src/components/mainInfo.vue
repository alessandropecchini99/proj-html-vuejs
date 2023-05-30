<script>
export default {};
</script>

<template>
  <section>
    <!-- card delle icone -->
    <div class="icon">
      <div class="card">
        <img src="../assets/img/main/info/icon-1.png" alt="" />
        <p>Languages</p>
      </div>
      <div class="card">
        <img src="../assets/img/main/info/icon-2.png" alt="" />
        <p>Software</p>
      </div>
      <div class="card">
        <img src="../assets/img/main/info/icon-3.png" alt="" />
        <p>Business</p>
      </div>
      <div class="card">
        <img src="../assets/img/main/info/icon-4.png" alt="" />
        <p>Chemistry</p>
      </div>
      <div class="card">
        <img src="../assets/img/main/info/icon-5.png" alt="" />
        <p>Science</p>
      </div>
      <div class="card">
        <img src="../assets/img/main/info/icon-6.png" alt="" />
        <p>DIY & Craft</p>
      </div>
    </div>

    <!-- sezione learn more -->
    <div class="learn-more">
      <h1>
        The Trusted Name <br />
        for In-Home Tutoring.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eius
        voluptatum natus totam, dolorem corporis consectetur sunt nesciunt
        officia exercitationem, dolores! Inventore dicta vel corrupti? Qui
        voluptate illo voluptatem architecto explicabo sequi.
      </p>
      <button>LEARN MORE</button>
      <img src="../assets/img/main/info/learn-more-1.jpg" alt="learn-more-1" />
    </div>

    <!-- -------------- hr ----------------- -->
    <hr />

    <!-- sezione empoweing -->
    <div class="empowering">
      <div class="globo-image">
        <img src="../assets/img/main/info/learn-more-2.jpg" alt="globo" />
      </div>
      <div class="empower-info">
        <h1>
          Empowering <br />
          Children to Reach <br />
          Their Potential.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, natus
          fuga maiores, sed quo a assumenda rerum, beatae saepe veritatis facere
          non amet excepturi modi explicabo cupiditate. Velit, praesentium
          tempore!
        </p>
        <div class="achivement">
          <div>
            <h1>168</h1>
            <h4>User Stories</h4>
          </div>
          <div>
            <h1>347</h1>
            <h4>Events</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/variables.scss" as *;

section {
  // sezione icone
  .icon {
    @include myContainer;
    display: flex;
    justify-content: space-between;
    gap: 2em;

    font-family: "Merriweather", serif;
    padding-top: 6em;
    padding-bottom: 10em;

    .card {
      background-color: #d9f0ff;
      width: 200px;
      height: 300px;
      transition: 0.2s ease;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: #c1e6ff;
        transition: 0.2s ease;

        img {
          width: 150px;
          margin-bottom: 1.6em;
          filter: brightness(0.7);
          transition: 0.2s ease;
        }
      }

      img {
        width: 140px;
        transition: 0.2s ease;
        margin-bottom: 2.2em;
      }

      p {
        font-size: 1.5em;
        cursor: default;
      }
    }
  }

  //   sezione learn-more
  .learn-more {
    @include myContainer;
    display: flex;
    flex-direction: column;

    h1 {
      margin: 0px;
      line-height: 1.3em;
      font-family: "Merriweather", serif;
      font-weight: 700;
      font-size: 3em;
      cursor: default;
    }

    p {
      font-size: 1.3em;
      margin: 0px;
      padding-top: 1.5em;
      padding-bottom: 1.5em;
      cursor: default;
    }

    button {
      align-self: flex-start;
      border: 0px;
      color: #00a0e4;
      background-color: white;

      font-weight: 700;
      letter-spacing: 1px;

      cursor: pointer;
      transition: 0.2s ease;

      &:hover {
        color: #48b7e7;
        transition: 0.2s ease;
      }
    }

    img {
      width: 85%;
      margin-inline: auto;
      object-fit: cover;
    }
  }

  //   -------------- hr -----------------
  hr {
    margin: 0px;
    margin-top: 1px;
  }

  //   sezione empowering
  .empowering {
    @include myContainer;

    display: flex;
    gap: 3em;
    padding-top: 6em;
    padding-bottom: 3.5em;

    .globo-image {
      flex: 1 0 calc((100% / 2) - 3em);
      display: flex;
      align-items: end;
      img {
        padding-top: 4em;
        width: 100%;
      }
    }

    .empower-info {
      flex-basis: calc((100% / 2) - 3em);
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 3em;

      h1 {
        margin: 0px;
        line-height: 1.3em;
        font-family: "Merriweather", serif;
        font-weight: 700;
        font-size: 3em;
        cursor: default;
      }

      p {
        width: 90%;
        margin: 0px;
        font-size: 1.2em;
      }

      .achivement {
        width: 60%;
        display: flex;
        justify-content: space-between;
        color: #48b7e7;

        h1 {
          font-size: 3.5em;
        }

        h4 {
          font-family: "Merriweather", serif;
          font-size: 1.3em;
          padding-top: 0.5em;
          margin: 0px;
          cursor: default;
        }
      }
    }
  }
}
</style>
