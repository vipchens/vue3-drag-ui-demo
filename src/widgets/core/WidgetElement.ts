import { cloneDeep } from 'lodash'
import { BaseWidget, WidgetPanelConfigItem } from '../../types'

let _id = 1
export class WidgetElement {
  [x: string]: any

  id: number
  name: any
  _children: WidgetElement[]
  panel: WidgetPanelConfigItem[]

  parentElement?: WidgetElement

  constructor(option: BaseWidget) {
    const baseWidget = cloneDeep(option)

    this.id = _id++
    this.name = baseWidget.name
    this._children = []
    this.uiAttrs = baseWidget.uiAttrs
    this.uiEvents = baseWidget.uiEvents
    this.panel = baseWidget.panel

  }

  get children() {
    return this._children
  }

  set children(children: WidgetElement[]) {
    console.log(children, 888);

    children.forEach(child => {
      console.log(child, 'child');

      child.setParentElement(this)
    })
    this._children = children
  }

  setParentElement(parentElement: WidgetElement) {
    this.parentElement = parentElement
  }

  delete() {
    if (this.parentElement) {
      const index = this.parentElement.children.findIndex((item) => item.id === this.id)
      this.parentElement.children.splice(index, 1)
    }
  }
}
