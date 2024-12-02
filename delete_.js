/* Copyright 2013 - 2024 Waiterio LLC */
import failureIgnoreNotFoundOrNotModified from './failureIgnoreNotFoundOrNotModified.js'
import http from './http.js'

export default function delete_(config, customFailure) {
  config.method = 'DELETE'

  if (!customFailure) {
    customFailure = failureIgnoreNotFoundOrNotModified
  }

  return http(config, customFailure)
}
