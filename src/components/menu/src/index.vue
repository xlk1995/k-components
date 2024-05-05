<template>
  <div>
    <el-menu
      :default-active="defaultActive"
      :router="router"
      v-bind="$attrs"
      class="el-menu-vertical-demo"
    >
      <template v-for="item in menus" :key="item.index">
        <el-sub-menu
          :index="item.index"
          v-if="item.children && item.children.length"
        >
          <template #title>
            <component
              :is="`el-icon-${toLine(item.icon!)}`"
            ></component>
            <span>{{ item.name }}</span>
          </template>

          <el-menu-item
            v-for="item1 in item.children"
            :index="item1.index"
          >
            <template #title>
              <component
                :is="`el-icon-${toLine(item1.icon!)}`"
              ></component>
              <span>{{ item1.name }}</span>
            </template>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item :index="item.index" v-else>
          <component
            :is="`el-icon-${toLine(item.icon!)}`"
          ></component>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IMenu } from './types'
import { toLine } from '@/utils'
const props = defineProps({
  menus: {
    type: Array as PropType<IMenu[]>,
    required: true
  },
  defaultActive: {
    type: String
  },
  router: {
    type: Boolean,
    default: () => false
  }
})
console.log(props.menus)
</script>

<style lang="scss" scoped>
svg {
  margin-right: 5px;
  height: 1em;
  width: 1em;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
