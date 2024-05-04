<template>
  <div class="k-notification__popover">
    <el-popover
      placement="bottom"
      :width="500"
      trigger="click"
    >
      <template #default>
        <slot></slot>
      </template>
      <template #reference>
        <el-badge
          style="cursor: pointer"
          :value="value"
          :max="max"
          :is-dot="isDot"
        >
          <component
            :is="`el-icon-${toLine(icon)}`"
          ></component>
        </el-badge>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { toLine } from '@/utils'
defineProps({
  icon: {
    type: String,
    default: 'Bell'
  },
  value: {
    type: [String, Number],
    default: ''
  },
  max: {
    type: Number
  },
  isDot: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped></style>
