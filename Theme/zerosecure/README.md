# ZeroSecure 2.0 for CTFd

A green, black and white adaptation of [0xdevsachin's Crimson theme](https://github.com/0xdevsachin/CTFD-crimson-theme), based on the supplied ZeroSecure event poster.

## 1. What changed

- Neon green `#55F12B`, near black `#050805`, white `#F4F7F2` and muted green text.
- Press Start 2P for the pixel headings. This is a close visual match, not a verified identification of the poster font.
- Space Grotesk for readable forms, descriptions and navigation.
- Locally bundled fonts and icons. No Google Fonts or Font Awesome CDN requests are needed.
- Consistent styling across login, registration, teams, challenges, dialogs, tables, settings and notifications.
- Dark scoreboard and profile charts with readable labels. Multiple chart series keep distinct colours.
- Responsive challenge grids, mobile navigation, keyboard focus and reduced motion support.
- An optional event banner for the homepage.

The package keeps CTFd's existing accounts, team workflow, challenge APIs and flag submission logic. Installing it does not create challenges, reset scores or change registration and email settings. The public GitHub repository has not been modified.

## 2. Install

Extract the ZIP. The theme folder is named `zerosecure`.

Copy that folder into the CTFd application's `CTFd/themes/` directory. A typical source checkout should contain:

```text
CTFd/CTFd/themes/zerosecure/templates/base.html
CTFd/CTFd/themes/zerosecure/static/css/zerosecure.min.css
```

If your Docker Compose setup already mounts the CTFd source directory at `/opt/CTFd`, copy the folder on the host, then restart the application service:

```bash
docker compose restart ctfd
```

Open **Admin Panel > Config > Themes**, select **zerosecure**, then click **Update**. Refresh with **Ctrl + F5**.

Use your actual Compose service name if it is not `ctfd`. No npm installation or image rebuild is needed when the theme directory is already mounted into the container.

### Docker without a source directory mount

For a persistent install, place the extracted folder beside your Compose file, then add this entry to the existing `ctfd` service's `volumes` list. Keep its other volume entries.

```yaml
services:
  ctfd:
    volumes:
      - ./zerosecure:/opt/CTFd/CTFd/themes/zerosecure:ro
```

Apply the added mount:

```bash
docker compose up -d --no-deps ctfd
```

If your CTFd image uses a different installation directory, adjust the container path. Select the theme in the admin panel after the service starts.

For a temporary check in an existing writable container, this is also possible:

```bash
docker cp ./zerosecure CTFD_CONTAINER_NAME:/opt/CTFd/CTFd/themes/zerosecure
docker restart CTFD_CONTAINER_NAME
```

Replace `CTFD_CONTAINER_NAME` with the name from `docker ps`. A container copy can disappear when that container is recreated. Use the volume method for the event.

## 3. Enable the optional homepage banner

1. Select **zerosecure** in **Admin Panel > Config > Themes** and save.
2. In its theme settings, set **ZeroSecure homepage banner** to **Show above the existing homepage** and save.
3. Set the CTF name to **ZEROSECURE 2.0** in the general configuration if that is your event name.

The banner uses the poster's ZeroSecure, Cicada 3301 and MVSR branding. It is off by default and appears only on the homepage when enabled. Your saved homepage content remains below it. If your existing homepage repeats the title, edit that page through the Pages section after reviewing it.

The banner's registration link follows CTFd's registration visibility setting. Signed-in participants see a challenge link and, in team mode, a team link. The banner does not set the event dates, team size, fees or prize pool.

## 4. Adjust the design

| Change | File |
| --- | --- |
| Colours, typography, spacing and component styles | `static/css/zerosecure.css` |
| Optional homepage copy | `templates/components/zerosecure-hero.html` |
| Footer | `templates/base.html` |
| Chart colours | `static/js/zerosecure.js` |
| Homepage setting | `templates/config.html` |

After editing the canonical CSS or JS file, run this command from inside the theme folder:

```bash
python3 scripts/build_theme.py
```

This synchronises the `.dev` and `.min` asset names used by CTFd. The new `.min` files are equivalent readable copies, supplied ready to use. The script also maintains the small chart presentation hooks in the original bundles. Restart CTFd and hard refresh after changes.

Use the CSS variables near the top of `zerosecure.css` to change the palette. Error and warning messages deliberately retain readable red and amber status colours.

## 5. Compatibility and rollback

This is a legacy Crimson/core-style theme for CTFd, not a replacement CTF platform. See `VALIDATION.md` for the specific version and workflows checked. Custom challenge plugins and other CTFd versions require a check in your own installation. It is not a CTFd 4 theme conversion.

Existing styles in **Theme Header**, **Theme Footer**, custom pages or plugins can override the design. Review conflicting custom CSS if old colours remain. Do not remove unrelated scripts from those fields.

To roll back, select your previous theme in **Admin Panel > Config > Themes**. The existing database content is unaffected by switching themes.

## 6. Credits

- Original Crimson theme: 0xdevsachin, commit `9ec14862cbe51b76beaf4ad23359cf2feb9f56ac`.
- CTFd: CTFd LLC, https://github.com/CTFd/CTFd.
- Press Start 2P: CodeMan38, SIL Open Font License.
- Space Grotesk: Space Grotesk Project Authors, SIL Open Font License.
- Font licences are included in `static/fonts/zerosecure/`.
- Existing upstream notices and footer attribution are retained. No new licence is asserted over the original theme or its dependencies.

CTFd's installation reference: https://docs.ctfd.io/docs/themes/overview/.
