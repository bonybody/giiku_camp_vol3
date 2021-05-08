const admin = require('firebase-admin')
admin.initializeApp()
const api = require('./api')
const yumePost = require('./yumePost')
const schedulerJobs = require('./schedulerJobs/index')
module.exports = {
  api: api(),
  yumePost,
  ...schedulerJobs
}
