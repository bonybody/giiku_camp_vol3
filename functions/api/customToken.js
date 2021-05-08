const admin = require('firebase-admin')
const functions = require('firebase-functions')
const express = require('express')
const axios = require('axios')
module.exports = function () {
  const router = express.Router()

  router.get('/custom_token', async (req, res) => {
    const query = req.query
    const accessToken = query.accessToken
    const lineChannelId = functions.config().line.login.channel_id
    const firestore = admin.firestore()
    const firestoreUserDefaultParam = {
      notification: true,
      can_accept_yume_post: true
    }

    const lineAxios = axios.create({
      baseURL: 'https://api.line.me',
      responseType: 'json'
    })

    try {
      // アクセストークンの検証
      const verifyToken = await lineAxios.get('/oauth2/v2.1/verify', {
        params: {
          access_token: accessToken
        }
      })

      // チャネルIDをチェック
      if (verifyToken.data.client_id !== lineChannelId) {
        throw new Error('client_id does not match.')
      }

      // アクセストークンの有効期限
      if (verifyToken.data.expires_in < 0) {
        throw new Error('access token is expired.')
      }

      // uidの取得
      const userProfile = await lineAxios.get('/v2/profile', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })

      // firestoreのusersのドキュメントを作成
      const firestoreUser = await firestore.collection('users').doc(userProfile.data.userId).get()
      if (!firestoreUser.exists) {
        await firestoreUser.ref.set(firestoreUserDefaultParam)
      }

      // カスタムトークンの作成
      const customToken = await admin.auth().createCustomToken(userProfile.data.userId)
      res.send(customToken)
    } catch (e) {
      console.error(e)
    }
  })

  return router
}
