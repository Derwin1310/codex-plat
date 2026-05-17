# Source contract

Cada fuente del starter debe poder convertirse en `RadarItem`.

Campos minimos:

```text
source
source_item_id
type
url
title
summary
published_at
topics
entities
has_docs
has_repo
recommended_action
```

Reglas:

- `source + source_item_id` identifica el item dentro de una fuente.
- `canonical_url` se calcula en normalizacion.
- `content_hash` se calcula desde titulo normalizado y resumen.
- Los snapshots son la fuente reproducible del curso.
- Las fuentes live se agregan despues, con fallback a snapshot.

