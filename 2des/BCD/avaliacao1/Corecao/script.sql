drop database if exists locadora;
create database locadora charset = UTF8 collate = utf8_general_ci;
use locadora;

create table veiculos(
    placa varchar(8)  not null primary key,
    modelo varchar(20) not null,
    marca varchar(20) not null,
    cor varchar(20) not null,
    valor_diaria decimal(7,2) not null,
    ano integer(4) not null,
    tipo varchar(20) not null
);
create table locacoes(
    id integer not null primary key auto_increment,
    data_retirada date not null,
    data_devolucao date,
    obs varchar(255),
    valor_efetivo decimal(7,2)
);
create table clientes(
    cpf varchar(12) not null primary key,
    nome varchar(50) not null,
    endereco varchar(100) not null,
    email varchar(70) not null
);
create table telefones(
    cpf varchar(12) not null,
    telefone varchar(50) not null
);

alter table telefones add 
constraint fk_tel_cli foreign key (cpf) 
references clientes(cpf)
on delete cascade
on update cascade;

-- adicona  placa em locacoes
alter table locacoes add
placa varchar(8) not null;

alter table locacoes add
constraint fk_locado foreign key (placa)
references veiculos(placa)
on update cascade;

-- adicona campo cpf em locacoes
alter table locacoes add
cpf varchar(12) not null;
 
alter table locacoes add
constraint fk_aluga foreign key (cpf)
references clientes(cpf)
on update cascade;

insert into veiculos(placa, modelo, marca, cor, valor_diaria, ano, tipo)values
("AAA111", "UNO", "FIAT", "Amarelo", "50.00", "1998", "Popular"),
("BBB222", "GOL", "VW", "Prata", "70.00", "1999", "Popular"),
("WWW333", "Fiesta", "FORD", "Azul", "50.00", "2012", "Popular"),
("DDD777", "TORO", "FIAT", "Branco", "100.00", "2020", "Popular"),
("XXX999", "CAMARO", "Chevrolet", "Amarelo", "120.00", "2019", "Esportivo");

insert into clientes values
("12345678999","João Rodrigues", "Ruas da edra, 46", "JoãoRodrigues899.@gmail.com"),
("12314156765","João Almeda", "Ruas da eras, 49", "JoãoALmeida899.@gmail.com"),
("95742570699","João Julio", "Ruas da Ervas, 12", "JoãoJulio877.@gmail.com"),
("84198194812","Carlos Almeida", "Ruas da ruas, 666", "CarlosALmeida722.@gmail.com"),
("85103582012","João Pitbull", "Ruas dos cães, 65", "JoãoCachorro666.@gmail.com");

insert into telefones values
("12345678999", "99487-8797"),
("12314156765", "94447-8797"),
("95742570699", "99127-8797"),
("84198194812", "90187-8197"),
("85103582012", "99487-8797");

insert into locacoes values
(null, "2021-08-05", "2021-08-07", "", 150.00, "AAA111", "12345678999"),
(default, "2021-08-01", "2021-08-030", null, 50.00, "BBB222", "12314156765");

select * from veiculos;
select * from clientes;
select * from telefones;
select * from locacoes;