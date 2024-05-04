import { App } from 'vue'

import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'

const plugs = [chooseArea, chooseIcon, trend]

export default {
  install(app: App) {
    plugs.map(item => {
      app.use(item)
    })
  }
}
