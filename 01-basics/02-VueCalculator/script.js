import { createApp,defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
    name: 'App',
    data() {
        return {
            fst_num: 1,
            sec_num: 1,    
            operation: 'init' 
        };
      },  
    methods: {
        calc(operator){
            if( operator == 'sum') {
                return this.fst_num + this.sec_num;
            }
            else if ( operator=='subtract' ){
                return this.fst_num - this.sec_num;
            } 

            else if( operator == 'multiply')   {
                return this.fst_num * this.sec_num;
            }  

            else if( operator == 'divide')   {
                return this.fst_num / this.sec_num;
            }
        }
    } ,

    computed:{        
        output() {
            return this.calc(this.operation);
        }
    }  
});

const app = createApp(App);
const vm = app.mount('#app');
