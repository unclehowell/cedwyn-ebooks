# cedwyn-ebooks

Source-of-truth repository for the Tŷ Mawr (Great House) e-book shelf webapp.

## Deployment
- The dedicated repository's `main` branch is authoritative; the public static site is in `public/`.
- Static files are served directly from `public/`; no build command is required for the checked-in site.
- PDF files are not stored in this repository. Free editions are served by the site's `/api/free` endpoint.
- Do not mirror this app back into the historical `unclehowell/datro` repository. The split-repository guard in `.github/workflows/mirror.yml` verifies the authoritative repository manifest.

## Versioning and checks
- `.version` is the app's SemVer version.
- `CHANGELOG.md` records each release. GitHub releases use the matching `vMAJOR.MINOR.PATCH` tag.
- The release workflow runs `node --test tests/pdf-reader-contract.test.js` and creates a GitHub Release when a version change reaches `main`.

Run the PDF-reader regression check locally with:

```sh
node --test tests/pdf-reader-contract.test.js
```
