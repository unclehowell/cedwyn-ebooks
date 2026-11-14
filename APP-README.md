# E-book Shelf — bucklerfamily.estate/ebooks/

Dedicated source repository: `unclehowell/cedwyn-ebooks`. The estate site assembles this app under the apex-domain route `https://bucklerfamily.estate/ebooks/`; do not use the retired `ebooks.bucklerfamily.estate` subdomain.

- `public/index.html` and `public/books.json` are public catalogue outputs. Their private source catalogue and build script (`versions.json` / `build_site.py`) are maintained outside this repository.
- Individual publication pages live below this app route. The RDUQ publication is at `/ebooks/rduq/`; the separate RDUQ research webapp is at `/rduq/`.
- The E-book Shelf links to the existing apex checkout and delivery endpoints at `/ebook/` and `/ebook/api/*`. Product IDs, edition keys and delivery identifiers are stable and must not be renamed as part of a display-title or route change.
- PDFs are not stored in this repository.

## Rights and licence

© Williams–Buckler family. All rights reserved. Licence terms apply.

The content and original code in this repository are not open source. You may read it, link to it and quote it fairly with credit. Any other copying, adaptation or commercial use (books, film, TV, documentary, podcasts, paid articles, AI training) needs a written licence first. Full terms: https://bucklerfamily.estate/licence/ · Apply: https://bucklerfamily.estate/enquire/ · See `public/LICENSE.txt` and `public/NOTICE.txt`. Third-party components keep their own licences.
