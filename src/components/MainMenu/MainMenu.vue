<template>
  <div class="menu-box">
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
      <template v-for="(item, index) in menuList" :key="index">
        <el-submenu v-if="item.isShow && item.children" :index="item.name">
          <template #title>
            <i :class="item.icon"></i>
            <span class="top-menu">{{ item.name }}</span>
          </template>
          <template
            v-for="(subItem, subIndex) in item.children"
            :key="subIndex"
          >
            <el-submenu
              v-if="subItem.isShow && subItem.children"
              :index="subItem.name"
            >
              <template #title>{{ subItem.name }}</template>
              <template
                v-for="(metaItem, metaIndex) in subItem.children"
                :key="metaIndex"
              >
                <el-menu-item
                  v-if="metaItem.isShow"
                  :index="metaItem.name"
                  @click="goToPage(metaItem)"
                >
                  {{ metaItem.name }}
                </el-menu-item>
              </template>
            </el-submenu>
            <!--次级没有子目录时-->
            <el-menu-item
              v-if="subItem.isShow && !subItem.children"
              :index="subItem.name"
              @click="goToPage(subItem)"
            >
              {{ subItem.name }}
            </el-menu-item>
          </template>
        </el-submenu>
        <!--顶级没有子目录时-->
        <el-menu-item
          v-if="item.isShow && !item.children"
          :index="item.name"
          @click="goToPage(item)"
        >
          <template #title>
            <i :class="item.icon"></i>
            <span class="top-menu">{{ item.name }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { getMenu } from "@/components/MainMenu/menuData";

export default {
  name: "MainMenu",
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      menuList: [],
    };
  },
  methods: {
    init() {
      this.menuList = getMenu("superManager");
    },
    goToPage(item) {
      if (!this.$router.hasRoute(item.routeName)) {
        return;
      }
      if (item.routeName === "User") {
        this.$router.push({ name: "User", params: { id: 6 } });
        return;
      }
      this.$router.push({ name: item.routeName });
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-box {
  .top-menu {
    padding-right: 80px;
  }
}
</style>
