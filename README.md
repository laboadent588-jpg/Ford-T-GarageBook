# Model T Garage Book — v1.1 (work in progress)

A vintage-styled, offline-capable PWA for Ford Model T service records and restoration notes.

## v1.1 documentation work
- Bundles the complete searchable plain-text edition of Ford Motor Company's 1919 *Manual for Owners and Operators of Ford Cars and Trucks* (Project Gutenberg eBook 46206) at `documents/ford-manual-1919.txt`.
- The service worker pre-caches the manual and the search UI, so the included edition can be searched and read without an Internet connection after the PWA is installed/updated.
- Identifies source, edition and printed chapter/page references for engine (p. 9), cooling (p. 17), gasoline (p. 21), ignition (p. 25), transmission (p. 31), rear axle (p. 37), running gear (p. 40), lubrication (p. 46) and maintenance (p. 50).
- Shows a profile-year warning: the 1919 source is not presented as applicable to a different model year.
- The 1919 manual contains no torque table. A separate, clearly qualified secondary reference reports 45 ft·lbf (about 61 N·m) for a 1917 Runabout fitted with an aftermarket aluminum high-compression cylinder head: Royce Peterson, “Installing a High Compression Cylinder Head,” Model T Ford Fix, 24 February 2019, https://modeltfordfix.com/installing-a-high-compression-cylinder-head/. This is one reported modified setup, not a Ford factory specification or a general value; do not apply it to a stock head or unknown fasteners.
- Restoration entries now accept parts/part numbers, source references and work photos. Photos are kept in the current browser's IndexedDB and are not included in JSON backups.
- The home-page car is a centered, sepia line-art crop of the 1909 Model T Torpedo in the Ford advertisement supplied by the user. It retains the existing green-and-brass hero, is bundled for offline use, and can be replaced by an optional vehicle profile photo stored locally in IndexedDB.
- App credits: created by Jose David Galiano and dedicated with affection to Vicente.

The Gutenberg text retains its included license/rights notice. Project Gutenberg notes that users outside the United States must check local copyright law before reusing the eBook.

### Current limits of this v1.1 increment
- Only the 1919 manual is bundled offline. The other catalog entries below remain external links and need rights/source verification before being packaged.
- Search currently covers the bundled 1919 text, not user-attached PDFs or external scans.
- The technical sheet provides source locations, not a fully verified year-by-year/variant specification database. The only displayed torque is the secondary, configuration-specific report above; no factory torque specification has been verified.
- User-attached PDFs, restoration photos and the optional vehicle photo are stored locally in the browser. JSON backups do not include these binary files.

## Main reference vehicle
- Ford Model T Roadster, initial profile year 1911.
- Roadster / Runabout body selection; the “Mother-in-Law” seat is described separately from the later rumble seat.
- Model T production range: 1908–1927.
- Baseline engine shown as 2.9 L four-cylinder side-valve. Always verify exact year, engine and installed equipment.

## Features
- Service/work log with date, odometer, system, parts, notes and cost.
- Maintenance tasks with optional date and odometer due points.
- Starter inspection checklist (advisory, not a factory service interval).
- Restoration board for mechanical, body, upholstery and provenance work.
- Vehicle profile: model year 1909–1927, body style, serial, market, engine and equipment.
- Spanish, French and English interface.
- Metric km default; optional miles display. Distance values are stored internally in km.
- CSV export and JSON backup/restore.
- Local PDF attachment storage in IndexedDB on the current browser/device.
- PWA service worker for offline app shell.

## Important technical note
Model T production changed considerably from 1909 to 1927. Do not apply later service procedures or parts data to early cars without checking the matching year/serial and equipment. The starter checklist is deliberately an inspection list, not a claimed Ford factory interval schedule.

The 1919 Ford manual describes the oil-level procedure using the transmission/flywheel casing and two petcocks. Confirm the applicable manual before filling or servicing an individual car.

## Period documentation links
- Ford Manual for Owners and Operators (1919), Project Gutenberg: https://www.gutenberg.org/ebooks/46206
- Ford Model T owner manual scan (1915): https://cimorelli.com/mtdl/1915/1915owners.pdf
- Instruction book for Ford Model T (1911): https://cimorelli.com/mtdl/1911/1911fordinstbook.pdf
- French parts list (1913): https://cimorelli.com/mtdl/1913/1913plfrench.pdf
- 1925 Ford Model T Service Manual: https://manuals.plus/m/467a6954a731ebb57a110b5e04cdd426c1dc27b35273acac3ccd4bc86ebe84b3

## Install
The app is published on GitHub Pages at https://laboadent588-jpg.github.io/Ford-T-GarageBook/. On Android, open that HTTPS address in Chrome, tap ⋮, then choose **Install app** (or **Add to Home screen**). Open it once while online so the app shell and included manual are cached for offline use. This is an installable PWA, not an APK.
