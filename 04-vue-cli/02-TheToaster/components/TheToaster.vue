<template >
  <div class="toasts">  
    <toast v-for="notification in notifications" :classToast="notification.classToast" :iconToast="notification.iconToast" :textToast="notification.textToast"/>  
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';
import Toast from './TheToast.vue';
export default {
  name: 'TheToaster',

  components: { UiIcon, Toast },
  data(){
    return{
      notifications: []
    }
  },

  methods:{
    success(message){      
        
      this.notifications.push(
        { 
          classToast: 'toast_success',
          iconToast: 'check-circle',
          textToast: message
        });

      setTimeout(() => this.notifications.shift(), 5000);
    },
    
    error(message){   
      this.notifications.push(
        { 
          classToast: 'toast_error',
          iconToast: 'alert-circle',
          textToast: message
        });

      setTimeout(() => this.notifications.shift(), 5000);
    } 
   },

};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

</style>
