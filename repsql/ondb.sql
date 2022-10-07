Create database test;
use test;
create table todo (
    id int ,
    description varchar(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    status int
);