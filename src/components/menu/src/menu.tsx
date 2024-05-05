import { PropType, defineComponent, useAttrs } from 'vue'
import { IMenu } from './types'
import { toLine } from '@/utils'
export default defineComponent({
  props: {
    menus: {
      type: Array as PropType<IMenu[]>,
      required: true
    },
    defaultActive: {
      type: String
    },
    router: {
      type: Boolean,
      default: () => false
    }
  },
  setup(props) {
    console.log(props)

    const renderMenu = (data: IMenu[]) => {
      return data.map((item, index) => {
        // 获取icon
        item.i = `el-icon-${toLine(item.icon!)}`
        const slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item.name}</span>
              </>
            )
          }
        }

        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        }
        return (
          <el-menu-item index={item.index}>
            <item.i />
            <span>{item.name}</span>
          </el-menu-item>
        )
      })
    }

    console.log(renderMenu(props.menus))

    const attrs = useAttrs()
    return () => {
      return (
        <el-menu
          default-active={props.defaultActive}
          router={props.router}
          {...attrs}
        >
          {renderMenu(props.menus)}
        </el-menu>
      )
    }
  }
})
