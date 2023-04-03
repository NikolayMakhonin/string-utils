'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function assertIsFinite(value) {
    if (!Number.isFinite(value)) {
        throw new Error(`value is not finite: ${value}`);
    }
    return value;
}
function parseNumberFloat(text) {
    const value = parseFloat(text);
    if (!Number.isFinite(value)) {
        throw new Error(`value is not finite: ${text}`);
    }
    return value;
}
function parseNumberInt(text) {
    const value = parseInt(text, 10);
    if (!Number.isFinite(value)) {
        throw new Error(`value is not finite: ${text}`);
    }
    return value;
}

exports.assertIsFinite = assertIsFinite;
exports.parseNumberFloat = parseNumberFloat;
exports.parseNumberInt = parseNumberInt;
