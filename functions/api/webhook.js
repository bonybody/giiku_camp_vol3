const admin = require('firebase-admin')
const functions = require('firebase-functions')
const express = require('express')
const line = require('@line/bot-sdk')

module.exports = function () {
  const router = express.Router()
  const firestore = admin.firestore()
  const botConfig = {
    channelSecret: functions.config().line.bot.channel_secret,
    channelAccessToken: functions.config().line.bot.channel_access_token
  }
  const client = new line.Client(botConfig)
  const siteUrl = 'https://liff.line.me/1655945176-YG6ZOPrV'

  router.post('/webhook', line.middleware(botConfig), async (req, res) => {
    const events = req.body.events
    try {
      await Promise.all(events.map(async (theEvent) => {
        return await handleEvent(theEvent)
      }))
      res.send(200)
    } catch (e) {
      console.error(e)
    }
  })

  return router

  async function handleEvent (theEvent) {
    if (theEvent.type !== 'message') {
      return false
    }
    const message = theEvent.message
    const source = theEvent.source
    const userRef = firestore.collection('users').doc(source.userId)
    switch (message.text) {
      case 'お気に入り':
        return await pushFavoriteMessage(userRef, theEvent)
      default:
        return false
    }
  }

  async function pushFavoriteMessage (userRef, theEvent) {
    const yumeActions = await firestore.collection('yume_actions').where('user', '==', userRef).where('isFavorite', '==', true).limit(5).get()
    const columns = await Promise.all(yumeActions.docs.map(async (snap) => {
      const yume = await snap.data().yume.get()
      const category = await yume.data().category.get()
      const image = snap.data().type === 'yume_tayori'
        ? 'https://giiku-camp-vol3.vercel.app/yume-tayori.png'
        : 'https://giiku-camp-vol3.vercel.app/yume-post.png'
      return createYumeColumn(yume.data().title, category.data().text, siteUrl + '/yume_kioku/' + snap.id, image)
    }))
    if (columns.length === 0) {
      return true
    }
    return await client.replyMessage(theEvent.replyToken,
      [
        {
          type: 'template',
          altText: 'お気に入りのユメ',
          template: {
            type: 'carousel',
            columns
          }
        }
      ]
    )
  }

  function createYumeColumn (title, text, url, image) {
    return {
      thumbnailImageUrl: image,
      imageBackgroundColor: '#FFFFFF',
      title,
      text,
      defaultAction: {
        type: 'uri',
        label: '詳細',
        uri: url
      },
      actions: [
        {
          type: 'uri',
          label: '詳細',
          uri: url
        }
      ]
    }
  }
}
