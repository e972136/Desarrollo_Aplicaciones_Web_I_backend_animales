-- Active: 1705979042290@@localhost@5432@clase@public
create table tbl_animal(
    id serial primary key,
    nombre VARCHAR(500),
    sonido VARCHAR(10),
    creado TIMESTAMP DEFAULT current_timestamp
);