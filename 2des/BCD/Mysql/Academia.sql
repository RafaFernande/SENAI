-- drop database if exists academia;
-- create database academia;
-- show databases;
-- use academia;

-- create table clientes(
--     id_cliente integer not null auto_increment primary key,
--     nome varchar(50) not null,
--     nascimento date not null,
--     sexo char(1) not null,
--     peso decimal(6) not null
-- );

-- create table telefones(
--     id_cliente int(10) not null,
--     num_telefone varchar(14) not null
-- );

-- create table fichas(
--     id_cliente integer not null,
--     id_exercicio integer not null,
--     dia_semana varchar(15) not null,
--     objetivo varchar(15) not null,
--     serie varchar(20) not null
-- );

-- create table exercicios(
--     descricao varchar(40) not null,
--     grupo_muscular varchar(15),
--     aparelho varchar(20)
-- );

-- insert into exercicios (descricao, grupo_muscular, aparelho) values ('Pernas', 'quadríceps', 'Cadeira extensora');