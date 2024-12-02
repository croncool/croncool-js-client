/* Copyright 2013 - 2024 Waiterio LLC */
import checkStringNotEmpty from '@multilocale/check/checkStringNotEmpty.js'
import delete_ from './delete_.js'

export default function deleteJobById(jobId) {
  checkStringNotEmpty(jobId)

  let url = `jobs/${jobId}`

  return delete_({ url }).catch(error => {
    throw new Error(`Couldn't delete job\n${error}`)
  })
}
