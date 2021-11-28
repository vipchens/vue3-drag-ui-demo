export interface WidgetUI {
  props: object
  events: object
}

export interface WidgetPanelConfigItem {
  prop: string
  label: string
  default: any
  type: string
}

export interface BaseWidget {
  name: string
  ui: WidgetUI
  panel: WidgetPanelConfigItem[]
}


export interface WidgetElement {
  id: number
  name: string
  children: object[]
  data: WidgetUI
  panel: WidgetPanelConfigItem[]
}
