<template>
  <el-container>
    <el-aside width="auto">
      <nav-side :isCollapse="isCollapse" />
    </el-aside>

    <div class="content-wrapper">
      <el-header>
        <nav-header v-model:isCollapse="isCollapse" />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </div>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavSide from './navSide/index.vue'
import NavHeader from './navHeader/index.vue'

const isCollapse = ref(false)
</script>

<style lang="scss"></style>
