export const EMPTY_PROTOCOL = 'af8d84dcb2744318bdba99451742baa5:'
export const EMPTY_HOST = '0a66b184c2bb4c8fae1d34525c6399a8'
export const EMPTY_PATH = '/53d2f4a13de341eda24673cbd677bbd6/'

export function urlJoin(...urls: string[]): string {
  let result: URL = new URL(`${EMPTY_PROTOCOL}//${EMPTY_HOST}${EMPTY_PATH}`)
  for (let i = 0, len = urls.length; i < len; i++) {
    const url = urls[i]
    if (url) {
      result = new URL(url, result)
    }
  }

  const [, search, hash] = result.href.match(/((?:\?[^#+]*)?)((?:#.*)?)$/s)

  if (result.pathname.startsWith(EMPTY_PATH)) {
    return result.pathname.substring(EMPTY_PATH.length)
      + search + hash
  }
  if (result.host === EMPTY_HOST) {
    return result.pathname + search + hash
  }
  if (result.protocol === EMPTY_PROTOCOL) {
    return '//' + result.host + result.pathname + search + hash
  }
  return result.href
}
