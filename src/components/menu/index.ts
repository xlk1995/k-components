import { App } from 'vue'
import menu from './src/index.vue'
import infiniteMenu from './src/menu'

export default {
  install(app: App) {
    app.component('k-menu', menu)
    app.component('k-infinite-menu', infiniteMenu)
  }
}
