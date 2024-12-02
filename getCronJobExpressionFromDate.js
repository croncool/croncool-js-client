/* Copyright 2013 - 2024 Waiterio LLC */

const getCronJobExpressionFromDate = dateISO => {
  let date = new Date(dateISO)

  const minutes = date.getUTCMinutes()
  const hours = date.getUTCHours()
  const dayOfMonth = date.getUTCDate()
  const month = date.getUTCMonth() + 1
  const year = date.getUTCFullYear()

  let expression = `cron(${minutes} ${hours} ${dayOfMonth} ${month} ? ${year})`

  return expression
}

export default getCronJobExpressionFromDate
