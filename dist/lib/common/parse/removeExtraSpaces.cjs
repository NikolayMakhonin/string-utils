'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function removeExtraSpaces(text, { keepLines, noTrim, } = {}) {
    if (!text) {
        return text;
    }
    if (keepLines) {
        text = text.replace(/[^\S\n]+/g, ' ');
        text = text.replace(/[^\S\n]+(?=\n)|(?<=\n)[^\S\n]+/g, '');
        text = text.replace(new RegExp(`(?<=\n{${keepLines}})\n+`, 'g'), '');
    }
    else {
        text = text.replace(/\s+/g, ' ');
    }
    if (!noTrim) {
        text = text.trim();
    }
    return text;
}

exports.removeExtraSpaces = removeExtraSpaces;
