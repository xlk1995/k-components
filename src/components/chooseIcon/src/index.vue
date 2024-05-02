<template>
  <div class="k-choose-icon-dialog">
    <el-button type="primary" @click="handleOpenDialog">
      <slot></slot>
    </el-button>
    <el-dialog :title="title" v-model="myVisible">
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
          @click="handleCopy(item)"
        >
          <component
            :is="`el-icon-${toLine(item)}`"
            class="icon"
          ></component>
          <span class="name">{{ item }}</span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import * as ElIcons from '@element-plus/icons'
import { toLine } from '@/utils'
import { useCopy } from '@/hooks'

const props = defineProps<{
  title: string
  visible: boolean
}>()

const myVisible = ref(props.visible)

const emit = defineEmits(['update:visible'])
const handleOpenDialog = () => {
  emit('update:visible', !props.visible)
}
const handleCopy = (text: string) => {
  useCopy(text)
}
watch(
  () => props.visible,
  (val: boolean) => {
    console.log(val)

    myVisible.value = val
  }
)
watch(
  () => myVisible.value,
  (val: boolean) => {
    emit('update:visible', val)
  }
)
</script>

<style lang="scss" scoped>
svg {
  height: 2em;
  width: 2em;
}

.list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .item {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }
}
</style>
