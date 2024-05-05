<template>
  <div style="display: flex">
    <el-date-picker
      v-model="startDate!"
      type="date"
      :placeholder="startPlaceholder"
      style="margin-right: 20px"
      :disabled-date="startDisabledDate"
      v-bind="$attrs.startOptions!"
    />
    <el-date-picker
      v-model="endDate!"
      type="date"
      :placeholder="endPlaceholder"
      :disabled="endDisabled"
      :disabled-date="endDisabledDate"
      v-bind="$attrs.endOptions!"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
const props = defineProps({
  startPlaceholder: {
    type: String,
    default: '请选择开始日期'
  },
  endPlaceholder: {
    type: String,
    default: '请选择结束日期'
  },
  disableToday: {
    type: Boolean,
    default: true
  }
})
const startDate = ref<Date | null>(null)
const endDate = ref<Date | null>(null)

const endDisabled = computed(() => {
  return startDate.value ? false : true
})

const startDisabledDate = (time: Date) => {
  if (props.disableToday) {
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 24
  }
}
const endDisabledDate = (time: Date) => {
  if (startDate.value) {
    return (
      time.getTime() <
      startDate!.value!.getTime() + 1000 * 60 * 60 * 24
    )
  }
}
const emits = defineEmits([
  'changeStartDate',
  'changeEndDate'
])

watch(
  () => startDate.value,
  val => {
    if (!val) {
      endDate.value = null
    } else {
      emits('changeStartDate', val)
    }
  }
)

watch(
  () => endDate.value,
  val => {
    if (val) {
      emits('changeEndDate', {
        startDate: startDate.value,
        endDate: endDate.value
      })
    }
  }
)
</script>

<style lang="scss" scoped></style>
