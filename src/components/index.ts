import { App } from 'vue'

import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'

const plugs = [chooseArea, chooseIcon]

export default {
  install(app: App) {
    plugs.map(item => {
      app.use(item)
    })
  }
}
