/* Copyright 2013 - 2024 Waiterio LLC */

let refreshToken = null

export function isRefreshTokenExpired() {
  let isExpired = true

  try {
    if (refreshToken) {
      let payload = JSON.parse(atob(refreshToken.split('.')[1]))
      const now = Math.floor(Date.now() / 1000)

      if (payload.exp > now) {
        isExpired = false
      }
    }
  } catch (error) {
    console.error(error)
  }

  return isExpired
}

export function getRefreshToken() {
  return refreshToken
}

export function setRefreshToken(refreshToken_) {
  refreshToken = refreshToken_
}

export const setRefreshTokenForCroncoolClient = setRefreshToken
