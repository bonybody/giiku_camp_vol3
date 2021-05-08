const functions = require('firebase-functions')
const admin = require('firebase-admin')
const Client = require('@line/bot-sdk').Client

module.exports = functions.pubsub.schedule('8 0 * * *')
  .onRun(async (context) => {
    const firestore = admin.firestore()
    const botConfig = {
      channelSecret: functions.config().line.bot.channel_secret,
      channelAccessToken: functions.config().line.bot.channel_access_token
    }
    const botClient = new Client(botConfig)
    try {
      const usersRef = firestore.collection('users')
      const usersSnap = await usersRef.where('notification', '==', true).get()
      await Promise.all(usersSnap.docs.map(async (snap) => {
        console.log(snap.id)
        return await botClient.pushMessage(snap.id, { type: 'text', text: 'hello, world' })
      }))
    } catch (e) {
      return false
    }
  })
