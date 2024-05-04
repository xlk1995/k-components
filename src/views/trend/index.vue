<template>
  <div class="trend-wrapper">
    <k-trend class="item"></k-trend>
    <k-trend reverseColor>yyy </k-trend>
    <k-trend
      type="down"
      downTextColor="#780"
      downIcon="setup"
      >yyy
    </k-trend>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.trend-wrapper {
  display: flex;
  .item {
    margin-right: 10px;
  }
}
</style>
