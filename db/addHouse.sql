insert into house(property_name, address, img, city, state, zip, monthly_mortgage, desired_rent)
values ($1, $2, $3, $4, $5, $6, $7, $8);

select * from house;