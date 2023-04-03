-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 03 Kwi 2023, 15:51
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
(30, 'Słuchawki bezprzewodowe Sony WH-1000XM4', '1299.99', 'dummy.png', 'Opis produktu...', 'Akcesoria', 'Specyfikacje produktu...'),
(31, 'Laptop Lenovo ThinkPad', '2999.99', 'dummy.png', 'Laptop dla wymagających użytkowników', 'Polecane', 'Procesor: Intel Core i7, RAM: 16GB, Dysk: 512GB SSD'),
(32, 'Komputer stacjonarny HP', '3499.99', 'dummy.png', 'Komputer idealny do pracy biurowej', 'Polecane', 'Procesor: Intel Core i5, RAM: 8GB, Dysk: 1TB HDD'),
(33, 'Smartfon Samsung Galaxy', '1499.99', 'dummy.png', 'Najnowszy model flagowy od Samsunga', 'Polecane', 'Ekran: 6,5 cala, Procesor: Exynos 2100, RAM: 8GB, Pamięć wewnętrzna: 256GB'),
(34, 'Tablet Apple iPad', '1999.99', 'dummy.png', 'Najnowszy model iPada z ekranem Retina', 'Polecane', 'Ekran: 10,2 cala, Procesor: A14 Bionic, Pamięć wewnętrzna: 128GB'),
(35, 'Klawiatura mechaniczna Logitech', '399.99', 'dummy.png', 'Profesjonalna klawiatura mechaniczna z podświetleniem RGB', 'Polecane', 'Typ przełączników: Romer-G Tactile, Podświetlenie: RGB, Klawisze programowalne'),
(36, 'Mysz gamingowa Razer', '249.99', 'dummy.png', 'Mysz dla wymagających graczy', 'Polecane', 'Czułość: 16000 DPI, Podświetlenie: RGB, Liczba przycisków: 7'),
(37, 'Słuchawki bezprzewodowe Sony', '899.99', 'dummy.png', 'Słuchawki bezprzewodowe z funkcją redukcji hałasu', 'Polecane', 'Typ bezprzewodowy: Bluetooth 5.0, Czas pracy na baterii: do 30 godzin'),
(38, 'Monitor Dell UltraSharp', '2799.99', 'dummy.png', 'Profesjonalny monitor z matrycą IPS i rozdzielczością 4K', 'Polecane', 'Rozdzielczość: 3840 x 2160, Przekątna ekranu: 27 cali, Częstotliwość odświeżania: 60 Hz'),
(39, 'Kamera internetowa Logitech', '449.99', 'dummy.png', 'Kamera internetowa dla profesjonalistów', 'Polecane', 'Rozdzielczość: Full HD 1080p, Kąt widzenia: 90 stopni, Mikrofon: stereo');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uzytkownicy`
--

CREATE TABLE `uzytkownicy` (
  `id` int(11) NOT NULL,
  `imie` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `login` varchar(50) DEFAULT NULL,
  `haslo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`id`, `imie`, `email`, `login`, `haslo`) VALUES
(1, 'Michał', 'xmichsen@gmail.com', 'michsen', 'haslo'),
(2, 'MichuKFC', 'email@example.com', 'michukfc', 'haslo'),
(3, 'Karol', 'email@example.com', 'kwojcik', 'haslo'),
(4, 'Piotr', 'email@example.com', 'piopio', 'haslo'),
(5, 'JP2', 'kremowka@gmail.com', 'JanPablo', 'haslo');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
