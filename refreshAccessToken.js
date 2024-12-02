/* Copyright 2013 - 2024 Waiterio LLC */
import {
  getAccessToken,
  isAccessTokenExpired,
  setAccessToken,
} from './accessToken.js'
import getCroncoolUrl from './getCroncoolUrl.js'
import {
  getRefreshToken,
  isRefreshTokenExpired,
  setRefreshToken,
} from './refreshToken.js'

export default async function refreshAccessToken() {
  let accessToken = getAccessToken()

  if (accessToken && isAccessTokenExpired()) {
    if (isRefreshTokenExpired()) {
      if (typeof window !== 'undefined') {
        window.open('/logout')
      }

      throw new Error('refresh token has expired')
    } else {
      let refreshToken = getRefreshToken()

      const url = getCroncoolUrl() + '/api/refresh-access-token'

      let result = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: 'Token ' + btoa(refreshToken),
        },
      })
        .then(response => {
          if (!response.ok) {
            return response.json().then(error => {
              throw error
            })
          } else {
            return response.json()
          }
        })
        .catch(console.log)

      accessToken = result.accessToken
      refreshToken = result.refreshToken

      setAccessToken(accessToken)
      setRefreshToken(refreshToken)
    }
  }

  return accessToken
}
