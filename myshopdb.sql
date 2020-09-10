CREATE DATABASE myshopDB;
USE myshopDB;

-- DROP DATABASE myshopdb;

-- TRUNCATE produs;
-- ALTER TABLE produs;
CREATE TABLE Produs(
ProdusID INT PRIMARY KEY AUTO_INCREMENT,
Descriere VARCHAR(255),
Pret DOUBLE,
TipID INT,
CategorieID INT,
Data_Adaugarii DATETIME
);

CREATE TABLE Tip(
TipID INT,
NumeTip VARCHAR(255)
);

-- drop table categorie;
CREATE TABLE Categorie(
CategorieID INT PRIMARY KEY,
NumeCategorie VARCHAR(255)
);

INSERT INTO Tip(TipID, NumeTip) VALUES(1, 'Electric');
INSERT INTO Tip(TipID, NumeTip) VALUES(2, 'Mecanic');

INSERT INTO Categorie(CategorieID, NumeCategorie) VALUES(1, 'Sistem_de_franare');
INSERT INTO Categorie(CategorieID, NumeCategorie) VALUES(2, 'Sistem_de_ungere');
INSERT INTO Categorie(CategorieID, NumeCategorie) VALUES(3, 'Sistem_de_iluminare');
INSERT INTO Categorie(CategorieID, NumeCategorie) VALUES(4, 'Sistem_de_directie');
INSERT INTO Categorie(CategorieID, NumeCategorie) VALUES(5, 'Sistem_de_angrenare');
INSERT INTO Categorie(CategorieID, NumeCategorie) VALUES(6, 'Elemente_caroserie');
INSERT INTO Categorie(CategorieID, NumeCategorie) VALUES(7, 'Elemente_electrice');


INSERT INTO Produs(ProdusID, Descriere, Pret, TipID, CategorieID, Data_Adaugarii)VALUES(1,'Discuri de frana', 20.5,2,1, '2020-06-12 11:35:39');
INSERT INTO Produs(ProdusID, Descriere, Pret, TipID, CategorieID,Data_Adaugarii)VALUES(2,'Ulei Motor', 10.5,2,2,'2020-07-12 19:35:39');
INSERT INTO Produs(ProdusID, Descriere, Pret, TipID, CategorieID,Data_Adaugarii)VALUES(3,'Becuri H4', 3.5,1,3,'2020-05-19 10:15:59');
INSERT INTO Produs(ProdusID, Descriere, Pret, TipID, CategorieID,Data_Adaugarii)VALUES(4,'Ambreiaj', 200.9,2,5,'2020-02-22 14:39:31');
INSERT INTO Produs(ProdusID, Descriere, Pret, TipID, CategorieID,Data_Adaugarii)VALUES(5,'Caseta de directie', 155.9,2,4,'2020-05-18 12:35:44');


SELECT * 
FROM Produs p
INNER JOIN Categorie c
ON p.CategorieID = c.CategorieID
INNER JOIN Tip t
ON p.TipID = t.TipID;

SELECT * FROM Produs;
SELECT * FROM Categorie;
SELECT * FROM Tip;

SET GLOBAL time_zone = '+03:00';

SELECT * FROM Produs p 
INNER JOIN Categorie c 
ON p.CategorieID = c.CategorieID
WHERE NumeCategorie = 'Sistem_de_ungere';

UPDATE Categorie SET CategorieID=2, NumeCategorie = 'Sistem_de_ungere' WHERE CategorieID=2;
DELETE FROM Produs WHERE ProdusID = 4;

ALTER TABLE Produs AUTO_INCREMENT=8;





