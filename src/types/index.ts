// export interface WidgetUI {
//   attrs: object
//   events: object
// }

export interface WidgetPanelConfigItem {
  prop: string
  label: string
  default: any
  type: string
}

export interface BaseWidget {
  name: string
  uiAttrs: object
  uiEvents: object
  panel: WidgetPanelConfigItem[]
}


export interface WidgetElement {
  id: number
  name: string
  uiAttrs: object
  uiEvents: object
  panel: WidgetPanelConfigItem[]
}
