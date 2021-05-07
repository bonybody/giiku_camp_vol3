// ファクトリ
export default function ($fire, Formatter) {
  const user = new User($fire, Formatter)
  return user
}

// クラス定義
class User {
  constructor ($fire, Formatter) {
    this.client = $fire
    this.db = $fire.firestore
    this.formatter = Formatter
  }

  async getUserSettingByUser (user) {
    try {
      const doc = await user.get()
      const data = this.formatter.firestoreDocFormat(doc)
      return data
    } catch (e) {
      console.error(e)
      return false
    }
  }

  async getYumeGroupByUser (user) {
    const data = []
    const actions = await this.db.collection('yume_actions').where('user', '==', user).orderBy('isFavorite', 'desc').orderBy('createdAt', 'desc').get()
    actions.forEach(async (doc) => {
      const yumeData = await this.formatter.firestoreYumeFormat(doc)
      data.push(yumeData)
    })
    return data
  }

  async getYumeTayoriGroupByUser (user) {
    const data = []
    const actions = await this.db.collection('yume_actions').where('user', '==', user).where('type', '==', 'yume_tayori').orderBy('isFavorite', 'desc').orderBy('createdAt', 'desc').get()
    actions.forEach(async (doc) => {
      const yumeData = await this.formatter.firestoreYumeFormat(doc)
      data.push(yumeData)
    })
    return data
  }

  async getYumePostGroupByUser (user) {
    const data = []
    const actions = await this.db.collection('yume_actions').where('user', '==', user).where('type', '==', 'yume_post').orderBy('isFavorite', 'desc').orderBy('createdAt', 'desc').get()
    actions.forEach(async (doc) => {
      const yumeData = await this.formatter.firestoreYumeFormat(doc)
      data.push(yumeData)
    })
    return data
  }

  async editNotificationState (user, state) {
    try {
      const res = await user.update({
        notification: state
      })
      return res
    } catch (e) {
      console.log(e)
      return false
    }
  }

  async addYumeTayori (title, category, text, user) {
    const type = 'yume_tayori'
    try {
      const createdAt = new Date()
      const isFavorite = false
      // yumeコレクションのドキュメントを作成
      const yume = await this.db.collection('yume').add({
        title,
        category,
        text
      })
      // yume_actionコレクションのドキュメントを作成
      const yumeTayoriDoc = await this.db.collection('yume_actions').add({
        type,
        user,
        yume,
        createdAt,
        isFavorite
      })
      return yumeTayoriDoc.id
    } catch (e) {
      console.error(e)
      return false
    }
  }
}
