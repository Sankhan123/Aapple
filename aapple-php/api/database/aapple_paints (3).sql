-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2021 at 12:36 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aapple_paints`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `premium synthetic enamel` varchar(100) NOT NULL,
  `hi-gloss automotive paint(fast drying)` varchar(100) NOT NULL,
  `aapple wood primers` varchar(100) NOT NULL,
  `aapple hamertones & aluminium paints` varchar(100) NOT NULL,
  `aapple metal primers` varchar(100) NOT NULL,
  `aapple furniture enamels` varchar(100) NOT NULL,
  `galaxy truck coating paints` varchar(100) NOT NULL,
  `multi wall primer water base` varchar(100) NOT NULL,
  `floor coat` varchar(100) NOT NULL,
  `cool roof cote` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user_register`
--

CREATE TABLE `user_register` (
  `reg_id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `gst_number` varchar(255) DEFAULT NULL,
  `contact_person` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zip` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `alternate_number` varchar(255) DEFAULT NULL,
  `user_status` varchar(255) NOT NULL DEFAULT 'false',
  `user_role` varchar(255) DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_register`
--

INSERT INTO `user_register` (`reg_id`, `email`, `password`, `company_name`, `gst_number`, `contact_person`, `address`, `city`, `district`, `state`, `zip`, `phone`, `alternate_number`, `user_status`, `user_role`) VALUES
(1, 'san@gmail.com', 'san', 'as', 'as', 'ds', 'da', 'eew', 'w', 'e', 'f', '21', '23', 'true', 'admin'),
(7, 'ravi@gmail.com', 'ravi', 'dsd', 'sd', 'sds', 'sd', 'sd', 'sds', 'sds', 'sds', 'sds', 'sa', 'false', 'user'),
(8, 'pavisakthi1699@gmail.com', 'pavi', 's', '454545465454', 'pavithra', 'tiruchengode', 'tiruchengode', 'namakkal', 'Tamil Nadu', '637211', '+918428716864', '+918428716864', 'false', 'user'),
(9, 'pavisakthi1699@gmail.com', 'ddgd', 's', '68765767979', 'pavithra', 'tiruchengode', 'tiruchengode', 'ohqhduqhd', 'Tamil Nadu', '637211', '+918428716864', '+918428716864', 'false', 'user'),
(10, 'santhosh@gmail.com', 'santhosh', '', '', '', 'sd', '', '', '', '', '', '', 'false', 'user'),
(11, 'santhosh2@gmail.com', 'santhosh', '', '', '', 'sd', 'sd', 'sds', 'sdsd', 'sdsd', '', '', 'false', 'user'),
(12, 'sss@gmail.com', 'sdsdsd', '', '', '', 'sdsd', 'sdsd', 'sdsd', 'ssds', '', '', '', 'false', 'user'),
(13, 'santhosh@a.d', 'sdsdsdsd', '', '', '', 'sdsd', '', '', '', '', '', '', 'false', 'user'),
(14, 'sa@gmail.com', 'dsdssdsd', '', '', '', '', '', '', '', '', '', '', 'false', 'user'),
(15, 'asas@jkjs.as', 'asadsda', '', 'asas', 'asa', '', '', '', '', '', 'wew', '', 'false', 'user'),
(16, 'as@ahsa.kjh', 'hjhjjhj', '', 'hjhj', 'hjhjh', '', '', '', '', '', 'jhj', '', 'false', 'user'),
(17, 'ssss@gmail.com', 'sssssd', '', '22sww', 'sds', '', '', '', '', '', '23232', '', 'false', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_register`
--
ALTER TABLE `user_register`
  ADD PRIMARY KEY (`reg_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_register`
--
ALTER TABLE `user_register`
  MODIFY `reg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
