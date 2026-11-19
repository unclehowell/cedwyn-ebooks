'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const readerPages = [
  'public/read/index.html',
  'public/cedwyn/index.html',
  'public/index.html',
  'public/fcg/index.html',
  'public/projects/index.html',
  'public/dartboard/index.html',
  'public/tymawr-deaths/index.html',
  'public/tymawr-heritage/index.html',
  'public/recorded-incidents/index.html',
  'public/words-on-the-record/index.html',
  'public/williams-buckler-family/index.html'
];

test('book-keyed modal PDFs use the reader origin before direct PDF.js fetch', () => {
  for (const relativePath of readerPages) {
    const html = fs.readFileSync(path.join(root, relativePath), 'utf8');
    const declaration = html.match(/var BOOK_KEY=\/(.+?)\/;/);
    assert.ok(declaration, `BOOK_KEY validator missing from ${relativePath}`);

    const bookKey = new RegExp(declaration[1]);
    assert.equal(bookKey.test('cedwyn'), true, `bare ID rejected by ${relativePath}`);
    assert.equal(bookKey.test('cedwyn@1.0.0'), true, `versioned ID rejected by ${relativePath}`);
    assert.equal(bookKey.test('../cedwyn'), false, `path traversal accepted by ${relativePath}`);
    assert.equal(bookKey.test('cedwyn@'), false, `empty version accepted by ${relativePath}`);

    assert.equal((html.match(/BOOK_KEY\.test\(gb\)/g) || []).length, 2,
      `modal and standalone reader must use BOOK_KEY in ${relativePath}`);

    const modalKeyRoute = html.indexOf('if(gb&&BOOK_KEY.test(gb)){');
    const directPdfRoute = html.indexOf('else if(sameHost(url))render(box,url);', modalKeyRoute);
    assert.ok(modalKeyRoute >= 0 && directPdfRoute > modalKeyRoute,
      `book-keyed reader iframe must be selected before same-origin PDF.js in ${relativePath}`);
    assert.ok(html.slice(modalKeyRoute, directPdfRoute).includes('VIEWER+encodeURIComponent(gb)'),
      `book-keyed modal must use the ebooks-origin reader in ${relativePath}`);
    assert.match(html, /if\(BOOK_KEY\.test\(gb\)\)render\(vb/);
  }
});
