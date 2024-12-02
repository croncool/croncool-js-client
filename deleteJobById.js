/* Copyright 2013 - 2024 Waiterio LLC */
const checkStringNotEmpty = require('@multilocale/check/checkStringNotEmpty.js')
const delete_ = require('./delete_.js')

module.exports = function deleteJobById(jobId) {
  checkStringNotEmpty(jobId)

  let url = `jobs/${jobId}`

  return delete_({ url }).catch(error => {
    throw new Error(`Couldn't delete job\n${error}`)
  })
}
