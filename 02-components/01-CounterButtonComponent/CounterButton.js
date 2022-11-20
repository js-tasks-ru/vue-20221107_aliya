import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count:{
      type: Number,
      requierd: true,
      default: 0
    }
  },
  emits: ['update:count'] ,

  methods: {
    increase(value) {
      this.$emit('update:count', ++value);
    },
  },
  //
  // Компонент должен иметь входной параметр и порождать событие
  template: `<button type="button"  @click="increase(count)" >{{ count }}</button>`,
});
