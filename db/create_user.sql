insert into users (name, email, picture, auth0_id, address, phone)
values (${name}, ${email}, ${picture}, ${auth0_id}, ${address}, ${phone})
returning *;