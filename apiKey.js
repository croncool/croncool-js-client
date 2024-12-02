/* Copyright 2013 - 2024 Waiterio LLC */

let apiKey = null

export function getApiKey() {
  return apiKey
}

export function setApiKey(apiKey_) {
  const newApiKey = apiKey_

  if (apiKey !== newApiKey) {
    apiKey = newApiKey
  }
}

export const setApiKeyForCroncoolClient = setApiKey
