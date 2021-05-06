// ファクトリ
export default function ($fire, Formatter) {
  const yume = new Yume($fire, Formatter)
  return yume
}

// クラス定義
class Yume {
  constructor ($fire, Formatter) {
    this.client = $fire
    this.db = $fire.firestore
    this.formatter = Formatter
  }

  async addYumeTayori (title, category, text, user) {
    try {
      const createdAt = new Date()
      // yumeコレクションのドキュメントを作成
      const yume = await this.db.collection('yume').add({ title, category, text })
      // yume_tayoriコレクションのドキュメントを作成
      const yumeTayoriDoc = await this.db.collection('yume_tayori').add({ user, yume, createdAt })
      return yumeTayoriDoc.id
    } catch (e) {
      console.error(e)
      return false
    }
  }
}
