# Changelog — Great House Farm e-book catalogue

## [0.1.2] - 2026-11-19

### Fixed
- Prefer the dedicated `ebooks.bucklerfamily.estate` reader iframe for all book-keyed modal previews, including apex `/ebooks/api/free` URLs that redirect from `bucklerfamily.estate`. This prevents PDF.js from following the redirect into a cross-origin fetch and keeps the PDF inside the existing modal.
- Retain support for both bare IDs (for example, `cedwyn`) and edition-qualified keys (for example, `cedwyn@1.0.0`) in the modal and standalone reader.

### Validated
- Strengthen the regression test to verify that the book-keyed iframe route runs before the same-origin PDF.js route across all 11 published reader entry points.
- Run the test through GitHub Actions before publishing the `v0.1.2` release.

## [0.1.1] - 2026-11-19

### Fixed
- Accept both bare book IDs (for example, `cedwyn`) and edition-qualified IDs (for example, `cedwyn@1.0.0`) in the PDF modal and standalone reader.
- Apply the same book-key validation to the shelf, all individual book pages and the standalone reader.

### Follow-up
- The bare-ID acceptance fix did not by itself avoid the apex-to-`ebooks.bucklerfamily.estate` redirect when PDF.js fetched `/ebooks/api/free`. Version 0.1.2 corrects that routing order by using the dedicated reader origin for book-keyed modal previews.

### Validated
- Added the initial Node.js regression test and automated SemVer release workflow.

## [0.1.0] - 2026-10-24

### Fixed
- Correct all nine cover-image alt labels that padded the patch component (for example, `v1.0.00`) instead of matching the SemVer values in `public/books.json` (`v1.0.0`).

### Validated
- Checked the nine generated book cards against the nine `books.json` records; cover alt versions now match their catalogue entry.
- The private catalogue/build-box source is not present in this branch. This is a correction to the published HTML and needs to be mirrored into the external generator before the next regeneration.
