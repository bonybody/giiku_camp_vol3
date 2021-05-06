// ファクトリ
export default function ($fire, Formatter) {
  const category = new Category($fire, Formatter)
  return category
}

// クラス定義
class Category {
  constructor ($fire, Formatter) {
    this.client = $fire
    this.db = $fire.firestore
    this.formatter = Formatter
  }

  async getCategories () {
    const res = []
    await this.db.collection('category').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = this.formatter.firestoreDocFormat(doc)
        res.push(data)
      })
    })
    console.log(res)
    return res
  }
}
