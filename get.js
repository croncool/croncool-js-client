/* Copyright 2013 - 2024 Waiterio LLC */
import http from './http.js'

export default function get(config, customFailure) {
  config.method = 'GET'
  return http(config, customFailure)
}
