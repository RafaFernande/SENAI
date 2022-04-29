drop database if exists  meubanco;
drop table if exists pessoas;
create database meubanco;
show databases;
use meubanco;

create table pessoas (
    id int primary key auto_increment not null,
    nome varchar(100),
    salario int,
    data_nascimento date,
    profissao varchar(255)
);

insert into pessoas(nome, salario, data_nascimento, profissao) 
values ("Rafael", 1100, "2005-01-04", "Programador");

insert into pessoas(nome, salario, data_nascimento, profissao)
values ("Juliano", 2100, "1999-09-02", "Guarda de trânsito");

insert into pessoas(nome, salario, data_nascimento, profissao)
values ("Roberto", 11000, "1979-03-01", "Engenheiro químico");

update pessoas set salario = 3000 where nome = "Rafael";

create table enderecos (
    id int primary key auto_increment not null,
    rua varchar(255) not null,
    numero varchar(4) not null,
    pessoa_id int not null,
    foreign key (pessoa_id) references pessoas(id) 
);

insert into enderecos(rua, numero, pessoa_id)
values ("Rua das flores", "102b", 1);

insert into enderecos(rua, numero, pessoa_id)
values ("Rua das quebradas", "1123", 2);


select pessoas.nome, enderecos.*
from pessoas
join enderecos on pessoas.id = enderecos.pessoa_id;

select * from pessoas;
select * from enderecos;









