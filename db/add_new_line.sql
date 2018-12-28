INSERT INTO line_items (order_id, name, quantity, price)
VALUES (${order_id}, ${name}, ${quantity}, ${price})
returning *;