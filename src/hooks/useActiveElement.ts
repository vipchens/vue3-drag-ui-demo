import { ref } from "vue";
import { WidgetElement } from "../types";
import useEventBus from './useEventBus';
import HandlerDom from './components/handler.vue'


export default function () {
  let choseClass = ref('')
  const { eventBus } = useEventBus()

  // 监听元素选中事件
  const onChoseElement = (curElement: WidgetElement) => {
    console.log(curElement, 'curElementcurElement2');

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
    emitChoseElement,
    HandlerDom
  }
};
