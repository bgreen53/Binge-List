CREATE DATABASE binge_db;

USE binge_db;

create TABLE shows(
    id int not null AUTO_INCREMENT,
    title VARCHAR(50) not null ,
    isbinged Boolean DEFAULT false,
    PRIMARY KEY(id)
);