/** Default time zone is Local */
export function convertTimeZone(
  date: Date,
  timeZoneFrom?: string | null,
  timeZoneTo?: string | null,
): Date {
  const dateFrom = timeZoneFrom == null
    ? date
    : new Date(
      date.toLocaleString('en-US', {
        timeZone: timeZoneFrom,
      }),
    )

  const dateTo = timeZoneTo == null
    ? date
    : new Date(
      date.toLocaleString('en-US', {
        timeZone: timeZoneTo,
      }),
    )

  const result = new Date(date.getTime() + dateTo.getTime() - dateFrom.getTime())

  return result
}

/** Default timeZone is Local */
export function dateToString(date: Date, timeZone?: string | null): string {
  date = convertTimeZone(date, 'UTC', timeZone)

  const year = date.getUTCFullYear().toString().padStart(4, '0')
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  const day = date.getUTCDate().toString().padStart(2, '0')
  const hours = date.getUTCHours().toString().padStart(2, '0')
  const minutes = date.getUTCMinutes().toString().padStart(2, '0')
  const seconds = date.getUTCSeconds().toString().padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
