// ファクトリ
export default function ($fire, Formatter, $axios) {
  const yume = new Yume($fire, Formatter, $axios)
  return yume
}

// クラス定義
class Yume {
  constructor ($fire, Formatter, $axios) {
    this.client = $fire
    this.db = $fire.firestore
    this.formatter = Formatter
    this.axios = $axios
  }

  async getYumeById (id) {
    try {
      const yumeActionDoc = await this.db.collection('yume_actions').doc(id).get()
      const yumeData = await this.formatter.firestoreYumeFormat(yumeActionDoc)
      return yumeData
    } catch (e) {
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
    console.log(actions.docs[0])
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
      return this.formatter.firestoreSnapFormat(res)
    } catch (e) {
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
      return false
    }
  }

  async addYumePost (userDoc) {
    try {
      const res = await this.axios.get('https://asia-northeast1-giiku-camp-vol3.cloudfunctions.net/yumePost')
      const yumeId = res.data.doc._ref._path.segments[1]
      const yume = this.db.collection('yume').doc(yumeId)
      const type = 'yume_post'
      const user = userDoc
      const createdAt = new Date()
      const isFavorite = false
      const actionDoc = await this.db.collection('yume_actions').add({ type, user, yume, createdAt, isFavorite })
      user.update({})
      return actionDoc.id
    } catch (e) {
      console.error(e)
      return false
    }
  }

  async deleteYumeByUserWithType (user, type) {
    try {
      const promiseArray = []
      const actions = await this.db.collection('yume_actions').where('user', '==', user).where('type', '==', type).get()

      actions.forEach((doc) => {
        if (type === 'yume_tayori') {
          promiseArray.push(this.deleteYumePostByYume(doc.data().yume))
          promiseArray.push(doc.data().yume.delete())
        }
        promiseArray.push(doc.ref.delete())
      })
      await Promise.all(promiseArray)
      return true
    } catch (e) {
      return false
    }
  }

  async deleteYumePostByYume (yume) {
    const promiseArray = []
    const actions = await this.db.collection('yume_actions').where('yume', '==', yume).where('type', '==', 'yume_post').get()
    actions.forEach((doc) => {
      promiseArray.push(doc.ref.delete())
    })
    await Promise.all(promiseArray)
    return true
  }
}
