<template>
  <div class="k-list__tabs">
    <el-tabs>
      <el-tab-pane
        v-for="(item, index) in list"
        :key="index"
        :label="item.title"
      >
        <el-scrollbar max-height="300px">
          <div
            v-for="(item1, index1) in item.content"
            :key="index1"
            @click="handleClickItem(item1, index1)"
          >
            <div class="list-item">
              <div class="avatar">
                <el-avatar
                  :src="item1.avatar"
                  v-if="item1.avatar"
                />
              </div>
              <div class="content">
                <div class="title" v-if="item1.title">
                  {{ item1.title }}
                  <template v-if="item1.tag">
                    <el-tag
                      :type="item1.tagType"
                      :key="index1"
                      >{{ item1.tag }}</el-tag
                    >
                  </template>
                </div>
                <div class="desc" v-if="item1.desc">
                  {{ item1.desc }}
                </div>
                <div class="time" v-if="item1.time">
                  {{ item1.time }}
                </div>
              </div>
            </div>
          </div>
          <div class="action">
            <div
              class="a-item"
              v-for="(item, index) in actions"
              :key="index"
              @click="handleClickAction(item, index)"
            >
              <component
                :is="`el-icon-${item.icon}`"
              ></component>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IAction, IList } from './types'

defineProps({
  list: {
    type: Array as PropType<IList[]>,
    required: true,
    default: () => []
  },
  actions: {
    type: Array as PropType<IAction[]>,
    default: () => []
  }
})
const emits = defineEmits(['clickItem', 'clickAction'])
const handleClickItem = (item: any, index: number) => {
  emits('clickItem', { item, index })
}
const handleClickAction = (
  item: IAction,
  index: number
) => {
  emits('clickAction', { item, index })
}
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  &:hover {
    background: #e6f6ff;
  }

  .avatar {
    margin-right: 20px;
  }
  .content {
    flex: 1;
    .desc,
    .title {
      margin-bottom: 5px;
    }
  }
}
.action {
  padding: 12px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #eee;
  .a-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      height: 1em;
      width: 1em;
    }
    div {
      margin-left: 5px;
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>
