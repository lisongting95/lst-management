<template>
  <div class="menu-box">
    <div class="search-box" v-if="!isCollapse">
      <el-input placeholder="搜索" v-model="searchKey" @change="onSearch">
        <template #suffix>
          <i class="el-input__icon el-icon-search" @click="onSearch"></i>
        </template>
      </el-input>
    </div>

    <el-menu
      ref="mainMenu"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :default-active="currentPage"
    >
      <template v-for="(item, index) in menuList" :key="index">
        <el-submenu v-if="item.isShow && item.children" :index="item.name">
          <template #title>
            <i :class="item.icon"></i>
            <span
              :style="{ paddingRight: 176 - item.name.length * 14 + 'px' }"
              >{{ item.name }}</span
            >
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
            <span
              :style="{ paddingRight: 176 - item.name.length * 14 + 'px' }"
              >{{ item.name }}</span
            >
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { getMenu, getSubmenuIndexes } from "@/components/MainMenu/menuData";

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
      searchKey: "",
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
      if (item.routeName === "Login") {
        this.$store.commit("setToken", false);
        this.$router.replace({ name: "Login" });
        return;
      }
      if (item.routeName === "User") {
        this.$router.push({ name: "User", params: { id: 6 } });
        return;
      }
      this.$router.push({ name: item.routeName });
    },
    onSearch() {
      this.menuList = [].concat(getMenu("superManager", this.searchKey));
      console.log("indexes -->", getSubmenuIndexes());
      if (this.searchKey) {
        let submenus = getSubmenuIndexes();
        submenus.forEach((name) => {
          this.$refs.mainMenu.open(name);
        });
      }
    },
  },
  computed: {
    currentPage() {
      console.log("current page --->", this.$route);
      if (this.$route.meta.location) {
        return this.$route.meta.location[this.$route.meta.location.length - 1]
          .title;
      }
      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-box {
  .top-menu {
    padding-right: 120px;
  }
  .search-box {
    border-right: solid 1px #e6e6e6;
    padding: 10px;
  }
}
</style>
