import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as icons from '@element-plus/icons'
import { toLine } from './utils'
const app = createApp(App)

console.log(icons)
for (let i in icons) {
  app.component(`el-icon-${toLine(i)}`, (icons as any)[i])
}

app.use(router).use(ElementPlus).mount('#app')
