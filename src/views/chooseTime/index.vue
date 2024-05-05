<template>
  <div>
    <k-choose-time
      @changeStart="changeStart"
      @changeEnd="changeEnd"
    ></k-choose-time>
  </div>
</template>

<script setup lang="ts">
const changeStart = (value: string) => {
  console.log(value)
}
interface ITimeResult {
  startTime: string
  endTime: string
}
const changeEnd = (value: ITimeResult) => {
  console.log(value)
}
</script>

<style lang="scss" scoped></style>
