/* Copyright 2013 - 2024 Waiterio LLC */
import put from './put.js'

export default function updateProject(project) {
  return put({ url: `projects/${project._id}`, body: project }).catch(error => {
    throw new Error(`Couldn't update project\n${error}`)
  })
}
