import liff from '@line/liff'

const liffId = process.env.liffId
const functionsUrl = process.env.functionsUrl
export default async function ({ $fire, $axios }, inject) {
  try {
    // liffの初期化
    await liff.init({ liffId })
    if (!liff.isLoggedIn()) {
      liff.login()
    }
    // contextに$liffとして注入
    inject('liff', liff)
    // liffの認証情報を用いてfirebaseにログイン
    if (liff.isLoggedIn() && !$fire.auth.isLoggedIn) {
      // liffのアクセストークンを取得
      const accessToken = await liff.getAccessToken()
      // customToken取得用のURIを作成
      const baseUrl = functionsUrl + '/api/custom_token'
      const query = `?accessToken=${accessToken}`
      const getTokenUrl = encodeURI(baseUrl + query)
      // customTokenを作成
      // eslint-disable-next-line no-unused-vars
      const customToken = await $axios.$get(getTokenUrl)
      // customTokenを使ってfirebaseにログイン
      await $fire.auth.signInWithCustomToken(customToken)
    }
  } catch (e) {
    console.error(e)
  }
}
