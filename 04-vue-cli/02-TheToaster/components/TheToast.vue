<template >
   <div class="toast" :class="classToast">
      <ui-icon class="toast__icon" :icon="iconToast" />
      <span>{{ textToast }}</span>
    </div>
</template> 

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'TheToast',

  props:{
    classToast:{
      type:String
    },
    iconToast:{
      type:String
    },
    textToast:{
       type:String  
    }
  },

  components: { UiIcon }
};
</script>
