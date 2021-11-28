import { ref } from "vue";
import { WidgetElement } from "../types";
import useEventBus from './useEventBus';


export default function () {
  let choseClass = ref('')
  const { eventBus } = useEventBus()

  // 监听元素选中事件
  const onChoseElement = (curElement: WidgetElement) => {
    // 选中元素时
    eventBus.on('choseElement', (choseElement: WidgetElement) => {
      choseClass.value = choseElement.id === curElement.id ? 'chose-element' : ''
    })
  }

  // 选中元素时
  const emitChoseElement = (choseElement: WidgetElement) => {
    console.log(choseElement, 'xx');

    eventBus.emit('choseElement', choseElement)
  }

  return {
    choseClass,
    onChoseElement,
    emitChoseElement
  }
};
