# Python Collectors

Use Python 3.15.2 as specified in `.python-version`. The package is currently an entry point without functional collection. Keep collectors independent of the Next.js code. Define ingestion contracts together with the use cases before persisting data.

When adding external sources, handle limits, timeouts, safe retries, deduplication, and provenance. Use local samples for deterministic tests and avoid real-service access in unit tests. Do not store personal data or credentials in fixtures.
