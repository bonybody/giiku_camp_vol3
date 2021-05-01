export default function ({ $fire, $liff }, inject) {
  const auth = new Auth($fire, $liff)
  inject('auth', auth)
}

class Auth {
  constructor (fire, liff) {
    this.fire = fire
    this.liff = liff
  }

  loginByLine () {
    return this.liff.login()
  }

  logout () {
    this.liff.logout()
    this.fire.auth.signOut()
    window.location.href = process.env.clientUrl + '/'
  }

  getUser () {
    return this.fire.auth.currentUser
  }

  loggedIn () {
    return Boolean(this.fire.auth.currentUser)
  }

  getToken () {
    return this.auth.strategy.token.get()
  }
}
