<script setup>
import '@/assets/admin/css/home.css'; //导入样式
import HomeHeader from '备份/src/components/admin/home/HomeHeader.vue'; //导入 Header 组件
import HomeSide from '备份/src/components/admin/home/HomeSide.vue'; //导入侧边栏组件
</script>

<template>
  <div class="dr-home">
    <div class="header">
      <HomeHeader />
    </div>

    <div class="main">
      <div class="side">
        <HomeSide />
      </div>

      <div class="content">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
