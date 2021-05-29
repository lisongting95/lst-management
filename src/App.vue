<template>
  <div>
    <main-header @on-click-fold="onClickFold"></main-header>
    <div class="main-box">
      <main-menu :is-collapse="isCollapse"></main-menu>
      <router-view />
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import MainMenu from "@/components/MainMenu";
export default {
  components: { MainMenu, MainHeader },
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    onClickFold(v) {
      console.log("--->", v);
      this.isCollapse = v;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-box {
  display: flex;
}
</style>
