let _id = 1
export class WidgetElement {
  id: number
  name: any
  children: object[]
  configs: object
  constructor(option: { name: any }) {
    this.id = _id++
    this.name = option.name
    this.children = []
    this.configs = {}
  }

}
