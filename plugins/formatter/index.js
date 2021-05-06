export default class Formatter {
  static firestoreDocFormat (doc) {
    return {
      id: doc.id,
      ...doc.data()
    }
  }
}
