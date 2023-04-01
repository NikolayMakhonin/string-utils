import * as CssSelect from 'css-select';
import * as domutils from 'domutils';

const _selectors = new Map();
function getSelector(pattern) {
    let selector = _selectors.get(pattern);
    if (!selector) {
        selector = CssSelect.compile(pattern);
        _selectors.set(pattern, selector);
    }
    return selector;
}
function selectAll(parent, selector, minCount, maxCount) {
    const elems = CssSelect.selectAll(getSelector(selector), parent);
    if (minCount != null && elems.length < minCount) {
        throw new Error(`elems.length (${elems.length}) < ${minCount} for: ${selector}`);
    }
    if (maxCount != null && elems.length > maxCount) {
        throw new Error(`elems.length (${elems.length}) > ${minCount} for: ${selector}`);
    }
    return elems;
}
function selectOne(parent, selector) {
    const elems = selectAll(parent, selector, 1, 1);
    return elems[0];
}
function selectOneOrNull(parent, selector) {
    const elems = selectAll(parent, selector, 0, 1);
    return elems.length ? elems[0] : null;
}
function selectFirst(parent, selector) {
    const elem = CssSelect.selectOne(getSelector(selector), parent);
    if (!elem) {
        throw new Error(`elem not found for: ${selector}`);
    }
    return elem;
}
function selectFirstOrNull(parent, selector) {
    const elems = selectAll(parent, selector);
    return elems.length ? elems[0] : null;
}
function innerText(elems, options) {
    if (!elems) {
        return null;
    }
    let text;
    if ((options === null || options === void 0 ? void 0 : options.separator) && Array.isArray(elems)) {
        text = elems.map(elem => domutils.innerText(elems)).join(options === null || options === void 0 ? void 0 : options.separator);
    }
    else {
        text = elems && domutils.innerText(elems);
    }
    if (text != null && (options === null || options === void 0 ? void 0 : options.transform)) {
        text = options === null || options === void 0 ? void 0 : options.transform(text);
    }
    return text;
}
function innerTextNotEmpty(elems, options) {
    const text = innerText(elems, options);
    if (!text) {
        throw new Error('innerText is empty');
    }
    return text;
}

export { getSelector, innerText, innerTextNotEmpty, selectAll, selectFirst, selectFirstOrNull, selectOne, selectOneOrNull };
