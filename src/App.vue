<template>
  <div>
    <main-header v-model:collapse="isCollapse"></main-header>
    <div class="main-box">
      <main-menu :is-collapse="isCollapse"></main-menu>
      <router-view />
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader/MainHeader";
import MainMenu from "@/components/MainMenu/MainMenu";
export default {
  components: { MainMenu, MainHeader },
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.main-box {
  display: flex;
}
</style>
