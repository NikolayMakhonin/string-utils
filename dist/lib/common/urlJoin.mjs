const EMPTY_HOST = '0a66b184c2bb4c8fae1d34525c6399a8';
const EMPTY_PATH = '/53d2f4a13de341eda24673cbd677bbd6/';
function urlJoin(...urls) {
    let result = new URL(`http://${EMPTY_HOST}${EMPTY_PATH}`);
    let hasProtocol = false;
    for (let i = 0, len = urls.length; i < len; i++) {
        const url = urls[i];
        if (url) {
            if (typeof url === 'string') {
                if (/^\w+:\/\//.test(url)) {
                    hasProtocol = true;
                }
            }
            result = new URL(url, result);
        }
    }
    const [, search, hash] = result.href.match(/((?:\?[^#+]*)?)((?:#.*)?)$/s);
    if (result.pathname.startsWith(EMPTY_PATH)) {
        return result.pathname.substring(EMPTY_PATH.length)
            + search + hash;
    }
    if (result.host === EMPTY_HOST) {
        return result.pathname + search + hash;
    }
    if (!hasProtocol) {
        return '//' + result.host + result.pathname + search + hash;
    }
    return result.href;
}

export { EMPTY_HOST, EMPTY_PATH, urlJoin };
