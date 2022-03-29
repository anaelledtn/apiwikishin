CREATE TABLE USERSHIN(
    id_user serial PRIMARY KEY,
    prenom varchar(20) NOT NULL,
    email varchar(100) NOT NULL,
    password varchar(50) NOT NULL,
    admin boolean NOT NULL
);

CREATE TABLE PERSO(
    id_perso serial PRIMARY KEY,
    nom_p varchar(20) NOT NULL,
    etoiles int NOT NULL,
    element varchar(10) NOT NULL,
    taille varchar(10) NOT NULL
);

CREATE TABLE REGION(
    id_reg serial PRIMARY KEY,
    nom_r varchar(20) NOT NULL,
    description varchar(255) NOT NULL
);

CREATE TABLE ARME(
    id_arme serial PRIMARY KEY,
    nom_a varchar(20) NOT NULL,
    type_a varchar(20) NOT NULL,
    etoi_arm int,
    descr_arm varchar(255)

);

CREATE TABLE ARTEFACT(
    id_arte serial PRIMARY KEY,
    nom_ar varchar(20) NOT NULL,
    descr_ar varchar(255) NOT NULL,
    etoi_art int
);