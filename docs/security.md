# Dependencies and Auditing

Updating to Next.js 16.4.5 fixed the high and critical findings identified during scaffolding. The production dependency audit (`npm audit --omit=dev`) reported no findings in that validation.

## Outstanding Development Tooling Findings

The full audit still reports moderate findings propagated from `minimatch`: [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249), concerning excessive resource consumption when processing glob patterns.

The latest versions checked of `eslint-plugin-import` (2.32.0), `eslint-plugin-jsx-a11y` (6.10.2), and `eslint-plugin-react` (7.37.5) depend on `minimatch` 3. The fix indicated by the audit is in `minimatch` 11.0.1 or later, which changes the API: the plugins call the module export as a function, whereas version 11 exports an object. A global override can break those rules. The TypeScript parser also depends on a release line predating the fix.

No incompatible override or audit suppression was applied. Track compatible plugin releases and repeat `npm audit` when updating the lint dependency chain. These findings remain open. Lint remains enabled in CI.

Although these are development dependencies in the manifest, the current Dockerfile copies the complete installation into the runtime image. Therefore, a clean production-filtered audit does not mean those packages are absent from the image.
