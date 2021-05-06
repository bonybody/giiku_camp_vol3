export default class Formatter {
  static firestoreDocFormat (doc) {
    return {
      id: doc,
      ...doc.data()
    }
  }
}
