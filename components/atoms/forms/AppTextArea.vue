<template>
  <textarea
    v-model="inputValue"
    :name="name"
    rows="5"
    placeholder="400文字まで入力できます"
    class="
    inline-block
    w-full
    rounded
    bg-white
    border
    border-gray-300
    p-1
    box-border
    text-base
    focus:border-secondary
    transition-colors"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
  />
</template>

<script>
export default {
  name: 'AppTextArea',
  props: {
    name: {
      type: String,
      default: null
    },
    value: {
      type: [Number, String],
      require: true,
      default: null
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style scoped>

</style>
