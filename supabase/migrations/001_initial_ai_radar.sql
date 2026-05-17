create table if not exists sources (
  id text primary key,
  name text not null,
  source_type text not null,
  created_at timestamptz not null default now()
);

create table if not exists raw_items (
  id text primary key,
  source_id text not null references sources(id),
  source_item_id text not null,
  url text not null,
  title text not null,
  summary text,
  published_at timestamptz,
  raw_payload jsonb not null default '{}'::jsonb,
  first_seen_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  unique (source_id, source_item_id)
);

create table if not exists radar_items (
  id text primary key,
  raw_item_id text not null references raw_items(id),
  canonical_url text not null,
  title_fingerprint text not null,
  content_hash text not null,
  topics text[] not null default '{}',
  entities text[] not null default '{}',
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  unique (canonical_url),
  unique (content_hash)
);

create table if not exists clusters (
  id text primary key,
  title text not null,
  summary text,
  score integer not null default 0,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

create table if not exists build_guides (
  id text primary key,
  cluster_id text not null references clusters(id),
  decision text not null,
  body text,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

create table if not exists agent_findings (
  id text primary key,
  run_id text not null,
  agent_role text not null,
  finding jsonb not null,
  created_at timestamptz not null default now()
);
