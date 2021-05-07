import modules from '@/plugins/api/modules'
export default function ({ $fire, $liff }, inject) {
  const api = modules($fire)
  inject('api', api)
}
