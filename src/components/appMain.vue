<script>
import mainInfo from "./mainInfo.vue";
import mainReview from "./mainReview.vue";
import mainCards from "./mainCards.vue";
import mainCarousell from "./mainCarousell.vue";
import mainPlans from "./mainPlans.vue";

export default {
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
    <mainPlans />
  </main>
</template>

<style lang="scss" scoped></style>
