drop database if exists banco;
create database servico
use servico

create table prestador (
    id_servico integer(1) primary key auto_increment,
    provedor varchar(255) not null,
    val_hora float(5,2),
    hr_trab float(3,1)
);

insert into prestador(provedor, val_hora, hr_trab) values 
("Juca Mendoça", 35.0, 75.00),
("Mariana Silva", 24.0, 100.00),
("Junior Junquera", 16.5, 125.0);