import {removeExtraSpaces} from './removeExtraSpaces'

describe('removeExtraSpaces', () => {
  it('base', function () {
    assert.strictEqual(
      removeExtraSpaces(null),
      null,
    )
    assert.strictEqual(
      removeExtraSpaces(void 0),
      void 0,
    )
    assert.strictEqual(
      removeExtraSpaces(''),
      '',
    )
    assert.strictEqual(
      removeExtraSpaces('\r\n\t '),
      '',
    )
    assert.strictEqual(
      removeExtraSpaces('\r\n\t 1\r\n\t 2\r\n\t '),
      '1 2',
    )
    assert.strictEqual(
      removeExtraSpaces('\r\n\t \r\n\t \r\n\t \r\n\t '
        + '1\r\n\t \r\n\t \r\n\t \r\n\t '
        + '2\r\n\t '
        + '3\r\n\t \r\n\t \r\n\t \r\n\t '
        + '4\r\n\t \r\n\t \r\n\t \r\n\t ', {keepLines: 1}),
      '1\n2\n3\n4',
    )
    assert.strictEqual(
      removeExtraSpaces('\r\n\t \r\n\t \r\n\t \r\n\t '
        + '1\r\n\t \r\n\t \r\n\t \r\n\t '
        + '2\r\n\t '
        + '3\r\n\t \r\n\t \r\n\t \r\n\t '
        + '4\r\n\t \r\n\t \r\n\t \r\n\t ', {keepLines: 2}),
      '1\n\n2\n3\n\n4',
    )
  })
})
