<template>
  <div>
    <k-choose-area @change="handleChange" />
  </div>
</template>

<script setup lang="ts">
// import kChooseArea from '@/components/chooseArea/src/index.vue'
const handleChange = (data: any) => {
  console.log(data)
}
</script>

<style lang="scss" scoped></style>
