# AI Radar

AI Radar organiza noticias, herramientas, papers, repos y productos de IA para convertir ruido en senales accionables.

Este es el repo de trabajo del curso avanzado de Codex. Los estudiantes trabajan sobre este proyecto y cada clase queda representada por una rama/checkpoint del repo.

## Setup

La ruta recomendada usa Dekk para que todos los comandos corran desde la raiz correcta del repo:

```bash
dekk airadar install
dekk airadar doctor
dekk airadar lint
dekk airadar test
dekk airadar build
dekk airadar dev
```

Si no tienes Dekk instalado:

```bash
pipx install dekk
```

Fallback sin Dekk:

```bash
pnpm install
pnpm lint
pnpm test
pnpm build
pnpm dev
```

Abrir:

```text
http://localhost:4173
```

## Que esta listo

- Dashboard inicial con datos de snapshots.
- Normalizacion minima de fuentes.
- Validacion de snapshots.
- `.dekk.toml` con comandos reproducibles para Codex y estudiantes.
- Migracion inicial de Supabase.
- `.env.example` sin secretos.
- `AGENTS.template.md` para generar el `AGENTS.md` real en clase 2.

## Modelo de ramas

`main` contiene el punto de partida estable. La rama `clase-00-starter` marca el estado inicial del proyecto.

Durante la produccion del curso, cada clase tendra una rama con el estado final de esa clase:

```text
clase-00-starter
clase-01-anatomia-codex
clase-02-agents-md
clase-03-skills
clase-04-airadar-cli
clase-05-ingestion
clase-06-dedupe-clusters
clase-07-ranking-guides
clase-08-project-scout
clase-09-operacion-segura
clase-10-codex-exec-subagents
clase-11-ai-newsroom
clase-12-deploy-security
clase-13-plugin-automation
clase-14-final-demo
```

La idea de trabajo es simple: empiezas desde la rama anterior, haces la clase, y comparas contra la rama de la clase cuando exista.

## Que se construye durante el curso

- Skills del proyecto.
- CLI `airadar`.
- Ingestion idempotente.
- Deduplicacion y clusters.
- Ranking explicable.
- `airadar codex` con `codex exec`.
- Subagentes, observabilidad, deploy y automation diaria.

## Primer prompt recomendado

Usalo en clase 0, antes de editar:

```text
Lee este repo sin modificar archivos.

Quiero que me entregues:
- Que hace AI Radar hoy.
- Como se ejecuta.
- Donde viven los datos de ejemplo.
- Que partes estan incompletas a proposito.
- Que comandos debo correr para verificar el estado inicial.
- Que deberia entrar en AGENTS.md en la siguiente clase.

No edites nada todavia.
```
