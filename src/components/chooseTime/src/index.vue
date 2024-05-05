<template>
  <div style="display: flex">
    <el-time-select
      style="margin-right: 20px"
      v-model="startTime"
      :start="startTimeStart"
      :step="startStep"
      :end="startTimeEnd"
      :placeholder="startPlaceholder"
      v-bind="$attrs.startOptions!"
    />
    <el-time-select
      v-model="endTime"
      :min-time="startTime"
      :start="endTimeStart"
      :step="endStep"
      :end="endTimeEnd"
      :placeholder="endPlaceholder"
      :disabled="endTimeDisabled"
      v-bind="$attrs.endOptions!"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useAttrs, watch } from 'vue'
const attrs = useAttrs()
console.log(attrs)

defineProps({
  startPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  startTimeStart: {
    type: String,
    default: '08:30'
  },
  startTimeEnd: {
    type: String,
    default: '24:00'
  },
  startStep: {
    type: String,
    default: '00:30'
  },
  endPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  endTimeStart: {
    type: String,
    default: '08:30'
  },
  endTimeEnd: {
    type: String,
    default: '24:00'
  },
  endStep: {
    type: String,
    default: '00:30'
  }
})

const startTime = ref('')
const endTime = ref('')
const endTimeDisabled = computed(() => {
  return startTime.value ? false : true
})

const emits = defineEmits(['changeStart', 'changeEnd'])

watch(
  () => startTime.value,
  value => {
    if (!value) {
      endTime.value = ''
    } else {
      emits('changeStart', startTime.value)
    }
  }
)

watch(
  () => endTime.value,
  value => {
    if (value) {
      emits('changeEnd', {
        startTime: startTime.value,
        endTime: endTime.value
      })
    }
  }
)
</script>

<style lang="scss" scoped></style>
