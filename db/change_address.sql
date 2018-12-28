UPDATE users 
SET address = ${address}
WHERE user_id = ${user_id}
returning *;