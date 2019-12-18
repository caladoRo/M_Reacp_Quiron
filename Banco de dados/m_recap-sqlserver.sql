create database m_recap

use m_recap

create table Medicos(
	IdMedico int primary key identity,
	Nome varchar (255) not null,
	Crm varchar (255) not null unique,
	CrmUf varchar (255) not null
)

create table Pacientes(
	IdPaciente int primary key identity,
	Nome varchar (255) not null,
	DataNascimento DateTime not null,
	Cpf varchar (255) not null unique,
	IdMedico int foreign key references Medicos (IdMedico)
)

select * from Medicos 
select * from Pacientes


insert into Medicos values ('Ricardo Evaristo','10450623-9','SSP'), ('Zepelino da Aurora Vasco','28330675-6','SSP'), ('Germano Porticoide','39472685-1','SSP');
insert into Pacientes values ('Danilo Fernando Richards','15-09-2001','505.031.668-55', 1),('Diastófoles Pereira Corintios','22-05-1998','653.198.541-18', 2), ('Rodrigo Caique Werner','07-12-2005','210.235.814-46', 3) 

