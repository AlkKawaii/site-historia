CREATE DATABASE BoardGameStore;
USE BoardGameStore;

CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL
);

CREATE TABLE Games (
    GameID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    ThumbnailURL VARCHAR(255),
    Description TEXT,
    RentalPrice DECIMAL(10, 2) NOT NULL,
    MinPlayers INT NOT NULL,
    MaxPlayers INT NOT NULL,
    MinAge INT NOT NULL,
    Duration INT NOT NULL,
    Publisher VARCHAR(100),
    CategoryID INT,
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);

CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Phone VARCHAR(20),
    Address TEXT,
    Password VARCHAR(255) NOT NULL,
    ProfilePicture VARCHAR(255)
);

CREATE TABLE Rentals (
    RentalID INT PRIMARY KEY AUTO_INCREMENT,
    CustomerID INT,
    RentalDate DATETIME NOT NULL,
    ReturnDate DATETIME,
    Total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE RentalItems (
    RentalItemID INT PRIMARY KEY AUTO_INCREMENT,
    RentalID INT,
    GameID INT,
    Quantity INT NOT NULL,
    UnitPrice DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (RentalID) REFERENCES Rentals(RentalID),
    FOREIGN KEY (GameID) REFERENCES Games(GameID)
);

CREATE TABLE Comments (
    CommentID INT PRIMARY KEY AUTO_INCREMENT,
    GameID INT,
    CustomerID INT,
    Comment TEXT NOT NULL,
    CommentDate DATETIME NOT NULL,
    FOREIGN KEY (GameID) REFERENCES Games(GameID),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Ratings (
    RatingID INT PRIMARY KEY AUTO_INCREMENT,
    GameID INT,
    CustomerID INT,
    Rating INT NOT NULL CHECK (Rating >= 1 AND Rating <= 5),
    RatingDate DATETIME NOT NULL,
    FOREIGN KEY (GameID) REFERENCES Games(GameID),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Cart (
    CartID INT PRIMARY KEY AUTO_INCREMENT,
    CustomerID INT,
    GameID INT,
    Quantity INT NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (GameID) REFERENCES Games(GameID)
);