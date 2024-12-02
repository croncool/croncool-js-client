/* Copyright 2013 - 2024 Waiterio LLC */
const failureIgnoreNotFoundOrNotModified = require('./failureIgnoreNotFoundOrNotModified.js')
const http = require('./http.js')

module.exports = function delete_(config, customFailure) {
  config.method = 'DELETE'

  if (!customFailure) {
    customFailure = failureIgnoreNotFoundOrNotModified
  }

  return http(config, customFailure)
}
