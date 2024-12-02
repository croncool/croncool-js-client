/* Copyright 2013 - 2024 Waiterio LLC */
import checkStringNotEmpty from '@multilocale/check/checkStringNotEmpty.js'
import get from './get.js'

export default function getJobById(jobId) {
  checkStringNotEmpty(jobId)

  let url = `jobs/${jobId}`

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get job\n${error}`)
  })
}
