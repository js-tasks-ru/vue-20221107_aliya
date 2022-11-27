<template>
  <div :class="classObject">
    <!-- form-group_inline -->
    <slot>
      <label v-if="label!=''" class="form-group__label">{{label}}</label>
    </slot>
    <!-- CONTENT -->
  </div>
</template>

<script>
export default {
  name: 'UiFormGroup',
  props: {
    inline : {
      type: Boolean,
      default: false,
    },
    label : {
      type: String
    },
  },

  computed: {
  classObject: function () {
    return {
      'form-group_inline': this.inline,
      'form-group': !this.inline
    }
  }
}
};
</script>

<style scoped>
.form-group {
  position: relative;
  margin-bottom: 24px;
}

.form-group.form-group_inline {
  display: inline-block;
  margin-bottom: 0;
}

.form-group.form-group_inline + .form-group.form-group_inline {
  margin-left: 16px;
}

.form-group__label {
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: var(--body-color);
  margin-bottom: 10px;
  display: block;
}
</style>
