<template>
  <input
    :id="name"
    v-model="inputValue"
    :type="type"
    :name="name"
    :class="[isState ? 'border-red-500' : 'border-gray-300']"
    class="
    inline-block
    w-1/2
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
  >
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
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
