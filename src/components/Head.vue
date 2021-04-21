<template>
    <div>
      <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              router
      >
              <el-menu-item index="/home">首页</el-menu-item>
              <el-submenu index="/news">
                <template slot="title">新闻</template>
                <el-menu-item index="/news">国内新闻</el-menu-item>
                <el-menu-item index="2-2">国际新闻</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="/aboutus">关于我们</el-menu-item>
              <el-menu-item index="/user">用户中心</el-menu-item>
      </el-menu>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
