# ebooks.bucklerfamily.estate

Catalogue of the Great House Farm / Tŷ Mawr e-books. This dedicated repository is the source of truth. The public static site is in `public/`; the production site is composed by `unclehowell/bucklerfamily-estate` from this repository's `main` branch and deployed by Cloudflare Pages from the root site's `site` branch. It is not a mirror of the historical `unclehowell/datro` repository.

- `public/index.html` and `public/books.json` contain the public catalogue fields. The private catalogue/build tooling is maintained separately; only public fields are published. No PDF is stored in this repository: free editions are served by the `/api/free` endpoint on `ebooks.bucklerfamily.estate`.
- The root site's split-repository watcher checks whether this repository's `main` is ahead of the last assembled public version and requests a full site build when necessary.
- Theme: the shared Starlink-style theme (Barlow, SIL OFL) from fcg/projects. Language: the shared ghf-lang dropdown (bucklerfamily.estate/ghf-lang/) with this site's dictionary at `public/lang/ebooks.json`.
- Paid book: links to the shop at bucklerfamily.estate/ebook/ (no second checkout here). Other books: coming soon.

## Rights and licence

© Williams–Buckler family. All rights reserved. Licence terms apply.

The content and original code in this repository are not open source. You may read it, link to it and quote it fairly with credit. Any other copying, adaptation or commercial use (books, film, TV, documentary, podcasts, paid articles, AI training) needs a written licence first. Full terms: https://bucklerfamily.estate/licence/ · Apply: https://bucklerfamily.estate/enquire/ · See `public/LICENSE.txt` and `public/NOTICE.txt`. Third-party components keep their own licences.

## UI release 0.1.2 — 2026-11-19

- Route all book-keyed modal previews through the dedicated e-books-origin reader iframe before considering a direct PDF.js fetch. This avoids a cross-origin fetch after the apex `/ebooks/api/free` route redirects to `ebooks.bucklerfamily.estate`.
- Preserve both bare free-edition IDs and versioned edition IDs; extend the regression test to enforce the routing order across all 11 reader entry points.

## UI release 0.1.1 — 2026-11-19

- Accept both bare book IDs (`cedwyn`) and versioned IDs (`cedwyn@1.0.0`) in the modal and standalone reader. Follow-up version 0.1.2 addresses the separate apex-to-reader-origin redirect.

## UI release 0.1.0 — 2026-10-24

- Correct the cover-image alternative text for all nine books to use each catalogue entry's actual semantic version (`MAJOR.MINOR.PATCH`).
- The HTML and public JSON catalogue are in this branch, but the catalogue source/build script is maintained outside this repository. Mirror the same normalization in that build-box source before its next regeneration, or the generated HTML may regress.
