function assertIsFinite(value) {
    if (!Number.isFinite(value)) {
        throw new Error(`value is not finite: ${value}`);
    }
    return value;
}
function parseNumberFloat(text) {
    return assertIsFinite(parseFloat(text));
}
function parseNumberInt(text) {
    return assertIsFinite(parseInt(text, 10));
}

export { assertIsFinite, parseNumberFloat, parseNumberInt };
