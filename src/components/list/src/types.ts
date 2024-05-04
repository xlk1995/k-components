export interface IListItem {
  avatar?: string
  title?: string
  desc?: string
  time?: string
  tag?: string
  tagType?:
    | ''
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
}

export interface IList {
  title: string
  content: IListItem[]
}

export interface IAction {
  text: string
  icon?: string
}
