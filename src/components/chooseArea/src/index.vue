<template>
  <div class="k-choose-area">
    <el-select
      v-model="province"
      placeholder="请选择省份"
      @change="handleChangeProvince"
      clearable
    >
      <el-option
        v-for="item in provinceOptions"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      v-model="city"
      placeholder="请选择市"
      :disabled="!province"
      @change="handleChangeCity"
      clearable
    >
      <el-option
        v-for="item in cityOptions"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      v-model="area"
      placeholder="请选择区域"
      :disabled="!city"
      @change="handleChangeArea"
      clearable
    >
      <el-option
        v-for="item in areaOptions"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import allAreas from '../lib/area.json'

type Data = {
  code: string
  name: string
}

// type areaItem = {
//   code: string
//   name: string
//   children: areaItem
// }
const province = ref<string>('')
const city = ref<string>('')
const area = ref<string>('')
// 下拉选择
const provinceOptions = ref(allAreas)

const cityOptions = computed(() => {
  if (!province.value) {
    return []
  }
  const cities = allAreas.find(
    item => item.code === province.value
  )?.children
  return cities
})
console.log(cityOptions.value)

const areaOptions = computed(() => {
  if (!city.value) {
    return []
  }
  const areas = cityOptions.value?.find(
    item => item.code === city.value
  )?.children
  return areas
})

// 方法
const handleChangeProvince = () => {
  city.value = ''
  area.value = ''
}
const handleChangeCity = () => {
  area.value = ''
}

const emits = defineEmits(['change'])
const handleChangeArea = () => {
  if (province.value && city.value && area.value) {
    // 传递的值
    const provinceData: Data = {
      code: province.value,
      name: provinceOptions.value.find(
        item => item.code === province.value
      )?.name!
    }

    const cityData: Data = {
      code: city.value,
      name: cityOptions!.value!.find(
        item => item.code === city.value
      )?.name!
    }
    const areaData: Data = {
      code: area.value,
      name: areaOptions!.value!.find(
        item => item.code === area.value
      )?.name!
    }
    emits('change', {
      provinceData,
      cityData,
      areaData
    })
  }
}
</script>

<style lang="scss" scoped>
.k-choose-area {
  display: flex;
}
.el-select {
  margin-right: 50px;
}
</style>
