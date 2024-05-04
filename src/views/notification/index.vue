<template>
  <div>
    <k-notification :value="50" :max="30">
      <template #default>
        <k-list
          :list="list"
          :actions="actions"
          @clickItem="handleClickItem"
          @clickAction="handleClickAction"
        ></k-list>
      </template>
    </k-notification>
  </div>
</template>

<script setup lang="ts">
import { list, actions } from './data'
const handleClickItem = (val: any) => {
  console.log(val)
}
const handleClickAction = (val: any) => {
  console.log(val)
}
</script>

<style lang="scss" scoped></style>
