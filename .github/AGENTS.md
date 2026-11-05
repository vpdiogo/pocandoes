# Continuous Integration

Use the documented versions and lockfile-based installation. Preserve the lint, type, test, build, and audit gates. The Python package check currently verifies CLI installation and execution; it does not demonstrate functional collection or domain coverage.

Investigate failures before changing a gate. Do not use `continue-on-error`, reduce audit scope, or remove checks to hide problems. Workflow changes do not prove execution on GitHub: report local and remote results separately.
