/*
    Creating the tables
*/
create table if not exists menu (
    menu_id serial,
    name varchar(50),
    category varchar(20),
    description text,
    price numeric(10, 2),
    picture text
);

create table if not exists users (
    user_id serial primary key,
    name varchar(50),
    email varchar(50),
    phone varchar(10),
    address text,
    picture text,
    auth0_id text
);

create table if not exists orders (
    order_id serial primary key,
    user_id integer references users(user_id),
    date TIMESTAMP,
    type varchar(20)
);

create table if not exists line_items (
    line_item_id serial primary key,
    order_id integer references orders(order_id),
    name varchar(50),
    quantity integer,
    price NUMERIC(10, 2)
); 

/*
    insert dummy data
*/
-- 
-- dummy menu
-- 
insert into menu (name, category, price) 
values ('Bourbon Chicken', 'chicken', 6.99);

insert into menu (name, category, price) 
values ('Sesame Chicken', 'chicken', 7.99);

insert into menu (name, category, price) 
values ('Mandarin Chicken', 'chicken', 8.99);

insert into menu (name, category, price) 
values ('Chicken with Brocolli', 'chicken', 7.99);


