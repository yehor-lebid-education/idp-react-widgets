-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Tabs table
CREATE TABLE tabs (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  title TEXT,
  order_index INT,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Widgets table
CREATE TABLE widgets (
  id UUID PRIMARY KEY,
  tab_id UUID REFERENCES tabs(id),
  type TEXT, -- e.g. 'note', 'chart'
  options JSONB, -- config/options for widget
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Widget Data table
CREATE TABLE widget_data (
  id UUID PRIMARY KEY,
  widget_id UUID REFERENCES widgets(id),
  data JSONB, -- user content or data for widget
  updated_at TIMESTAMPTZ DEFAULT now()
);
