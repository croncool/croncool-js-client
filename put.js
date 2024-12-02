/* Copyright 2013 - 2024 Waiterio LLC */
import http from './http.js'

export default function put(config, customFailure) {
  config.method = 'PUT'
  return http(config, customFailure)
}
