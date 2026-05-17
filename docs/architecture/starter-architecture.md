# Arquitectura inicial

AI Radar empieza con una arquitectura deliberadamente pequena:

- `app/`: dashboard web estatico.
- `snapshots/`: datos reproducibles para clases y tests.
- `lib/radar.mjs`: normalizacion, fingerprints y ranking inicial.
- `scripts/`: build, dev server, lint y validacion.
- `supabase/`: migracion inicial para el modelo que se completa durante el curso.

La app inicial no resuelve ingestion live, deduplicacion semantica, subagentes ni automations. Esos huecos son parte del curso.

