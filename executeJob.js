/* Copyright 2013 - 2024 Waiterio LLC */
import checkStringNotEmpty from '@multilocale/check/checkStringNotEmpty.js'
import post from './post.js'

export default function executeJob(jobId) {
  checkStringNotEmpty(jobId)
  return post({ url: `jobs/${jobId}/execute` }).catch(error => {
    throw new Error(`Couldn't execute job ${jobId} \n${error}`)
  })
}
