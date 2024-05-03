<template>
  <div>
    <k-choose-icon title="图标库" v-model:visible="visible">
      选择图标
    </k-choose-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<style lang="scss" scoped></style>
