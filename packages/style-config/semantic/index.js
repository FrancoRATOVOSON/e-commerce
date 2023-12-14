const error = require('./error')
const success = require('./success')
const warning = require('./warning')
const infos = require('./infos')

module.exports = {
  ...error,
  ...success,
  ...warning,
  ...infos
}