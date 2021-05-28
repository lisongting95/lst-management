<template>
  <div class="menu-box">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      router
    >
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-menu"></i>
          <span class="top-menu">顶级目录一</span>
        </template>
        <el-submenu index="1-1">
          <template #title>次级目录一</template>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/about">关于</el-menu-item>
        </el-submenu>
        <el-submenu index="1-2">
          <template #title>次级目录二</template>
          <el-menu-item index="1-2-1">选项1</el-menu-item>
          <el-menu-item index="1-2-2">选项2</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template #title>
          <i class="el-icon-menu"></i>
          <span class="top-menu">顶级目录二</span>
        </template>
        <el-submenu index="2-1">
          <template #title>次级目录一</template>
          <el-menu-item index="2-1-1">选项1</el-menu-item>
          <el-menu-item index="2-1-2">选项2</el-menu-item>
        </el-submenu>
        <el-submenu index="2-2">
          <template #title>次级目录二</template>
          <el-menu-item index="2-2-1">选项1</el-menu-item>
          <el-menu-item index="2-2-2">选项2</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template #title>
          <i class="el-icon-menu"></i>
          <span class="top-menu">顶级目录三</span>
        </template>
        <el-submenu index="3-1">
          <template #title>次级目录一</template>
          <el-menu-item index="3-1-1">选项1</el-menu-item>
          <el-menu-item index="3-1-2">选项2</el-menu-item>
        </el-submenu>
        <el-submenu index="3-2">
          <template #title>次级目录二</template>
          <el-menu-item index="3-2-1">选项1</el-menu-item>
          <el-menu-item index="3-2-2">选项2</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.menu-box {
  .top-menu {
    padding-right: 80px;
  }
}
</style>
