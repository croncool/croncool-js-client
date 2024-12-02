/* Copyright 2013 - 2024 Waiterio LLC */
const post = require('./post.js')

module.exports = function addJob(body) {
  return post({ url: 'jobs', body }).catch(error => {
    throw new Error(`Couldn't add job\n${error}`)
  })
}
