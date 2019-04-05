create table house(
    house_id serial primary key,
    property_name varchar,
    address varchar,
    img text,
    city varchar,
    state varchar(2),
    zip int,
    monthly_mortgage varchar,
    desired_rent varchar
)