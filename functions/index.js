const admin = require('firebase-admin')
const api = require('./api')
const yumePost = require('./yumePost')
admin.initializeApp()
module.exports = {
  api: api(),
  yumePost
}
