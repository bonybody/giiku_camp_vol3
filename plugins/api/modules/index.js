import category from '@/plugins/api/modules/category'
import yume from '@/plugins/api/modules/yume'
import Formatter from '@/plugins/formatter'
export default function ($fire) {
  // リポジトリの作成
  const repository = []
  repository.category = category($fire, Formatter)
  repository.yume = yume($fire, Formatter)
  return repository
}
