-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2018 at 10:44 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `img-link-get-post`
--
CREATE DATABASE IF NOT EXISTS `img-link-get-post` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `img-link-get-post`;

-- --------------------------------------------------------

--
-- Table structure for table `imagem`
--

CREATE TABLE `imagem` (
  `img_id` int(11) NOT NULL,
  `nome` text NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `imagem`
--

INSERT INTO `imagem` (`img_id`, `nome`, `url`) VALUES
(1, 'Coxinha', 'https://1344552651.rsc.cdn77.org/prod/imagens/receita/22704/coxinhasemmassa-30543.jpg'),
(2, 'Temaki', 'https://s3.amazonaws.com/pu-mgr/default/a0R0f00000wsjHMEAY/59d555ade4b0b7b0bacf4af1.jpg'),
(3, 'Lasanha', 'https://guiadacozinha.com.br/wp-content/uploads/2017/07/lasanha-%C3%A0-bolonhesa-e-4-queijos.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `imagem`
--
ALTER TABLE `imagem`
  ADD PRIMARY KEY (`img_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `imagem`
--
ALTER TABLE `imagem`
  MODIFY `img_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
