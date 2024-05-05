<template>
  <div>
    <k-menu :menus="data" defaultActive="3-1"></k-menu>
    <k-infinite-menu :menus="data1" />
  </div>
</template>

<script setup lang="ts">
import { IMenu } from '@/components/menu/src/types'

const data: IMenu[] = [
  {
    index: '1',
    name: '菜单1',
    icon: 'Document'
  },
  {
    index: '2',
    name: '菜单2',
    icon: 'Document'
  },
  {
    index: '3',
    name: '菜单3',
    icon: 'Document',
    children: [
      {
        index: '3-1',
        name: '菜单3-1',
        icon: 'Document'
      }
    ]
  }
]
const data1: IMenu[] = [
  {
    index: '1',
    name: '菜单1',
    icon: 'Document'
  },
  {
    index: '2',
    name: '菜单2',
    icon: 'Document'
  },
  {
    index: '3',
    name: '菜单3',
    icon: 'Document',
    children: [
      {
        index: '3-1',
        name: '菜单3-1',
        icon: 'Document',
        children: [
          {
            index: '3-1-1',
            name: '菜单3-1-1',
            icon: 'Document',
            children: [
              {
                index: '3-1-1-1',
                name: '菜单3-1-1-1',
                icon: 'Document'
              }
            ]
          }
        ]
      }
    ]
  }
]
</script>

<style lang="scss" scoped></style>
