export type CropTextOptions = {
  ellipsis?: string,
  cropHead?: boolean,
  removeCroppedWord?: boolean,
}

/**
 * Shorten text to maxLength with ellipsis
 * @param text
 * @param maxLength
 */
export function cropText(text: string, maxLength: number, {
  ellipsis = '…',
  cropHead = false,
  removeCroppedWord = true,
}: CropTextOptions = {}) {
  if (text.length > maxLength) {
    if (cropHead) {
      let offset = removeCroppedWord
        ? new RegExp(`(?<=\\s|^)(?=\\S.{0,${maxLength - ellipsis.length - 1}}$)`, 's').exec(text)?.index
        : null

      if (offset == null) {
        offset = text.length - maxLength + ellipsis.length
      }

      if (offset >= text.length) {
        text = text.substring(text.length - maxLength)
      }
      else {
        text = ellipsis + text.substring(offset)
      }
    }
    else {
      let offset = removeCroppedWord
        ? new RegExp(`(^.{0,${maxLength - ellipsis.length - 1}}\\S)(\\s|$)`, 's').exec(text)?.[1].length
        : null

      if (offset == null) {
        offset = maxLength - ellipsis.length
      }

      if (offset <= 0) {
        text = text.substring(0, maxLength)
      }
      else {
        text = text.substring(0, offset) + ellipsis
      }
    }
  }
  return text
}
