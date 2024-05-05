import { App } from 'vue'

import chooseDate from './src/index.vue'

export default {
  install(app: App) {
    app.component('k-choose-date', chooseDate)
  }
}
