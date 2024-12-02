/* Copyright 2013 - 2024 Waiterio LLC */
const checkStringNotEmpty = require('@multilocale/check/checkStringNotEmpty.js')
const get = require('./get.js')

module.exports = function getJobById(jobId) {
  checkStringNotEmpty(jobId)

  let url = `jobs/${jobId}`

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get job\n${error}`)
  })
}
