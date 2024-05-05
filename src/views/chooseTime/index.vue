<template>
  <div>
    <k-choose-time
      @changeStart="changeStart"
      @changeEnd="changeEnd"
    ></k-choose-time>

    <k-choose-date
      @changeStartDate="changeStart"
      @changeEndDate="changeEnd"
    ></k-choose-date>
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
