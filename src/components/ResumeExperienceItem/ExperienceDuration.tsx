import React from 'react'
import { format } from 'date-fns'

interface Props {
  start: Date
  end?: Date
}

function formatDate(date?: Date) {
  if (!date) return 'present'
  return format(date, 'LLL yyyy')
}

function ExperienceDuration({ start, end }: Props) {
  const text = `${formatDate(start)} –⁠ ${formatDate(end)}`
  return <>{text}</>
}

export default ExperienceDuration
