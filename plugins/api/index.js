import modules from '@/plugins/api/modules'
export default function ({ $fire, $liff, $axios }, inject) {
  const api = modules($fire, $axios)
  inject('api', api)
}
