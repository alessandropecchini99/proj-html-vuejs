import { reactive } from "vue";

export const store = reactive({
  // mainInfo -----------------
  arrIcons: [
    {
      image: `src/assets/img/main/info/icon-1.png`,
      text: `Languages`,
    },
    {
      image: `src/assets/img/main/info/icon-2.png`,
      text: `Software`,
    },
    {
      image: `src/assets/img/main/info/icon-3.png`,
      text: `Business`,
    },
    {
      image: `src/assets/img/main/info/icon-4.png`,
      text: `Chemistry`,
    },
    {
      image: `src/assets/img/main/info/icon-5.png`,
      text: `Science`,
    },
    {
      image: `src/assets/img/main/info/icon-6.png`,
      text: `DIY & Craft`,
    },
  ],
  arrImage: [
    `../src/assets/img/main/info/learn-more-1.jpg`,
    `../src/assets/img/main/info/learn-more-2.jpg`,
  ],

  // mainReview -----------------
  reviewActiveIndex: 0,
  arrReview: [
    {
      image: `src/assets/img/main/review/review-1.png`,
      text: `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quo iusto facilis magni rem corporis similique sunt ipsam, magnam, ea vitae blanditiis. Voluptate modi est nulla reiciendis, a earum mollitia, adipisicing elit!"`,
      name: `Joan Collins`,
      role: `STUDENT`,
    },
    {
      image: `src/assets/img/main/review/review-2.png`,
      text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, consequuntur odit? Consequuntur rem perspiciatis temporibus totam ducimus! Voluptate facere at, id voluptatibus impedit tempora dolores fugiat ipsam praesentium culpa."`,
      name: `Marta Smith`,
      role: `STUDENT`,
    },
    {
      image: `src/assets/img/main/review/review-3.png`,
      text: `"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eum dolor minus doloribus nobis laboriosam molestiae ipsa hic
      dolorem! Porro soluta pariatur illum perferendis magni aliquid officiis sapiente labore ullam?"`,
      name: `Johnny Bravo`,
      role: `STUDENT`,
    },
  ],

  // mainCards -----------------
  cardActiveIndex: 0,
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
      list: [`prova 1`, `prova 2`, `prova 3`, `prova 4`, `prova 5`, `prova 6`],
      image: `src/assets/img/main/cards/icon-6.png`,
    },
  ],

  // CAROSELLO ----------------

  carIndex: 0,
  corsi: [
    {
      corso1: [
        {
          image: `src/assets/img/main/carosello/corso-1.jpg`,
          title: `Android Developer`,
          teacher: `David Sanders`,
          bedge: `FREE`,
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto exercitationem tempora odio ducimus voluptates voluptatum consectetur.`,
          tag: `PROGRAMMING`,
        },
        {
          image: `src/assets/img/main/carosello/corso-2.jpg`,
          title: `Web Designing`,
          teacher: `Jennifer Powell`,
          bedge: `FREE`,
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis voluptatibus repellendus eligendi ab? Perspiciatis facilis.`,
          tag: `PROGRAMMING`,
        },
        {
          image: `src/assets/img/main/carosello/corso-3.jpg`,
          title: `Financial Modelling`,
          teacher: `Edward Bowman`,
          bedge: `20€`,
          text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam distinctio perferendis cumque iste sapiente ab culpa voluptatem quod.`,
          tag: `BUSINESS    `,
        },
      ],
    },
    {
      corso2: [
        {
          image: `src/assets/img/main/carosello/corso-3.jpg`,
          title: `Financial Modelling`,
          teacher: `Edward Bowman`,
          bedge: `20€`,
          text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam distinctio perferendis cumque iste sapiente ab culpa voluptatem quod.`,
          tag: `BUSINESS    `,
        },
        {
          image: `src/assets/img/main/carosello/corso-1.jpg`,
          title: `Android Developer`,
          teacher: `David Sanders`,
          bedge: `FREE`,
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto exercitationem tempora odio ducimus voluptates voluptatum consectetur.`,
          tag: `PROGRAMMING`,
        },
        {
          image: `src/assets/img/main/carosello/corso-2.jpg`,
          title: `Web Designing`,
          teacher: `Jennifer Powell`,
          bedge: `FREE`,
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis voluptatibus repellendus eligendi ab? Perspiciatis facilis.`,
          tag: `PROGRAMMING`,
        },
      ],
    },
    {
      corso3: [
        {
          image: `src/assets/img/main/carosello/corso-2.jpg`,
          title: `Web Designing`,
          teacher: `Jennifer Powell`,
          bedge: `FREE`,
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis voluptatibus repellendus eligendi ab? Perspiciatis facilis.`,
          tag: `PROGRAMMING`,
        },
        {
          image: `src/assets/img/main/carosello/corso-3.jpg`,
          title: `Financial Modelling`,
          teacher: `Edward Bowman`,
          bedge: `20€`,
          text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam distinctio perferendis cumque iste sapiente ab culpa voluptatem quod.`,
          tag: `BUSINESS    `,
        },
        {
          image: `src/assets/img/main/carosello/corso-1.jpg`,
          title: `Android Developer`,
          teacher: `David Sanders`,
          bedge: `FREE`,
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto exercitationem tempora odio ducimus voluptates voluptatum consectetur.`,
          tag: `PROGRAMMING`,
        },
      ],
    },
  ],
  // ARRAY PLANS --------------
  arrPlans: [
    `Number of Courses`,
    `Time`,
    `Web Designing`,
    `Human-Centered Design`,
    `Basic Marketing`,
    `Python for Everybody`,
    `Android Developer`,
    `Business English`,
  ],
  arrPlanType: [
    {
      title: {
        name: `Standard`,
        image: `src/assets/img/main/plans/plan-1.png`,
      },
      price: `12€`,
      text: [`2`, `15 Days`, true, true, false, false, false, false],
    },
    {
      title: {
        name: `Professional`,
        image: `src/assets/img/main/plans/plan-2.png`,
      },
      price: `59€`,
      text: [`4`, `30 Days`, true, true, true, true, false, false],
    },
    {
      title: {
        name: `Advanced`,
        image: `src/assets/img/main/plans/plan-3.png`,
      },
      price: `88€`,
      text: [`6`, `30 Days`, true, true, true, true, true, true],
    },
  ],
  arrSvg: [
    `src/assets/img/main/plans/svg-1.svg`,
    `src/assets/img/main/plans/svg-2.svg`,
  ],
  // ARRAY LOGO -----------
  arrLogo: [
    `src/assets/img/footer/iAcademy.png`,
    `src/assets/img/footer/uni.png`,
    `src/assets/img/footer/edu.png`,
    `src/assets/img/footer/teach.png`,
  ],
});
