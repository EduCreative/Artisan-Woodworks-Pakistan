
# Changelog - Artisan Woodworks

All notable changes to this project will be documented in this file.

## [1.0.4] - 2025-05-21
### Fixed
- Resolved "Blank Page" issue on Vercel deployment.
- Added explicit entry script tag `<script type="module" src="/index.tsx"></script>` to `index.html`.
- Added `package.json` and `vite.config.ts` to support Vercel's build pipeline.
- Fixed React Router path resolution for static hosting using `HashRouter`.

## [1.0.3] - 2025-05-20
### Added
- Created `README.md` with full project description and setup guides.
- Created `Changelog.md` to track versioning history.
- Added accessibility `aria-label` attributes to the Navbar and Footer links.
### Improved
- Optimized the mobile navigation menu with enter/exit animations.
- Enhanced the floating WhatsApp button with subtle hover animations.

## [1.0.2] - 2025-05-19
### Added
- Implemented reference image upload functionality on the Custom Order page.
- Added file preview and "remove image" features for custom inquiries.
- Integrated image attachment notification into the WhatsApp message payload.

## [1.0.1] - 2025-05-18
### Fixed
- Resolved TS6133 errors by removing unused icon imports.
- Fixed responsive scaling issues on the Product Detail page for small screens.
### Improved
- Updated the Hero section with a higher-contrast background for better readability.

## [1.0.0] - 2025-05-18
### Added
- Initial release of the Artisan Woodworks digital showroom.
- Full product catalog with category filtering.
- Bespoke furniture inquiry form.
- Contact page with interactive map placeholder.
