-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2021 at 12:34 PM
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
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `cat_id` int(11) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `cat_id`, `product_name`, `product_status`) VALUES
(1, 1, 'Milk white', 1),
(2, 1, 'Br white', 1),
(3, 1, 'snow white', 1),
(4, 1, 'off white', 1),
(5, 1, 'Royal ivory', 1),
(6, 1, 'Midd buff', 1),
(7, 1, 'Wild lilac', 1),
(8, 1, 'Wild purple', 1),
(9, 1, 'Golden yellow', 1),
(10, 1, 'Lemon yellow', 1),
(11, 1, 'Rig spl yellow', 1),
(12, 1, 'Phiroza blue', 1),
(13, 1, 'Sky blue', 1),
(14, 1, 'Oxford blue', 1),
(15, 1, 'Royal blue', 1),
(16, 1, 'Satin blue', 1),
(17, 1, 'Bright blue', 1),
(18, 1, 'Mint green', 1),
(19, 1, 'Bus green', 1),
(20, 1, 'Deep green', 1),
(21, 1, 'Cascade green', 1),
(22, 1, 'Pista', 1),
(23, 1, 'Water green', 1),
(24, 1, 'Olive green', 1),
(25, 1, 'Pale rose', 1),
(26, 1, 'Deep orange', 1),
(27, 1, 'Signal red', 1),
(28, 1, 'Po red', 1),
(29, 1, 'Auto red', 1),
(30, 1, 'Magenta', 1),
(31, 1, 'Cherry', 1),
(32, 1, 'Mahogany', 1),
(33, 1, 'Smoke grey', 1),
(34, 1, 'Tata smoke grey', 1),
(35, 1, 'Black', 1),
(36, 1, 'Truck brown', 1),
(37, 1, 'Golden brown', 1),
(38, 1, 'Asian brown', 1),
(39, 1, 'Dark brown', 1),
(40, 1, 'Black board black enamel', 1),
(41, 1, 'Irish cream', 1),
(42, 2, 'Milk white', 1),
(43, 2, 'Br white', 1),
(44, 2, 'Golden brown', 1),
(45, 2, 'Lemon yellow', 1),
(46, 2, 'Golden yellow', 1),
(47, 2, 'Irish cream', 1),
(48, 3, 'White wood primers', 1),
(49, 3, 'Pink wood primers', 1),
(50, 3, 'Synthetic clear varnis', 1),
(51, 4, 'HT EM green', 1),
(52, 4, 'HT blue', 1),
(53, 4, 'Ht sliver ash', 1),
(54, 4, 'Aluminium paints', 1),
(55, 5, 'Skps grey primers', 1),
(56, 5, 'Red oxide metal primers', 1),
(57, 5, 'Zinc chromate yellow primers', 1),
(58, 6, 'FR red', 1),
(59, 6, 'Olive green 236', 1),
(60, 6, 'Olive green 495', 1),
(61, 6, 'Silver grey', 1),
(62, 6, 'Nickel grey', 1),
(63, 7, 'Milk white', 1),
(64, 7, 'Br white', 1),
(65, 7, 'Golden yellow', 1),
(66, 7, 'Lemon yellow', 1),
(67, 7, 'Rig spl yellow', 1),
(68, 7, 'Phiroza blue', 1),
(69, 7, 'Oxfors blue', 1),
(70, 7, 'Royal blue', 1),
(71, 7, 'Mint green', 1),
(72, 7, 'Bus green', 1),
(73, 7, 'Deep green', 1),
(74, 7, 'Deep orange', 1),
(75, 7, 'Single red', 1),
(76, 7, 'Po red', 1),
(77, 7, 'Auto red', 1),
(78, 7, 'Smoke grey', 1),
(79, 7, 'Tata smoke grey', 1),
(80, 7, 'black', 1),
(81, 7, 'Truck brown', 1),
(82, 7, 'Golden brown', 1),
(83, 7, 'Asian brown', 1),
(84, 7, 'Irish cream', 1),
(85, 7, 'Da grey', 1),
(86, 7, 'Dlx da grey', 1),
(87, 7, 'Spl da grey', 1),
(88, 7, 'Nickel grey', 1),
(89, 7, 'Sliver grey', 1),
(90, 7, 'C&p white', 1),
(91, 7, 'Japan black', 1),
(92, 7, 'Red oxide primer', 1),
(93, 7, 'Lorry blue', 1),
(94, 7, 'Matt black', 1),
(95, 8, 'Primer', 1),
(96, 9, 'Bright green', 1),
(97, 9, 'Yellow', 1),
(98, 9, 'Green yellow', 1),
(99, 10, 'Cool roof cote', 1),
(100, 11, 'Crack past', 1),
(103, 12, 'Acrylic putty', 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_category`
--

CREATE TABLE `product_category` (
  `cat_id` int(11) NOT NULL,
  `cat_name` varchar(255) DEFAULT NULL,
  `sizes` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_category`
--

INSERT INTO `product_category` (`cat_id`, `cat_name`, `sizes`) VALUES
(1, 'Premium synthetic enamel', '1,2,3,4,5,7,9'),
(2, 'Hi-gloss automotive paint(fast drying)', '4,5,7'),
(3, 'Aapple wood primers', '3,4,5,7,9'),
(4, 'Aapple hamertones & aluminium paints', '3,4,5,7,9'),
(5, 'Aapple metal primers', '3,4,5,7,9'),
(6, 'Aapple furniture enamels', '4,5,7,9'),
(7, 'Galaxy truck coating paints', '4,5,7,9'),
(8, 'Multi wall primer water base', '5,6,7,9'),
(9, 'Floor coat', '5,6,7,8,9'),
(10, 'Cool roof coat', '5,7,8,9'),
(11, 'Crack past', '10'),
(12, 'Acrylic putty', '10,11');

-- --------------------------------------------------------

--
-- Table structure for table `product_size`
--

CREATE TABLE `product_size` (
  `size_id` int(11) NOT NULL,
  `size_name` varchar(255) DEFAULT NULL,
  `size_status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_size`
--

INSERT INTO `product_size` (`size_id`, `size_name`, `size_status`) VALUES
(1, '50 ML', 1),
(2, '100 ML', 1),
(3, '200 ML', 1),
(4, '500 ML', 1),
(5, '1 LTR', 1),
(6, '1.5 LTR', 1),
(7, '4 LTR', 1),
(8, '10 LTR', 1),
(9, '20 LTR', 1),
(10, '1 KG', 1),
(11, '5 KG', 1);

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
(1, 'san@gmail.com', '123456', 'as', 'as', 'ds', 'da', 'eew', 'w', 'e', 'f', '21', '23', 'true', 'admin'),
(7, 'ravi@gmail.com', 'ravi123', 'dsd', 'sd', 'sds', 'sd', 'sd', 'sds', 'sds', 'sds', 'sds', 'sa', 'true', 'user'),
(8, 'pavisakthi1699@gmail.com', 'pavi123', 's', '454545465454', 'pavithra', 'tiruchengode', 'tiruchengode', 'namakkal', 'Tamil Nadu', '637211', '+918428716864', '+918428716864', 'false', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `product_size`
--
ALTER TABLE `product_size`
  ADD PRIMARY KEY (`size_id`);

--
-- Indexes for table `user_register`
--
ALTER TABLE `user_register`
  ADD PRIMARY KEY (`reg_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `product_category`
--
ALTER TABLE `product_category`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `product_size`
--
ALTER TABLE `product_size`
  MODIFY `size_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user_register`
--
ALTER TABLE `user_register`
  MODIFY `reg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
