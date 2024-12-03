/* Copyright 2013 - 2024 Waiterio LLC */

export function getApiKey() {
  let apiKey

  if (typeof process !== 'undefined') {
    apiKey = process.env.CRONCOOL_API_KEY
  } else if (typeof window !== 'undefined') {
    apiKey = window.CRONCOOL_API_KEY
  }

  return apiKey
}

export function setApiKey(apiKey) {
  if (typeof process !== 'undefined') {
    process.env.CRONCOOL_API_KEY = apiKey
  } else if (typeof window !== 'undefined') {
    window.CRONCOOL_API_KEY = apiKey
  }
}

export const setApiKeyForCroncoolClient = setApiKey
