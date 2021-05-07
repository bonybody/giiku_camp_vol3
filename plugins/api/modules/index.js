import category from '@/plugins/api/modules/category'
import yume from '@/plugins/api/modules/yume'
import Formatter from '@/modules/formatter'
import user from '@/plugins/api/modules/user'
export default function ($fire) {
  // リポジトリの作成
  const repository = []
  repository.category = category($fire, Formatter)
  repository.yume = yume($fire, Formatter)
  repository.user = user($fire, Formatter)
  return repository
}
