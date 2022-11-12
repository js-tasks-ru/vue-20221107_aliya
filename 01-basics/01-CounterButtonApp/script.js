import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
    name: 'App',
    data() {
        return {
          value_b: 0
        };
      },  
       
    methods:{
      Increase(){
        return this.value_b++;
      }
    }   
});

const app = createApp(App);
const vm = app.mount('#app');