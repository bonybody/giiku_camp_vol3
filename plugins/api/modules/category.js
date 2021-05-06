// ファクトリ
export default function ($fire) {
  const category = new Category($fire)
  return category
}

// クラス定義
class Category {
  constructor (client) {
    this.client = client
  }
}
