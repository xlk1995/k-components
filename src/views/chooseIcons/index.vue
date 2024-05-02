<template>
  <div>
    <choose-icons title="图标库" v-model:visible="visible">
      选择图标
    </choose-icons>
  </div>
</template>

<script setup lang="ts">
import chooseIcons from '@/components/chooseIcon/src/index.vue'
import { ref } from 'vue'

const visible = ref(false)
</script>

<style lang="scss" scoped></style>
