'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Shorten text to maxLength with ellipsis
 * @param text
 * @param maxLength
 */
function cropText(text, maxLength, { ellipsis = '…', cropHead = false, removeCroppedWord = true, } = {}) {
    var _a, _b;
    if (text.length > maxLength) {
        if (cropHead) {
            let offset = removeCroppedWord
                ? (_a = new RegExp(`(?<=\\s|^)(?=\\S.{0,${maxLength - ellipsis.length - 1}}$)`, 's').exec(text)) === null || _a === void 0 ? void 0 : _a.index
                : null;
            if (offset == null) {
                offset = text.length - maxLength + ellipsis.length;
            }
            if (offset >= text.length) {
                text = text.substring(text.length - maxLength);
            }
            else {
                text = ellipsis + text.substring(offset);
            }
        }
        else {
            let offset = removeCroppedWord
                ? (_b = new RegExp(`(^.{0,${maxLength - ellipsis.length - 1}}\\S)(\\s|$)`, 's').exec(text)) === null || _b === void 0 ? void 0 : _b[1].length
                : null;
            if (offset == null) {
                offset = maxLength - ellipsis.length;
            }
            if (offset <= 0) {
                text = text.substring(0, maxLength);
            }
            else {
                text = text.substring(0, offset) + ellipsis;
            }
        }
    }
    return text;
}

exports.cropText = cropText;
