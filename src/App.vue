<template>
  <div>
    <div v-if="isLogin">
      <main-header v-model:collapse="isCollapse"></main-header>
      <div class="main-box">
        <main-menu :is-collapse="isCollapse"></main-menu>
        <router-view />
      </div>
    </div>
    <div v-else>
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
  computed: {
    isLogin() {
      return this.$store.getters["user/getToken"];
    },
  },
};
</script>

<style lang="scss">
@import "libs/css/common";
.main-box {
  display: flex;
}
</style>
