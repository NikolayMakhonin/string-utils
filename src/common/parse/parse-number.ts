export function assertIsFinite(value: number) {
  if (!Number.isFinite(value)) {
    throw new Error(`value is not finite: ${value}`)
  }
  return value
}

export function parseNumberFloat(text: string) {
  return assertIsFinite(parseFloat(text))
}

export function parseNumberInt(text: string) {
  return assertIsFinite(parseInt(text, 10))
}
