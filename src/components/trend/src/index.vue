<template>
  <div class="trend-wrapper">
    <div class="text" :style="{ color: textColor }">
      <span v-if="!defaultSlots">
        {{ text }}
      </span>

      <slot v-else></slot>
    </div>
    <div class="icon">
      <component
        :is="`el-icon-${toLine(upIcon)}`"
        v-if="type === 'up'"
        :style="{
          color: !reverseColor ? upIconColor : '#52c41a'
        }"
      ></component>
      <component
        :is="`el-icon-${toLine(downIcon)}`"
        :style="{
          color: !reverseColor ? downIconColor : '#f5222d'
        }"
        v-else
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { toLine } from '@/utils'

const defaultSlots = useSlots().default

const props = defineProps({
  text: {
    type: String,
    default: '文字'
  },
  type: {
    type: String,
    default: 'up'
  },
  reverseColor: {
    type: Boolean,
    default: false
  },
  upIconColor: {
    type: String,
    default: '#f5222d'
  },
  downIconColor: {
    type: String,
    default: '#52c41a'
  },
  upTextColor: {
    type: String,
    default: '#000000'
  },
  downTextColor: {
    type: String,
    default: '#000000'
  },
  downIcon: {
    type: String,
    default: 'arrowdown'
  },
  upIcon: {
    type: String,
    default: 'arrowup'
  }
})

const textColor = computed(() => {
  return props.type === 'up'
    ? props.upTextColor
    : props.downTextColor
})
</script>

<style lang="scss" scoped>
.trend-wrapper {
  display: flex;
  align-items: center;
  font-size: 12px;
  .icon {
    margin-left: 5px;

    svg {
      height: 0.8em;
      width: 0.8em;
    }
  }
}
</style>
