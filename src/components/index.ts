import { App } from 'vue'

import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'

const plugs = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  menu
]

export default {
  install(app: App) {
    plugs.map(item => {
      app.use(item)
    })
  }
}
