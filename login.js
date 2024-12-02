/* Copyright 2013 - 2024 Waiterio LLC */
import post from './post.js'

export default function login(email, password) {
  const headers = {
    Authorization: `Basic ${btoa(email + ':' + password)}`,
  }

  return post({ url: 'login', headers })
}
