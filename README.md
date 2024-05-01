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