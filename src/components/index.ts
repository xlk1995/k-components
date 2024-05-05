import { App } from 'vue'

import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'
import progress from './progress'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'

const plugs = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  menu,
  progress,
  chooseTime,
  chooseDate
]

export default {
  install(app: App) {
    plugs.map(item => {
      app.use(item)
    })
  }
}
