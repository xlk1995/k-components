<template>
  <span @click="handleCollapse">
    <el-icon-expand v-if="isCollapse"></el-icon-expand>
    <el-icon-fold v-else></el-icon-fold>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  isCollapse: boolean
}>()

const emit = defineEmits(['update:isCollapse'])

const handleCollapse = () => {
  emit('update:isCollapse', !props.isCollapse)
}
</script>

<style lang="scss">
.el-header {
  height: 60px;
  // width: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
}
svg {
  height: 1em;
  width: 1em;
}
</style>
