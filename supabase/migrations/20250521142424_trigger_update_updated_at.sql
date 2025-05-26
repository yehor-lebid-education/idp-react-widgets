
-- Function to update updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Attach trigger to a table (example for widgets)
CREATE TRIGGER widgets_update_updated_at
BEFORE UPDATE ON widgets
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Do the same for tabs, widget_data, etc.
CREATE TRIGGER tabs_update_updated_at
BEFORE UPDATE ON tabs
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER widget_data_update_updated_at
BEFORE UPDATE ON widget_data
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
