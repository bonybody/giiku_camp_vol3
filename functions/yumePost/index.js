const functions = require('firebase-functions')
const admin = require('firebase-admin')
module.exports = functions.region('asia-northeast1').https.onRequest(async (req, res) => {
  const firestore = admin.firestore()
  const snaps = await firestore.collection('yume').get()
  const length = snaps.size
  const randNum = Math.floor(Math.random() * (length - 1))
  const doc = snaps.docs[randNum]
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.set('Access-Control-Expose-Headers', 'Authorization')
  res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
  res.status(200).send({ doc })
})
