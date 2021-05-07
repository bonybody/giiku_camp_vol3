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
      const data = this.formatter.firestoreSnapFormat(doc)
      return data
    } catch (e) {
      console.error(e)
      return false
    }
  }

  async editNotificationState (user, state) {
    try {
      const res = await user.update({
        notification: state
      })
      return this.formatter.firestoreSnapFormat(res)
    } catch (e) {
      console.log(e)
      return false
    }
  }
}
