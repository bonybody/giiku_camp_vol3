export default class Formatter {
  static firestoreDocFormat (doc) {
    return {
      doc,
      id: doc.id,
      ...doc.data()
    }
  }
}
