<template>
  <select
    :id="name"
    v-model="inputValue"
    :name="name"
    class="
    inline-block
    w-1/2
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
  >
    <template v-for="option in options">
      <option :key="option.id" :value="option" :selected="true">
        {{ option.text }}
      </option>
    </template>
  </select>
</template>

<script>
export default {
  name: 'AppSelect',
  props: {
    options: {
      type: Array,
      default () {
        return []
      },
      require: true
    },
    name: {
      type: String,
      default: null
    },
    value: {
      type: Object,
      require: true,
      default () {
        return {}
      }
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
