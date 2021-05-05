<template>
  <div>
    <div class="mb-1">
      <app-form-label :for="name" :focus="focusState" :text="label" />
    </div>
    <div>
      <app-text-area
        v-if="type === 'textarea'"
        v-model="inputValue"
        :name="name"
        @focus="focus"
        @blur="blur"
      />
      <app-select
        v-else-if="type === 'select'"
        v-model="inputValue"
        :options="options"
        :name="name"
        @focus="focus"
        @blur="blur"
      />

      <app-input
        v-else
        v-model="inputValue"
        :name="name"
        :type="type"
        @focus="focus"
        @blur="blur"
      />
    </div>
  </div>
</template>

<script>
import AppFormLabel from '@/components/atoms/forms/AppFormLabel'
import AppInput from '@/components/atoms/forms/AppInput'
import AppTextArea from '@/components/atoms/forms/AppTextArea'
import AppSelect from '@/components/atoms/forms/AppSelect'
export default {
  name: 'DefaultInputItem',
  components: { AppSelect, AppTextArea, AppInput, AppFormLabel },
  props: {
    name: {
      type: String,
      default: null,
      require: true
    },
    value: {
      type: [Number, String],
      default: null,
      require: true
    },
    label: {
      type: String,
      default: null,
      require: true
    },
    type: {
      type: String,
      default: 'text',
      require: true
    },
    options: {
      type: Array,
      default () {
        return []
      },
      require: false
    }
  },
  data () {
    return {
      focusState: false
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
  },
  methods: {
    focus () {
      this.focusState = true
    },
    blur () {
      this.focusState = false
    }
  }
}
</script>

<style scoped>

</style>
