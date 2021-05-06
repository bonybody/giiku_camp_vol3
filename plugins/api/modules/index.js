import category from '@/plugins/api/modules/category'
export default function ($fire) {
  // リポジトリの作成
  const repository = []
  repository.category = category($fire)
  return repository
}
