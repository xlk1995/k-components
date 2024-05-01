<template>
  <el-container>
    <nav-side :isCollapse="isCollapse" />
    <div class="content-wrapper">
      <nav-header v-model:isCollapse="isCollapse" />
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

<style lang="scss">
.content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  .el-main {
    flex: 1;
  }
}
</style>
