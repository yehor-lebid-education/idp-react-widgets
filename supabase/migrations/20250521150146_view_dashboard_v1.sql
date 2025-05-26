create or replace view full_user_dashboard as
select
  u.id as user_id,
  json_build_object(
    'user', json_build_object(
      'id', u.id,
      'email', u.email,
      'created_at', u.created_at
    ),
    'tabs', (
      select json_agg(t)
      from tabs t
      where t.user_id = u.id
    ),
    'widgets', (
      select json_agg(w)
      from widgets w
      where w.tab_id in (
        select t.id from tabs t where t.user_id = u.id
      )
    ),
    'widgetsData', (
      select json_object_agg(wd.widget_id, wd)
      from widget_data wd
      where wd.widget_id in (
        select w.id from widgets w
        where w.tab_id in (
          select t.id from tabs t where t.user_id = u.id
        )
      )
    ),
    'updatedAt', json_build_object(
      'tabs_last_updated_at', (
        select max(t.updated_at)
        from tabs t
        where t.user_id = u.id
      ),
      'widgets_last_updated_at', (
        select max(w.updated_at)
        from widgets w
        where w.tab_id in (
          select t.id from tabs t where t.user_id = u.id
        )
      ),
      'widgets_data_last_updated_at', (
        select max(wd.updated_at)
        from widget_data wd
        where wd.widget_id in (
          select w.id from widgets w
          where w.tab_id in (
            select t.id from tabs t where t.user_id = u.id
          )
        )
      )
    )
  ) as dashboard
from users u;
