# ebooks.bucklerfamily.estate

Catalogue of the Great House Farm / Tŷ Mawr e-books. Static site; this dedicated repository is the source of truth, with the deployable site in `public/`, no build command. The authoritative split manifest confirms repository-based deployment; this app is not a mirror of the historical `unclehowell/datro` branch.

- `public/index.html` and `public/books.json` contain the public catalogue fields. The private catalogue/build tooling is maintained separately; only public fields are published. No PDF is stored in this repository: the site's `/api/free` endpoint serves the files.
- Theme: the shared Starlink-style theme (Barlow, SIL OFL) from fcg/projects. Language: the shared ghf-lang dropdown (bucklerfamily.estate/ghf-lang/) with this site's dictionary at `public/lang/ebooks.json`.
- Paid book: links to the shop at bucklerfamily.estate/ebook/ (no second checkout here). Other books: coming soon.

## Rights and licence

© Williams–Buckler family. All rights reserved. Licence terms apply.

The content and original code in this repository are not open source. You may read it, link to it and quote it fairly with credit. Any other copying, adaptation or commercial use (books, film, TV, documentary, podcasts, paid articles, AI training) needs a written licence first. Full terms: https://bucklerfamily.estate/licence/ · Apply: https://bucklerfamily.estate/enquire/ · See `public/LICENSE.txt` and `public/NOTICE.txt`. Third-party components keep their own licences.

## UI release 0.1.1 — 2026-11-19

- Fix the PDF modal and standalone reader so both bare book IDs (`cedwyn`) and versioned IDs (`cedwyn@1.0.0`) are accepted. This restores the cross-origin modal route for the free Cedwyn edition.
- Update every page carrying the shared reader code and add a regression check plus automated SemVer GitHub release workflow.

## UI release 0.1.0 — 2026-10-24

- Correct the cover-image alternative text for all nine books to use each catalogue entry's actual semantic version (`MAJOR.MINOR.PATCH`).
- The HTML and public JSON catalogue are in this branch, but the catalogue source/build script is maintained outside this repository. Mirror the same normalization in that build-box source before the next regeneration, or the generated HTML may regress.
