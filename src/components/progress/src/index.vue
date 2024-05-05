<template>
  <el-progress
    :percentage="p"
    :duration="duration"
    v-bind="$attrs"
  ></el-progress>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  percentage: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 3000
  },
  isAnimation: {
    type: Boolean,
    default: false
  }
})
let p = ref(0)
if (props.isAnimation) {
  let timer = setInterval(() => {
    p.value += Math.ceil(
      (props.percentage / props.duration) * 1000
    )
    if (p.value >= props.percentage) {
      p.value = props.percentage
      clearInterval(timer)
    }
  }, 1000)
} else {
  p.value = props.percentage
}
</script>

<style lang="scss" scoped></style>
