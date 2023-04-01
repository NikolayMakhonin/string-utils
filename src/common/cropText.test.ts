import {cropText, CropTextOptions} from './cropText'

describe('cropText', function () {
  function test(text: string, maxLength: number, options: CropTextOptions, expected: string) {
    assert.strictEqual(cropText(text, maxLength, options), expected)
    // reverse text, expected and options.cropHead
    assert.strictEqual(
      cropText(text.split('').reverse().join(''), maxLength, {
        ...options,
        cropHead: !options.cropHead,
      }),
      expected.split('').reverse().join(''),
    )
  }

  // The test above but using test() function
  it('base', function () {
    test('1234567890', 5, {}, '1234…')
    test('1234567890', 5, {removeCroppedWord: false}, '1234…')
    test('1234567890', 5, {ellipsis: '...'}, '12...')
    test('1234567890', 5, {ellipsis: '...', removeCroppedWord: false}, '12...')
    test(' 1234567890', 5, {}, ' 123…')
    test('12 34567890', 5, {}, '12…')
    test('12 34567890', 5, {removeCroppedWord: false}, '12 3…')
    test('12 34567890', 5, {ellipsis: '...'}, '12...')
    test('123 4567890', 5, {ellipsis: '...'}, '12...')
    test('1 24567890', 5, {ellipsis: '...'}, '1...')
    test(' 1 2 4 5 6 7 8 9 0', 7, {ellipsis: '...', removeCroppedWord: false}, ' 1 2...')

    test(' 12 45 67 89', 0, {ellipsis: '...'}, '')
    test(' 12 45 67 89', 1, {ellipsis: '...'}, ' ')
    test(' 12 45 67 89', 2, {ellipsis: '...'}, ' 1')
    test(' 12 45 67 89', 3, {ellipsis: '...'}, ' 12')
    test(' 12 45 67 89', 4, {ellipsis: '...'}, ' ...')
    test(' 12 45 67 89', 5, {ellipsis: '...'}, ' 1...')
    test(' 12 45 67 89', 6, {ellipsis: '...'}, ' 12...')
    test(' 12 45 67 89', 7, {ellipsis: '...'}, ' 12...')
    test(' 12 45 67 89', 8, {ellipsis: '...'}, ' 12...')
    test(' 12 45 67 89', 9, {ellipsis: '...'}, ' 12 45...')
    test(' 12 45 67 89', 10, {ellipsis: '...'}, ' 12 45...')
    test(' 12 45 67 89', 11, {ellipsis: '...'}, ' 12 45...')
    test(' 12 45 67 89', 12, {ellipsis: '...'}, ' 12 45 67 89')
  })
})
