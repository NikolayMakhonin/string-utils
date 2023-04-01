'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var CssSelect = require('css-select');
var domutils = require('domutils');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var CssSelect__namespace = /*#__PURE__*/_interopNamespace(CssSelect);
var domutils__namespace = /*#__PURE__*/_interopNamespace(domutils);

const _selectors = new Map();
function getSelector(pattern) {
    let selector = _selectors.get(pattern);
    if (!selector) {
        selector = CssSelect__namespace.compile(pattern);
        _selectors.set(pattern, selector);
    }
    return selector;
}
function selectAll(parent, selector, minCount, maxCount) {
    const elems = CssSelect__namespace.selectAll(getSelector(selector), parent);
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
    const elem = CssSelect__namespace.selectOne(getSelector(selector), parent);
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
        text = elems.map(elem => domutils__namespace.innerText(elems)).join(options === null || options === void 0 ? void 0 : options.separator);
    }
    else {
        text = elems && domutils__namespace.innerText(elems);
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

exports.getSelector = getSelector;
exports.innerText = innerText;
exports.innerTextNotEmpty = innerTextNotEmpty;
exports.selectAll = selectAll;
exports.selectFirst = selectFirst;
exports.selectFirstOrNull = selectFirstOrNull;
exports.selectOne = selectOne;
exports.selectOneOrNull = selectOneOrNull;
