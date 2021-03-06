import RowWidget from './row.vue'

export const ui = {
  props: {
    span: 4,
    offset: 0,
    push: 0,
    pull: 0,
  },
  event: {}
}

export const panel = [
  {
    prop: 'span',
    label: '栅格占据的列数',
    default: 4,
    type: 'number'
  },
  {
    prop: 'offset',
    label: '栅格左侧的间隔格数',
    default: 0,
    type: 'number'
  },
  {
    prop: 'push',
    label: '栅格向右移动格数',
    default: 0,
    type: 'number'
  },
  {
    prop: 'pull',
    label: '栅格向左移动格数',
    default: 0,
    type: 'number'
  },
]


export default {
  name: 'RowWidget',
  title: 'Row',
  icon: 'icon-column-vertical',
  ui,
  panel,
  component: RowWidget
}
