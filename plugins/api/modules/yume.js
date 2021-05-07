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

  async getYumeById (id) {
    try {
      const yumeActionDoc = await this.db.collection('yume_actions').doc(id).get()
      const yumeData = await this.formatter.firestoreYumeFormat(yumeActionDoc)
      return yumeData
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

  async editYumeIsFavorite (id, state) {
    try {
      const res = await this.db.collection('yume_actions').doc(id).update({
        isFavorite: state
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

  async deleteYumeByUserWithType (user, type) {
    try {
      const actions = await this.db.collection('yume_actions').where('user', '==', user).where('type', '==', type).get()
      actions.forEach(async (doc) => {
        if (type === 'yume_tayori') {
          await doc.data().yume.delete()
        }
        await doc.ref.delete()
      })
      return true
    } catch (e) {
      return false
    }
  }
}
