<template >
  <div class="toasts">  
    <the-toast v-for="notification in notifications" :classToast="notification.classToast" :iconToast="notification.iconToast" :textToast="notification.textToast"/>  
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';
import TheToast from './TheToast.vue';
export default {
  name: 'TheToaster',

  components: { UiIcon, TheToast },
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

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
