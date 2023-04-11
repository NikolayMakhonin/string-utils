import { urlJoin } from './urlJoin'

describe('src > -helpers > urlJoin', function () {
  this.timeout(300000)

  it('sync', function () {
    assert.strictEqual(urlJoin(void 0), '')
    assert.strictEqual(urlJoin(null), '')
    assert.strictEqual(urlJoin(void 0, 'protocol2://host2/path2/?search2#hash2'), 'protocol2://host2/path2/?search2#hash2')
    assert.strictEqual(urlJoin(void 0, '//host2/path2/?search2#hash2'), '//host2/path2/?search2#hash2')
    assert.strictEqual(urlJoin(void 0, '/host2/path2/?search2#hash2'), '/host2/path2/?search2#hash2')
    assert.strictEqual(urlJoin(void 0, '/path2/?search2#hash2'), '/path2/?search2#hash2')
    assert.strictEqual(urlJoin(void 0, '?search2#hash2'), '?search2#hash2')
    assert.strictEqual(urlJoin(void 0, 'search2#hash2'), 'search2#hash2')
    assert.strictEqual(urlJoin(void 0, '#hash2'), '#hash2')
    assert.strictEqual(urlJoin(void 0, 'path2'), 'path2')
    assert.strictEqual(urlJoin(void 0, ''), '')
    assert.strictEqual(urlJoin(void 0, '#'), '#')

    assert.strictEqual(urlJoin(''), '')
    assert.strictEqual(urlJoin('#'), '#')
    assert.strictEqual(urlJoin('?'), '?')
    assert.strictEqual(urlJoin('##'), '##')
    assert.strictEqual(urlJoin('??'), '??')
    assert.strictEqual(urlJoin('?#'), '?#')
    assert.strictEqual(urlJoin('??##'), '??##')
    assert.strictEqual(urlJoin('#hash'), '#hash')
    assert.strictEqual(urlJoin('##hash'), '##hash')
    assert.strictEqual(urlJoin('?search'), '?search')
    assert.strictEqual(urlJoin('??search'), '??search')
    assert.strictEqual(urlJoin('??search##hash'), '??search##hash')
    assert.strictEqual(urlJoin('?search#hash'), '?search#hash')

    assert.strictEqual(urlJoin('path'), 'path')
    assert.strictEqual(urlJoin('path/'), 'path/')
    assert.strictEqual(urlJoin('path/?search'), 'path/?search')
    assert.strictEqual(urlJoin('path/?search#hash'), 'path/?search#hash')

    assert.strictEqual(urlJoin('/path'), '/path')
    assert.strictEqual(urlJoin('/path/'), '/path/')
    assert.strictEqual(urlJoin('/path/?search'), '/path/?search')
    assert.strictEqual(urlJoin('/path/?search#hash'), '/path/?search#hash')

    assert.strictEqual(urlJoin('//host'), '//host/')
    assert.strictEqual(urlJoin('//host/'), '//host/')
    assert.strictEqual(urlJoin('//host/?search'), '//host/?search')
    assert.strictEqual(urlJoin('//host/?search#hash'), '//host/?search#hash')

    assert.strictEqual(urlJoin('//host/path'), '//host/path')
    assert.strictEqual(urlJoin('//host/path/'), '//host/path/')
    assert.strictEqual(urlJoin('//host/path/?search'), '//host/path/?search')
    assert.strictEqual(urlJoin('//host/path/?search#hash'), '//host/path/?search#hash')

    assert.strictEqual(urlJoin('protocol://host/path'), 'protocol://host/path')
    assert.strictEqual(urlJoin('protocol://host/path/'), 'protocol://host/path/')
    assert.strictEqual(urlJoin('protocol://host/path/?search'), 'protocol://host/path/?search')
    assert.strictEqual(urlJoin('protocol://host/path/?search#hash'), 'protocol://host/path/?search#hash')
    assert.strictEqual(urlJoin(
      'protocol1://host1/path1/?search1#hash1',
      'protocol2://host2/path2/?search2#hash2',
    ), 'protocol2://host2/path2/?search2#hash2')
    assert.strictEqual(urlJoin(
      'protocol1://host1/path1/?search1#hash1',
      '//host2/path2/?search2#hash2',
    ), 'protocol1://host2/path2/?search2#hash2')
    assert.strictEqual(urlJoin(
      'protocol1://host1/path1/?search1#hash1',
      '/path2/?search2#hash2',
    ), 'protocol1://host1/path2/?search2#hash2')
    assert.strictEqual(urlJoin(
      'protocol1://host1/path1/?search1#hash1',
      'path2/?search2#hash2',
    ), 'protocol1://host1/path1/path2/?search2#hash2')
    assert.strictEqual(urlJoin(
      'protocol1://host1/path1/?search1#hash1',
      '?search2#hash2',
    ), 'protocol1://host1/path1/?search2#hash2')
    assert.strictEqual(urlJoin(
      'protocol1://host1/path1/?search1#hash1',
      '#hash2',
    ), 'protocol1://host1/path1/?search1#hash2')
    assert.strictEqual(urlJoin(
      'protocol1://host1/path1/?search1#hash1',
      '',
    ), 'protocol1://host1/path1/?search1#hash1')
  })
})
