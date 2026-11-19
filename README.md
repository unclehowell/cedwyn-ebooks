# cedwyn-ebooks

Canonical source repository for the Tŷ Mawr (Great House) e-book shelf webapp.

## Deployment
- The `main` branch in this dedicated repository is authoritative; the app's public static files are in `public/`.
- The production site is composed by `unclehowell/bucklerfamily-estate`: its split-repository assembler reads this repository's `public/` tree, publishes it at `/ebooks/`, and commits the composed site to that repository's `site` branch.
- The Cloudflare Pages project `cedwyn` serves the composed site from `bucklerfamily-estate:site`. Do not connect Pages directly to this repository or mirror the app into the historical `datro` repository.
- PDF files are not stored here. Free editions are served by the site's `/api/free` endpoint on `ebooks.bucklerfamily.estate`.
- The root site's `split-repo-watch` workflow compares this repository's `main` with the live assembly stamp and asks for a full site rebuild when this app is ahead.

## Versioning and checks
- `.version` is the app's SemVer version.
- `CHANGELOG.md` records each release. GitHub releases use the matching `vMAJOR.MINOR.PATCH` tag.
- The release workflow runs `node --test tests/pdf-reader-contract.test.js` and creates a GitHub Release after a versioned change reaches `main`.

Run the PDF-reader regression check locally with:

```sh
node --test tests/pdf-reader-contract.test.js
```
