<script>
import footerInfo from "./footerComponents/footerInfo.vue";

export default {
  data() {
    return {
      arrImages: [
        `../src/assets/img/footer/logo-light.png`,
        `../src/assets/img/footer/footer-img-1.png`,
      ],
      arrCourse: [
        {
          title: `Business English`,
          teacher: `Preston Marshall`,
        },
        {
          title: `Social Computing`,
          teacher: `David Sanders`,
        },
        {
          title: `Learn Spanish`,
          teacher: `Jennie King`,
        },
      ],
      arrSupport: [
        `User dashboard`,
        `Contact Us`,
        `FAQ`,
        `Course Offert`,
        `Event`,
      ],
    };
  },
  components: {
    footerInfo,
  },
};
</script>

<template>
  <footer>
    <footerInfo
      :arrImages="arrImages"
      :arrCourse="arrCourse"
      :arrSupport="arrSupport"
    />
  </footer>
</template>

<style lang="scss" scoped>
footer {
  cursor: default;
  height: 700px;
  background-color: #222222;
  color: #959595;
}
</style>
