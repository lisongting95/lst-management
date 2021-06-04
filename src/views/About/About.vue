<template>
  <div class="about">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ name: 'Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ name: 'About' }">关于</el-breadcrumb-item>
    </el-breadcrumb>

    <h1>{{ stateText }}</h1>
    <div @click="change">{{ token }}</div>
    <div style="margin-top: 20px">{{ computedTest }}</div>
    <router-view />
  </div>
</template>
<script>
import { toRefs } from "vue";
//把逻辑片段整理到一起
import useLogin from "@/views/About/useLogin";

export default {
  setup(props) {
    // 使用 `toRefs` 创建对prop的 `user` property 的响应式引用
    const { user } = toRefs(props);

    const { token, computedTest, getLoginToken } = useLogin(user);

    return {
      token,
      computedTest,
      getLoginToken,
    };
  },
  // async mounted() {
  //   let res = await this.$model.login({
  //     mobile: "18669010827",
  //     password: "123456",
  //     type: "password",
  //   });
  //   console.log("login res --->", res);
  //   this.token = res;
  //   console.log("token --->", this.token);
  // },
  data() {
    return {
      res1: "cc",
    };
  },
  methods: {
    change() {
      console.log("this -->", this);
      this.res = "bb";
      // this.res1 = "dd";
    },
  },
  computed: {
    stateText() {
      return this.$store.state.stateText;
    },
    test() {
      return this.res + "123";
    },
  },
};
</script>
<style lang="scss" scoped>
.about {
  padding: 20px;
}
</style>
