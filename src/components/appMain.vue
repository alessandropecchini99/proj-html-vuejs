<script>
import mainInfo from "./mainComponents/mainInfo.vue";
import mainReview from "./mainComponents/mainReview.vue";
import mainCards from "./mainComponents/mainCards.vue";
import mainCarousell from "./mainComponents/mainCarousell.vue";
import mainPlans from "./mainComponents/mainPlans.vue";
import mainLogo from "./mainComponents/mainLogo.vue";

export default {
  components: {
    mainInfo,
    mainReview,
    mainCards,
    mainCarousell,
    mainPlans,
    mainLogo,
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
    <mainLogo />
  </main>
</template>

<style lang="scss" scoped></style>
