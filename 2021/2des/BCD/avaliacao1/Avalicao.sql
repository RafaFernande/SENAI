Create database locadora_de_veiculos;
show databases;
use locadora de veiculos;

create table veiculos (
	placa varchar(10) not null primary key,
	modelo varchar(20) not null,
	marca varchar(20) not null,
	cor varchar(10) not null,
	valor_diaria float(7, 2) not null,
	ano integer(4) not null,
	tipo varchar(20) not null
)

create table clientes(
	cpf varchar(12) not null primary key,
	nome varchar(100) not null,
	endereco varchar(120) not null,
	email varchar(50) not null,
	telefone varchar(10) not null
)

create table endereco(
	logradouro varchar (20) not null,
	bairro varchar(50) not null,
	cidadeUF varchar(20) not null,
	cpf_cliente varchar(12) not null,
	constraint cpf_cliente
	foreign key (cpf_cliente) references clientes (cpf)
)

create table telefone(
	cpf_cliente varchar(12) not null,
	constraint cpf_cliente_fk foreign key(cpf_cliente) references clientes(cpf),
	telefone varchar(10) not null
)

create table locacoes(
	id integer not null auto_increment primary key,
	placa_veiculo varchar(10) not null,
	constraint placa_veiculo foreign key(placa_veiculo) 
)references veiculos(placa),
	data_retirada date not null,
	data_devolucao date not null,
	obs varchar (100),
	valor_efetivo float(7, 2) not null
)

	
	








