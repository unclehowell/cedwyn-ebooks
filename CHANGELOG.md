# Changelog — Great House Farm e-book catalogue

## [0.1.1] - 2026-11-19

### Fixed
- Accept both bare book IDs (for example, `cedwyn`) and edition-qualified IDs (for example, `cedwyn@1.0.0`) in the PDF modal and standalone reader. The unversioned free-edition link now opens the in-modal reader instead of being rejected before the reader loads.
- Apply the same book-key validation to the shelf, all individual book pages and the standalone reader.

### Validated
- Added a Node.js regression test covering every published PDF-reader entry point.
- Added a GitHub Actions release workflow: it runs the reader contract test and creates the matching `v0.1.1` GitHub Release from the versioned changelog after the change reaches `main`.

## [0.1.0] - 2026-10-24

### Fixed
- Correct all nine cover-image alt labels that padded the patch component (for example, `v1.0.00`) instead of matching the SemVer values in `public/books.json` (`v1.0.0`).

### Validated
- Checked the nine generated book cards against the nine `books.json` records; cover alt versions now match their catalogue entry.
- The private catalogue/build-box source is not present in this branch. This is a correction to the published HTML and needs to be mirrored into the external generator before the next regeneration.
