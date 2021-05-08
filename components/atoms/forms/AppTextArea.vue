<template>
  <textarea
    v-model="inputValue"
    :name="name"
    rows="5"
    maxlength="400"
    placeholder="400文字まで入力できます"
    :class="[isState ? 'border-red-500' : 'border-gray-300']"
    class="
    inline-block
    w-full
    rounded
    bg-white
    border
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
    },
    isState: {
      type: Boolean,
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
