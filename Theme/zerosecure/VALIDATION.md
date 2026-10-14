# Validation notes

Checked on 14 October 2026 in an isolated, locally running CTFd 3.8.8 instance. No changes were made to the user's running platform or to the public Crimson repository.

## 1. Browser checks

Production and development asset variants were exercised with Chromium 133 and sample CTF data.

- Homepage banner, local pixel font and local body font rendered.
- Login, account registration, team enrolment and team creation worked.
- Challenge list, solved state and challenge dialog rendered.
- Hint unlock and hint display worked.
- Incorrect submissions showed the error state. Correct submissions showed success and updated the solved state.
- Scoreboard and user profile charts rendered with the dark theme.
- Settings and notifications pages rendered.
- Homepage, login, registration, challenges and scoreboard had no horizontal page overflow at 375, 768 and 1280 pixels.
- Desktop pages were also inspected at 1440 pixels.
- Mobile navigation opened and stayed in the page layout.
- No JavaScript exceptions were recorded in the main workflow checks.

## 2. Issues addressed during review

- Removed residual red text glow on the navbar brand and headings.
- Removed remote Google Fonts and Font Awesome stylesheet imports. Included font and icon files are used locally.
- Removed obsolete `js/graphs.js` references from four user/team templates. Graph code is already included in `js/pages/stats.js`.
- Checked public and private user/team charts after removing those references.
- Verified that all 50 development and production asset references found in the templates resolve to packaged files.
- Verified the new canonical CSS/JS files match their development and production copies.
- Checked JavaScript syntax and Git whitespace errors.

## 3. Scope

These checks cover a stock CTFd 3.8.8 installation with the built-in standard challenge type. They do not certify third-party challenge plugins, other CTFd releases or the user's deployment configuration. Email delivery, reverse proxy settings and event rules remain application configuration concerns.

The optional homepage banner is disabled by default. Its links use CTFd's URL generation and respect registration visibility and team mode. It does not change the saved homepage content.

No sample accounts, test flags, database files or test servers are included in the distributable theme.
