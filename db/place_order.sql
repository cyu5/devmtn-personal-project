insert into orders (user_id, date, type)
values (${user_id}, ${date}, ${type})
returning *;


