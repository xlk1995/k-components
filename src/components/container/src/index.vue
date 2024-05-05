<template>
  <el-container>
    <el-aside width="auto">
      <nav-side :collapse="isCollapse" />
    </el-aside>

    <el-container class="content-wrapper">
      <el-header>
        <nav-header v-model:isCollapse="isCollapse" />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavSide from './navSide/index.vue'
import NavHeader from './navHeader/index.vue'

const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.el-header {
  border-bottom: 1px solid #eee;
}
</style>
