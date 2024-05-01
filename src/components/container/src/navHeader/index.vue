<template>
  <el-header>
    <span @click="handleCollapse">
      <el-icon-expand v-if="isCollapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </el-header>
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

<style lang="scss"></style>
