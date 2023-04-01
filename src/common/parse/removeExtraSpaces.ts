export function removeExtraSpaces(text: string, {
  keepLines,
  noTrim,
}: {
  keepLines?: number
  noTrim?: boolean
} = {}) {
  if (!text) {
    return text
  }

  if (keepLines) {
    text = text.replace(/[^\S\n]+/g, ' ')
    text = text.replace(/[^\S\n]+(?=\n)|(?<=\n)[^\S\n]+/g, '')
    text = text.replace(new RegExp(`(?<=\n{${keepLines}})\n+`, 'g'), '')
  }
  else {
    text = text.replace(/\s+/g, ' ')
  }

  if (!noTrim) {
    text = text.trim()
  }

  return text
}
