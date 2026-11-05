# Design Guidelines

## Initial Direction

The agreed direction is sober, with discreet regional references and an identity that evolves with the product. The foundation uses a light background, dark green, and terracotta, with system typography. Regional identity appears in the name, language, and content. A logo, illustrations, and a complete identity will be defined in dedicated design work.

## Organization

`apps/web/src/design-system/tokens/tokens.css` is the source for semantic colors, typography, spacing, and dimensions. Reusable components belong in `components`, compositions in `patterns`, and global resets in `styles`. Feature-specific styles belong to the feature and use the shared tokens.

`Button` preserves native attributes and defaults to `type="button"` to avoid accidental form submission. Event handlers require a client caller. `PageShell` provides the main landmark and the skip-link target; use it once per page. `PageIntro` provides the page's single h1 and introductory content.

Approved Brazilian Portuguese interface copy is stored in `apps/web/src/locales/pt-BR.json`, including metadata, navigation, and accessibility messages. Keep source identifiers and comments in English; do not translate the platform UI as part of repository-language cleanup.

## Accessibility and Content

- Target WCAG 2.2 AA: a contrast ratio of 4.5:1 for normal text and 3:1 for large text. Accent colors used for text must meet these requirements.
- Preserve visible focus, keyboard operation, accessible labels, and touch targets of at least 44 px in the base components.
- Use direct Brazilian Portuguese in the localized interface. States and errors must not rely on color alone.
- Verify narrow screens, 200% zoom, long content, and landscape orientation without content loss. Layout is fluid, with no fixed minimum width.
- Avoid unnecessary animation. Respect `prefers-reduced-motion` when adding motion.

## Verification

Button tests exercise keyboard operation, the disabled state, and form submission. They use a simulated DOM: contrast, visible focus, responsiveness, and screen-reader behavior still require browser review. Do not claim WCAG conformance solely because lint and tests pass.
