<template>
  <button  @click="increase(localCount)">{{ localCount }}</button>
</template>

<script>
export default {
  name: 'CounterButton',
   data() {
    return {
      localCount: this.count,
    };
  },

   props: {
    count:{
      type: Number,
      requierd: true,
      default: 0
    }
  },
  
  emits: ['update:count'] ,
  watch: {
    count: {
      immediate: true,
      handler() {
        if (this.localCount!= this.count) {
          this.localCount = this.count;
        }
      },
    }
  },

  methods: {
    increase(value) {
      value++;
      this.localCount = value;
      this.$emit('update:count', this.localCount);
    },
  },
}
</script>
