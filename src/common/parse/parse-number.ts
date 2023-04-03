export function assertIsFinite(value: number) {
  if (!Number.isFinite(value)) {
    throw new Error(`value is not finite: ${value}`)
  }
  return value
}

export function parseNumberFloat(text: string) {
  const value = parseFloat(text)
  if (!Number.isFinite(value)) {
    throw new Error(`value is not finite: ${text}`)
  }
  return value
}

export function parseNumberInt(text: string) {
  const value = parseInt(text, 10)
  if (!Number.isFinite(value)) {
    throw new Error(`value is not finite: ${text}`)
  }
  return value
}
