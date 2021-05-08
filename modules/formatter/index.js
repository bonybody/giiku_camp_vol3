import dayjs from 'dayjs'

export default {
  // firestoreのdoc(スナップショット)をフォーマットする
  firestoreSnapFormat (snap) {
    return {
      doc: snap,
      id: snap.id,
      ...snap.data()
    }
  },

  // firestoreのyume_actionsのdoc(1階層目のみスナップショット)をフォーマットする
  async firestoreYumeFormat (snap) {
    const action = this.firestoreSnapFormat(snap)
    const yume = this.firestoreSnapFormat(await action.yume.get())
    // パラメータの定義
    const actionId = action.id
    const actionDoc = action.doc
    const yumeId = yume.Id
    const yumeDoc = yume.doc
    const title = yume.title
    const text = yume.text
    const category = this.firestoreSnapFormat(await yume.category.get())
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
