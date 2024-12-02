/* Copyright 2013 - 2024 Waiterio LLC */
import get from './get.js'

export default function getProject(projectId) {
  let url = 'projects/' + projectId
  // console.log('url', url)
  return get({ url }).catch(error => {
    throw new Error(`Couldn't get project \n${error}`)
  })
}
