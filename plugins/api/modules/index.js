import category from '@/plugins/api/modules/category'
import Formatter from '@/plugins/formatter'
export default function ($fire) {
  // リポジトリの作成
  const repository = []
  repository.category = category($fire, Formatter)
  return repository
}
