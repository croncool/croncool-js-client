/* Copyright 2013 - 2024 Waiterio LLC */
import get from './get.js'

export default function getJobs(parameters) {
  let url = 'jobs'

  url += '?' + new URLSearchParams(parameters).toString()

  // console.log('url', url)

  return get({ url, retries: 3 }).catch(error => {
    throw new Error(`Couldn't get jobs \n${error}`)
  })
}
