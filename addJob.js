/* Copyright 2013 - 2024 Waiterio LLC */
import post from './post.js'

export default function addJob(body) {
  return post({ url: 'jobs', body }).catch(error => {
    throw new Error(`Couldn't add job\n${error}`)
  })
}
