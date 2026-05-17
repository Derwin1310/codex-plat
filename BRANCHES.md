# Ramas del curso

Este repo se produce como una secuencia de checkpoints. Cada rama representa el estado final de una clase.

## Punto de partida

- `main`: estado inicial estable para clonar.
- `clase-00-starter`: mismo estado que `main`, usado como checkpoint de clase 0.

## Ramas planeadas

| Rama | Estado |
| --- | --- |
| `clase-00-starter` | Repo inicial, app corre, snapshots funcionan, sin `AGENTS.md` final ni skills. |
| `clase-01-product-map` | AI Radar entendido como producto y repo, primera mejora visual revisable. |
| `clase-02-agents-md` | Configuracion inicial de Codex y `AGENTS.md`. |
| `clase-03-news-to-build-guide` | Primera skill del proyecto. |
| `clase-04-airadar-cli` | CLI agent-friendly inicial. |
| `clase-05-ingestion` | Ingestion idempotente y novelty gate. |
| `clase-06-dedupe-clusters` | Deduplicacion, normalizacion y clusters. |
| `clase-07-ranking-guides` | Ranking y primera guia practica. |
| `clase-08-project-scout` | Proyectos relacionados por noticia. |
| `clase-09-evidence-audit` | Evidencia auditable. |
| `clase-10-codex-exec-subagents` | `codex exec`, subagentes y contexto. |
| `clase-11-ai-newsroom` | Fuentes vivas, MCP y observabilidad. |
| `clase-12-deploy-security` | Vercel, Supabase y seguridad de secretos. |
| `clase-13-plugin-automation` | Plugin y automation diaria. |
| `clase-14-final-demo` | QA visual y demo final. |

## Regla de produccion

No se crean soluciones escondidas dentro de `main`. Cada rama se construye de forma incremental y se valida antes de publicarla.

