/* Copyright 2013 - 2024 Waiterio LLC */

let token = null

export function getToken() {
  return token
}

export function setToken(token_) {
  token = btoa(token_)
}

export const setTokenForCroncoolClient = setToken
