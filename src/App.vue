<template>
  <div>
    <div v-if="isLogin">
      <main-header v-model:collapse="isCollapse"></main-header>
      <div class="main-box">
        <main-menu :is-collapse="isCollapse"></main-menu>
        <div class="main-content">
          <div class="location">
            <div class="tip">当前位置 ></div>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item
                v-for="(item, index) in location"
                :key="index"
                :to="{ name: item.name }"
                >{{ item.title }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <router-view />
        </div>
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
    location() {
      return this.$route.meta.location;
    },
  },
};
</script>

<style lang="scss">
@import "libs/css/common";
.main-box {
  display: flex;
}
.main-content {
  padding: 0 20px;
  .location {
    display: flex;
    align-items: center;
    height: 54px;
    .tip {
      font-weight: 400;
      color: #606266;
      cursor: text;
      font-size: 14px;
      line-height: 1;
      margin-right: 10px;
    }
  }
}
</style>
