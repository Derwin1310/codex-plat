insert into sources (id, name, source_type)
values
  ('openai-blog', 'OpenAI Blog', 'official'),
  ('hn', 'Hacker News', 'social'),
  ('arxiv', 'arXiv', 'paper'),
  ('github', 'GitHub', 'repo'),
  ('product-hunt-curated', 'Product Hunt Curated', 'product')
on conflict (id) do nothing;

