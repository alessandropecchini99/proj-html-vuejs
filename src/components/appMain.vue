<script>
import mainInfo from "./mainInfo.vue";
import mainReview from "./mainReview.vue";
import mainCards from "./mainCards.vue";
import mainCarousell from "./mainCarousell.vue";
import mainPlans from "./mainPlans.vue";

export default {
  data() {
    return {
      arrPlans: [
        `Number of Couses`,
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
    };
  },
  components: {
    mainInfo,
    mainReview,
    mainCards,
    mainCarousell,
    mainPlans,
  },
};
</script>

<template>
  <main>
    <mainInfo />
    <mainReview />
    <mainCards />
    <mainCarousell />
    <mainPlans :arrPlans="this.arrPlans" :arrPlanType="this.arrPlanType" />
  </main>
</template>

<style lang="scss" scoped></style>
