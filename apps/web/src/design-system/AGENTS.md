# Design System

Read `docs/design.md` from the repository root. Define shared colors, typography, spacing, and dimensions in `tokens/tokens.css`. Restrict global CSS to resets and global behavior; use CSS Modules for components and patterns.

Components must not contain business rules or data queries. Preserve HTML semantics, native properties, focus, and disabled states. Use buttons for actions and links for navigation. Pass events from an explicit client boundary.

Add abstractions when a clear usage pattern exists. Verify keyboard navigation, touch-target size, and contrast; do not communicate state through color alone. The visual direction is sober with discreet regional references; consult the guidelines before introducing new visual choices.
