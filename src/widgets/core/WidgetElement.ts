import { cloneDeep } from 'lodash'
import { BaseWidget, WidgetUI, WidgetPanelConfigItem } from '../../types'

let _id = 1
export class WidgetElement {

  id: number
  name: any
  children: object[]
  data: WidgetUI
  panel: WidgetPanelConfigItem[]
  constructor(option: BaseWidget) {
    const baseWidget = cloneDeep(option)

    this.id = _id++
    this.name = baseWidget.name
    this.children = []
    this.data = baseWidget.ui
    this.panel = baseWidget.panel
  }

  get cloneData() {
    return cloneDeep(this.data)
  }
}
