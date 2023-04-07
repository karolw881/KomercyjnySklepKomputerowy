-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 06 Kwi 2023, 18:42
-- Wersja serwera: 10.4.24-MariaDB
-- Wersja PHP: 8.1.6

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
-- Struktura tabeli dla tabeli `koszyk`
--

CREATE TABLE `koszyk` (
  `koszyk_id` int(11) UNSIGNED NOT NULL,
  `uzytkownik_id` int(11) DEFAULT NULL,
  `produkt_id` int(11) DEFAULT NULL,
  `ilosc` int(11) DEFAULT NULL,
  `data_dodania` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `koszyk`
--

INSERT INTO `koszyk` (`koszyk_id`, `uzytkownik_id`, `produkt_id`, `ilosc`, `data_dodania`) VALUES
(1, 1, 2, 2, '2023-04-06 15:43:37'),
(2, 2, 1, 1, '2023-04-06 15:43:37'),
(3, 1, 3, 3, '2023-04-06 15:43:37');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `lista`
--

CREATE TABLE `lista` (
  `lista_id` int(11) UNSIGNED NOT NULL,
  `uzytkownik_id` int(11) DEFAULT NULL,
  `produkt_id` int(11) DEFAULT NULL,
  `data_dodania` timestamp NOT NULL DEFAULT current_timestamp(),
  `Nazwa_listy` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `lista`
--

INSERT INTO `lista` (`lista_id`, `uzytkownik_id`, `produkt_id`, `data_dodania`, `Nazwa_listy`) VALUES
(1, 1, 2, '2023-04-06 15:44:01', NULL),
(2, 2, 1, '2023-04-06 15:44:01', NULL),
(3, 1, 3, '2023-04-06 15:44:01', NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `opinie`
--

CREATE TABLE `opinie` (
  `opinia_id` int(11) UNSIGNED NOT NULL,
  `produkt_id` int(11) DEFAULT NULL,
  `uzytkownik_id` int(11) DEFAULT NULL,
  `tresc` text DEFAULT NULL,
  `ocena` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `opinie`
--

INSERT INTO `opinie` (`opinia_id`, `produkt_id`, `uzytkownik_id`, `tresc`, `ocena`) VALUES
(1, 1, 2, 'Świetny produkt!', 5),
(2, 1, 3, 'Słaba jakość wykonania', 2),
(3, 2, 1, 'Dobrze trzyma temperaturę', 4);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `id_uzytkownika` int(11) NOT NULL,
  `imie` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `login` varchar(50) DEFAULT NULL,
  `haslo` varchar(50) DEFAULT NULL,
  `rola` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`id_uzytkownika`, `imie`, `email`, `login`, `haslo`, `rola`) VALUES
(1, 'Michał', 'xmichsen@gmail.com', 'michsen', 'haslo', 'admin'),
(2, 'MichuKFC', 'email@example.com', 'michukfc', 'haslo', 'admin'),
(3, 'Karol', 'email@example.com', 'kwojcik', 'haslo', 'admin'),
(4, 'Piotr', 'email@example.com', 'piopio', 'haslo', 'admin'),
(5, 'JP2', 'kremowka@gmail.com', 'JanPablo', 'haslo', 'uzytkownik');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `zamowienia`
--

CREATE TABLE `zamowienia` (
  `id_zamowienia` int(11) NOT NULL,
  `id_uzytkownika` int(11) NOT NULL,
  `data_zamowienia` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `zamowienia`
--

INSERT INTO `zamowienia` (`id_zamowienia`, `id_uzytkownika`, `data_zamowienia`) VALUES
(1, 1, '2023-04-06 10:30:00'),
(2, 2, '2023-04-06 10:33:00');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `zamowienia_produkty`
--

CREATE TABLE `zamowienia_produkty` (
  `id_zamowienia` int(11) NOT NULL,
  `id_produktu` int(11) NOT NULL,
  `ilosc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `zamowienia_produkty`
--

INSERT INTO `zamowienia_produkty` (`id_zamowienia`, `id_produktu`, `ilosc`) VALUES
(1, 2, 3),
(2, 3, 2);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `koszyk`
--
ALTER TABLE `koszyk`
  ADD PRIMARY KEY (`koszyk_id`),
  ADD KEY `uzytkownik_id` (`uzytkownik_id`),
  ADD KEY `produkt_id` (`produkt_id`);

--
-- Indeksy dla tabeli `lista`
--
ALTER TABLE `lista`
  ADD KEY `uzytkownik_id` (`uzytkownik_id`),
  ADD KEY `produkt_id` (`produkt_id`);

--
-- Indeksy dla tabeli `opinie`
--
ALTER TABLE `opinie`
  ADD PRIMARY KEY (`opinia_id`),
  ADD KEY `produkt_id` (`produkt_id`),
  ADD KEY `uzytkownik_id` (`uzytkownik_id`);

--
-- Indeksy dla tabeli `produkty`
--
ALTER TABLE `produkty`
  ADD PRIMARY KEY (`id_produktu`);

--
-- Indeksy dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  ADD PRIMARY KEY (`id_uzytkownika`);

--
-- Indeksy dla tabeli `zamowienia`
--
ALTER TABLE `zamowienia`
  ADD PRIMARY KEY (`id_zamowienia`),
  ADD KEY `id_uzytkownika` (`id_uzytkownika`);

--
-- Indeksy dla tabeli `zamowienia_produkty`
--
ALTER TABLE `zamowienia_produkty`
  ADD PRIMARY KEY (`id_zamowienia`,`id_produktu`),
  ADD KEY `id_produktu` (`id_produktu`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `koszyk`
--
ALTER TABLE `koszyk`
  MODIFY `koszyk_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `opinie`
--
ALTER TABLE `opinie`
  MODIFY `opinia_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  MODIFY `id_uzytkownika` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `zamowienia`
--
ALTER TABLE `zamowienia`
  MODIFY `id_zamowienia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `koszyk`
--
ALTER TABLE `koszyk`
  ADD CONSTRAINT `koszyk_ibfk_1` FOREIGN KEY (`uzytkownik_id`) REFERENCES `uzytkownicy` (`id_uzytkownika`),
  ADD CONSTRAINT `koszyk_ibfk_2` FOREIGN KEY (`produkt_id`) REFERENCES `produkty` (`id_produktu`);

--
-- Ograniczenia dla tabeli `lista`
--
ALTER TABLE `lista`
  ADD CONSTRAINT `lista_ibfk_1` FOREIGN KEY (`uzytkownik_id`) REFERENCES `uzytkownicy` (`id_uzytkownika`),
  ADD CONSTRAINT `lista_ibfk_2` FOREIGN KEY (`produkt_id`) REFERENCES `produkty` (`id_produktu`);

--
-- Ograniczenia dla tabeli `opinie`
--
ALTER TABLE `opinie`
  ADD CONSTRAINT `opinie_ibfk_1` FOREIGN KEY (`produkt_id`) REFERENCES `produkty` (`id_produktu`),
  ADD CONSTRAINT `opinie_ibfk_2` FOREIGN KEY (`uzytkownik_id`) REFERENCES `uzytkownicy` (`id_uzytkownika`);

--
-- Ograniczenia dla tabeli `zamowienia`
--
ALTER TABLE `zamowienia`
  ADD CONSTRAINT `zamowienia_ibfk_1` FOREIGN KEY (`id_uzytkownika`) REFERENCES `uzytkownicy` (`id_uzytkownika`);

--
-- Ograniczenia dla tabeli `zamowienia_produkty`
--
ALTER TABLE `zamowienia_produkty`
  ADD CONSTRAINT `zamowienia_produkty_ibfk_1` FOREIGN KEY (`id_zamowienia`) REFERENCES `zamowienia` (`id_zamowienia`),
  ADD CONSTRAINT `zamowienia_produkty_ibfk_2` FOREIGN KEY (`id_produktu`) REFERENCES `produkty` (`id_produktu`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
