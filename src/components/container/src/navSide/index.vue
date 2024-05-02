<template>
  <el-menu
    default-active="2"
    :collapse="isCollapse"
    class="el-menu-vertical-demo"
  >
    <el-menu-item index="2">
      <template #title>
        <el-icon-location></el-icon-location>
        <span>图标选择</span>
      </template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
defineProps<{
  isCollapse: boolean
}>()
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
