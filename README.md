## vue3知识补充


### definedProps 和 definedEmits

```js
defineProps<{
  isCollapse: boolean
}>()


const emit = defineEmits(['update:isCollapse'])
const handleCollapse = () => {
  emit('update:isCollapse', !props.isCollapse)
}
```

```html
<nav-header v-model:isCollapse="isCollapse" />
```

### 组件v-model

如果要使用组件的v-model，需要定义一个prop，并且这个prop的默认值是`modelValue`，同时需要定义一个`update:modelValue`的事件，在组件内部修改`modelValue`的值即可。

如果v-model想要绑定props, 需要copy一份props的值，在组件内部修改这个值。

需要监听两个值，一个是props的值，一个是copy的值。

watch监听props，如果值有变化，则修改copy的值。

watch监听copy的值，如果值有变化，则emit触发。




