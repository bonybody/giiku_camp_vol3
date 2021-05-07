import dayjs from 'dayjs'

export default {
  // firestoreのdoc(スナップショット)をフォーマットする
  firestoreDocFormat (doc) {
    return {
      doc,
      id: doc.id,
      ...doc.data()
    }
  },

  // firestoreのyume_actionsのdoc(1階層目のみスナップショット)をフォーマットする
  async firestoreYumeFormat (doc) {
    const action = this.firestoreDocFormat(doc)
    const yume = this.firestoreDocFormat(await action.yume.get())
    // パラメータの定義
    const actionId = action.id
    const actionDoc = action.doc
    const yumeId = yume.Id
    const yumeDoc = yume.doc
    const title = yume.title
    const text = yume.text
    const category = this.firestoreDocFormat(await yume.category.get())
    const type = action.type
    const isFavorite = action.isFavorite
    const createdAt = action.createdAt.toDate()
    return { actionId, actionDoc, yumeId, yumeDoc, title, text, category, type, isFavorite, createdAt }
  },

  // 日付オブジェクト、または日付形式に則った文字列を日本語に変換する
  dateFormatToJapanese (date) {
    return dayjs(date).format('YYYY/MM/DD')
  }
}
