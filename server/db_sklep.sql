-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 25 Mar 2023, 23:46
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `sklep_komputerowy`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `produkty`
--

CREATE TABLE `produkty` (
  `id_produktu` int(11) NOT NULL,
  `nazwa` varchar(100) NOT NULL,
  `cena` decimal(10,2) NOT NULL,
  `zdjecie` varchar(200) NOT NULL,
  `opis` text NOT NULL,
  `kategoria` varchar(100) NOT NULL,
  `specyfikacje` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `produkty`
--

INSERT INTO `produkty` (`id_produktu`, `nazwa`, `cena`, `zdjecie`, `opis`, `kategoria`, `specyfikacje`) VALUES
(1, 'Komputer stacjonarny HP Pavilion 590-p0005nw', '2199.99', 'komputer.png', 'Opis produktu...', 'Komputery', 'Specyfikacje produktu...'),
(2, 'Smartfon Samsung Galaxy A52', '1499.99', 'smartfon.png', 'Opis produktu...', 'Smartfony', 'Specyfikacje produktu...'),
(3, 'Konsola PlayStation 5', '2399.99', 'ps5.png', 'Opis produktu...', 'Gaming', 'Specyfikacje produktu...'),
(4, 'Laptop Lenovo IdeaPad 3 15ITL6', '3299.99', 'laptop.png', 'Opis produktu...', 'Komputery', 'Specyfikacje produktu...'),
(5, 'Monitor LG UltraGear 27GL83A-B', '1999.99', 'dummy.png', 'Opis produktu...', 'Peryferia', 'Specyfikacje produktu...'),
(6, 'Telewizor LG OLED55C14LB', '7199.99', 'dummy.png', 'Opis produktu...', 'Telewizory', 'Specyfikacje produktu...'),
(7, 'Słuchawki bezprzewodowe Sony WH-1000XM4', '1399.99', 'dummy.png', 'Opis produktu...', 'Akcesoria', 'Specyfikacje produktu...'),
(8, 'Klawiatura mechaniczna HyperX Alloy FPS Pro', '389.99', 'dummy.png', 'Opis produktu...', 'Peryferia', 'Specyfikacje produktu...'),
(9, 'Procesor Intel Core i7-11700K', '2299.99', 'dummy.png', 'Opis produktu...', 'Podzespoly', 'Specyfikacje produktu...'),
(10, 'Smartfon Xiaomi Mi 11 Lite 5G', '1499.99', 'dummy.png', 'Opis produktu...', 'Smartfony', 'Specyfikacje produktu...'),
(11, 'Klawiatura membranowa Logitech K120', '49.99', 'dummy.png', 'Opis produktu...', 'Peryferia', 'Specyfikacje produktu...'),
(12, 'Mysz bezprzewodowa Logitech MX Master 3', '479.99', 'dummy.png', 'Opis produktu...', 'Peryferia', 'Specyfikacje produktu...'),
(13, 'Karta graficzna GeForce RTX 3080 Ti', '7999.99', 'dummy.png', 'Opis produktu...', 'Podzespoly', 'Specyfikacje produktu...'),
(14, 'Słuchawki douszne JBL Tune 215TWS', '199.99', 'dummy.png', 'Opis produktu...', 'Akcesoria', 'Specyfikacje produktu...'),
(15, 'Smartfon iPhone 13 Pro', '5699.99', 'dummy.png', 'Opis produktu...', 'Smartfony', 'Specyfikacje'),
(16, 'Słuchawki bezprzewodowe JBL Tune 220TWS', '249.99', 'dummy.png', 'Opis produktu...', 'Peryferia', 'Specyfikacje produktu...'),
(17, 'Klawiatura mechaniczna Logitech G213 Prodigy', '249.99', 'dummy.png', 'Opis produktu...', 'Peryferia', 'Specyfikacje produktu...'),
(18, 'Mysz bezprzewodowa Logitech MX Anywhere 3', '399.99', 'dummy.png', 'Opis produktu...', 'Peryferia', 'Specyfikacje produktu...'),
(19, 'Kabel HDMI 2.0', '49.99', 'dummy.png', 'Opis produktu...', 'Akcesoria', 'Specyfikacje produktu...'),
(20, 'Głośnik Bluetooth JBL Flip 5', '499.99', 'dummy.png', 'Opis produktu...', 'Peryferia', 'Specyfikacje produktu...'),
(21, 'Telewizor Samsung UE50TU7172', '2599.99', 'dummy.png', 'Opis produktu...', 'Telewizory', 'Specyfikacje produktu...'),
(22, 'Kamera internetowa Logitech C920 HD Pro', '499.99', 'dummy.png', 'Opis produktu...', 'Peryferia', 'Specyfikacje produktu...'),
(23, 'Drukarka laserowa HP LaserJet Pro M15w', '299.99', 'dummy.png', 'Opis produktu...', 'Peryferia', 'Specyfikacje produktu...'),
(24, 'Procesor Intel Core i9-12900K', '3399.99', 'dummy.png', 'Opis produktu...', 'Podzespoly', 'Specyfikacje produktu...'),
(25, 'Karta graficzna Nvidia GeForce RTX 3080', '5999.99', 'dummy.png', 'Opis produktu...', 'Podzespoly', 'Specyfikacje produktu...'),
(26, 'Dysk SSD Samsung 970 EVO Plus 1TB', '999.99', 'dummy.png', 'Opis produktu...', 'Podzespoly', 'Specyfikacje produktu...'),
(27, 'Pamięć RAM Corsair Vengeance RGB Pro 32GB', '999.99', 'dummy.png', 'Opis produktu...', 'Podzespoly', 'Specyfikacje produktu...'),
(28, 'Smartwatch Samsung Galaxy Watch 4', '1199.99', 'dummy.png', 'Opis produktu...', 'Peryferia', 'Specyfikacje produktu...'),
(29, 'Gra Cyberpunk 2077', '199.99', 'dummy.png', 'Opis produktu...', 'Gaming', 'Specyfikacje produktu...'),
(30, 'Słuchawki bezprzewodowe Sony WH-1000XM4', '1299.99', 'dummy.png', 'Opis produktu...', 'Akcesoria', 'Specyfikacje produktu...');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `produkty`
--
ALTER TABLE `produkty`
  ADD PRIMARY KEY (`id_produktu`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
