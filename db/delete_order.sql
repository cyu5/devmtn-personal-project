DELETE FROM orders WHERE order_id = ${order_id}
returning *;