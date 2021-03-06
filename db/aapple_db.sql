-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2022 at 12:17 PM
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
-- Database: `aapple_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cat_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sizes` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `cat_name`, `sizes`, `created_at`, `updated_at`) VALUES
(1, 'Premium synthetic enamel', '1,2,3,4,5,6,8', NULL, NULL),
(2, 'Hi-gloss automotive paint(fast drying)', '4,5,6', NULL, NULL),
(3, 'Aapple wood primers', '3,4,5,6,8', NULL, NULL),
(4, 'Aapple hamertones & aluminium paints', '3,4,5,6,8', NULL, NULL),
(5, 'Aapple metal primers', '3,4,5,6,8', NULL, NULL),
(6, 'Aapple furniture enamels', '4,5,6,8', NULL, NULL),
(7, 'Galaxy truck coating paints', '4,5,6,8', NULL, NULL),
(8, 'Multi wall primer water base', '4,5,6,7,8', NULL, NULL),
(9, 'Floor coat', '4,5,6,7,8', NULL, NULL),
(10, 'Cool roof coat', '5,6,7,8', NULL, NULL),
(11, 'Crack past', '9', NULL, NULL),
(12, 'Acrylic putty', '9,10,11,12', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `dealers`
--

CREATE TABLE `dealers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gst_number` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_person` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `aadhaar_number` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `district` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zip` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alternate_number` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `user_role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `credit_amount` bigint(20) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `dealers`
--

INSERT INTO `dealers` (`id`, `email`, `password`, `company_name`, `gst_number`, `contact_person`, `aadhaar_number`, `address`, `city`, `district`, `state`, `zip`, `phone`, `alternate_number`, `user_status`, `user_role`, `credit_amount`, `created_at`, `updated_at`) VALUES
(2, 'ravi@gmail.com', 'ravi123', 'sds', 'sdsds', 'dsds', '2147483647', 'sdsdsd', 'dssds', 'dsdsd', 'dsds', 'sdsds', 'sdsdsd', 'sdsds', 'true', 'user', 0, '2021-12-09 03:57:41', '2022-02-19 01:13:37'),
(5, 'admin@gmail.com', 'admin123', 'aapple', '12312ss', 'sri murugan', '2147483647', 'asaa', 'dsds', 'sasd', 'sdss', 'dsd', '34343543545', '4545453535', 'true', 'admin', 0, '2021-12-09 04:04:54', '2022-01-31 03:56:45');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2021_12_08_090402_create_dealers_table', 2),
(6, '2021_12_08_123202_create_categories_table', 3),
(7, '2021_12_08_123728_create_sizes_table', 3),
(8, '2021_12_08_145252_create_products_table', 4),
(10, '2022_01_25_070935_create_size_table', 5),
(15, '2022_01_26_104701_create_orders_table', 6),
(16, '2022_01_26_111716_create_orders_data_table', 6),
(19, '2022_01_31_055035_create_transactions_table', 7);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_nr` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dealer_id` bigint(20) UNSIGNED DEFAULT NULL,
  `pro_count` int(11) DEFAULT NULL,
  `order_status` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total` bigint(20) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders_data`
--

CREATE TABLE `orders_data` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED DEFAULT NULL,
  `cat_id` int(11) DEFAULT NULL,
  `cat_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size_id` int(11) DEFAULT NULL,
  `size_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` int(11) DEFAULT NULL,
  `price` bigint(20) DEFAULT NULL,
  `gst` int(11) NOT NULL DEFAULT 0,
  `gst_amount` float(10,2) NOT NULL DEFAULT 0.00,
  `subtotal` float(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cat_id` bigint(20) UNSIGNED DEFAULT NULL,
  `product_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_status` int(11) NOT NULL DEFAULT 1,
  `nil_sizes` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `cat_id`, `product_name`, `product_status`, `nil_sizes`, `created_at`, `updated_at`) VALUES
(1, 1, 'Milk white', 1, '50 ML,100 ML,200 ML', NULL, NULL),
(2, 1, 'Br white', 1, NULL, NULL, NULL),
(3, 1, 'Snow white', 1, '50 ML,100 ML', NULL, NULL),
(4, 1, 'Off white', 1, '50 ML,100 ML', NULL, NULL),
(5, 1, 'Royal ivory', 1, NULL, NULL, NULL),
(6, 1, 'Midd buff', 1, '50 ML,100 ML', NULL, NULL),
(7, 1, 'Wild lilac', 1, '50 ML,100 ML', NULL, NULL),
(8, 1, 'Wild purple', 1, '50 ML,100 ML', NULL, NULL),
(9, 1, 'Golden yellow', 1, NULL, NULL, NULL),
(10, 1, 'Lemon yellow', 1, NULL, NULL, NULL),
(11, 1, 'Rig spl yellow', 1, '50 ML,100 ML,200 ML', NULL, NULL),
(12, 1, 'Phiroza blue', 1, NULL, NULL, NULL),
(13, 1, 'Sky blue', 1, NULL, NULL, NULL),
(14, 1, 'Oxford blue', 1, NULL, NULL, NULL),
(15, 1, 'Royal blue', 1, NULL, NULL, NULL),
(16, 1, 'Satin blue', 1, '50 ML,100 ML,200 ML', NULL, NULL),
(17, 1, 'Bright blue', 1, '50 ML,100 ML,200 ML', NULL, NULL),
(18, 1, 'Mint green', 1, NULL, NULL, NULL),
(19, 1, 'Bus green', 1, NULL, NULL, NULL),
(20, 1, 'Deep green', 1, NULL, NULL, NULL),
(21, 1, 'Cascade green', 1, NULL, NULL, NULL),
(22, 1, 'Pista', 1, NULL, NULL, NULL),
(23, 1, 'Water green', 1, '50 ML,100 ML,200 ML', NULL, NULL),
(24, 1, 'Olive green', 1, NULL, NULL, NULL),
(25, 1, 'Pale rose', 1, '50 ML,100 ML', NULL, NULL),
(26, 1, 'Deep orange', 1, NULL, NULL, NULL),
(27, 1, 'Signal red', 1, NULL, NULL, NULL),
(28, 1, 'Po red', 1, NULL, NULL, NULL),
(29, 1, 'Auto red', 1, '50 ML,100 ML,200 ML', NULL, NULL),
(30, 1, 'Magenta', 1, '50 ML,100 ML', NULL, NULL),
(31, 1, 'Cherry', 1, NULL, NULL, NULL),
(32, 1, 'Mahogany', 1, '50 ML,100 ML', NULL, NULL),
(33, 1, 'Smoke grey', 1, NULL, NULL, NULL),
(34, 1, 'Tata smoke grey', 1, '50 ML,100 ML,200 ML', NULL, NULL),
(35, 1, 'Black', 1, NULL, NULL, NULL),
(36, 1, 'Truck brown', 1, '50 ML,100 ML,200 ML', NULL, NULL),
(37, 1, 'Golden brown', 1, NULL, NULL, NULL),
(38, 1, 'Asian brown', 1, '50 ML,100 ML,200 ML', NULL, NULL),
(39, 1, 'Dark brown', 1, NULL, NULL, NULL),
(40, 1, 'Black board black enamel', 1, '50 ML,100 ML,200 ML', NULL, NULL),
(41, 1, 'Irish cream', 1, '50 ML,100 ML,200 ML', NULL, NULL),
(42, 2, 'Milk white', 1, NULL, NULL, NULL),
(43, 2, 'Br white', 1, NULL, NULL, NULL),
(44, 2, 'Golden brown', 1, NULL, NULL, NULL),
(45, 2, 'Lemon yellow', 1, NULL, NULL, NULL),
(46, 2, 'Golden yellow', 1, NULL, NULL, NULL),
(47, 2, 'Irish cream', 1, NULL, NULL, NULL),
(48, 3, 'White wood primers', 1, NULL, NULL, NULL),
(49, 3, 'Pink wood primers', 1, NULL, NULL, NULL),
(50, 3, 'Synthetic clear varnis', 1, NULL, NULL, NULL),
(51, 4, 'HT EM green', 1, NULL, NULL, NULL),
(52, 4, 'HT blue', 1, NULL, NULL, NULL),
(53, 4, 'Ht sliver ash', 1, NULL, NULL, NULL),
(54, 4, 'Aluminium paints', 1, NULL, NULL, NULL),
(55, 5, 'SKPS grey primers', 1, NULL, NULL, NULL),
(56, 5, 'Red oxide metal primers', 1, NULL, NULL, NULL),
(57, 5, 'Zinc chromate yellow primers', 1, NULL, NULL, NULL),
(58, 6, 'FR red', 1, NULL, NULL, NULL),
(59, 6, 'Olive green 236', 1, NULL, NULL, NULL),
(60, 6, 'Olive green 495', 1, NULL, NULL, NULL),
(61, 6, 'Silver grey', 1, NULL, NULL, NULL),
(62, 6, 'Nickel grey', 1, NULL, NULL, NULL),
(63, 7, 'Milk white', 1, NULL, NULL, NULL),
(64, 7, 'Br white', 1, NULL, NULL, NULL),
(65, 7, 'Golden yellow', 1, NULL, NULL, NULL),
(66, 7, 'Lemon yellow', 1, NULL, NULL, NULL),
(67, 7, 'Rig spl yellow', 1, NULL, NULL, NULL),
(68, 7, 'Phiroza blue', 1, NULL, NULL, NULL),
(69, 7, 'Oxfors blue', 1, NULL, NULL, NULL),
(70, 7, 'Royal blue', 1, NULL, NULL, NULL),
(71, 7, 'Mint green', 1, NULL, NULL, NULL),
(72, 7, 'Bus green', 1, NULL, NULL, NULL),
(73, 7, 'Deep green', 1, NULL, NULL, NULL),
(74, 7, 'Deep orange', 1, NULL, NULL, NULL),
(75, 7, 'Single red', 1, NULL, NULL, NULL),
(76, 7, 'Po red', 1, NULL, NULL, NULL),
(77, 7, 'Auto red', 1, NULL, NULL, NULL),
(78, 7, 'Smoke grey', 1, NULL, NULL, NULL),
(79, 7, 'Tata smoke grey', 1, NULL, NULL, NULL),
(80, 7, 'black', 1, NULL, NULL, NULL),
(81, 7, 'Truck brown', 1, NULL, NULL, NULL),
(82, 7, 'Golden brown', 1, NULL, NULL, NULL),
(83, 7, 'Asian brown', 1, NULL, NULL, NULL),
(84, 7, 'Irish cream', 1, NULL, NULL, NULL),
(85, 7, 'Da grey', 1, NULL, NULL, NULL),
(86, 7, 'Dlx da grey', 1, NULL, NULL, NULL),
(87, 7, 'Spl da grey', 1, NULL, NULL, NULL),
(88, 7, 'Nickel grey', 1, NULL, NULL, NULL),
(89, 7, 'Sliver grey', 1, NULL, NULL, NULL),
(90, 7, 'C&p white', 1, NULL, NULL, NULL),
(91, 7, 'Japan black', 1, NULL, NULL, NULL),
(92, 7, 'Red oxide primer', 1, NULL, NULL, NULL),
(93, 7, 'Lorry blue', 1, NULL, NULL, NULL),
(94, 7, 'Matt black', 1, NULL, NULL, NULL),
(95, 8, 'Primer', 1, NULL, NULL, NULL),
(96, 9, 'Bright green', 1, NULL, NULL, NULL),
(97, 9, 'Yellow', 1, NULL, NULL, NULL),
(98, 9, 'Green yellow', 1, NULL, NULL, NULL),
(99, 10, 'Cool roof cote', 1, NULL, NULL, NULL),
(100, 11, 'Crack past', 1, NULL, NULL, NULL),
(101, 12, 'Acrylic putty', 1, NULL, NULL, NULL),
(102, 1, 'SPL DA grey', 1, '50 ML,100 ML,200 ML', NULL, NULL),
(103, 1, 'Silver grey', 1, '50 ML,100 ML', NULL, NULL),
(104, 1, 'Nickel grey', 1, '50 ML,100 ML,200 ML', NULL, NULL),
(105, 5, 'SKPS white primers', 1, NULL, NULL, NULL),
(106, 8, 'Unimax(Economic pack)', 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cat_id` bigint(20) UNSIGNED DEFAULT NULL,
  `size_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size_status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `size`
--

INSERT INTO `size` (`id`, `cat_id`, `size_name`, `size_status`, `created_at`, `updated_at`) VALUES
(1, 1, '50 ML', 1, NULL, NULL),
(2, 1, '100 ML', 1, NULL, NULL),
(3, 1, '200 ML', 1, NULL, NULL),
(4, 1, '500 ML', 1, NULL, NULL),
(5, 1, '1 LTR', 1, NULL, NULL),
(6, 1, '4 LTR', 1, NULL, NULL),
(7, 1, '20 LTR', 1, NULL, NULL),
(8, 2, '500 ML', 1, NULL, NULL),
(9, 2, '1 LTR', 1, NULL, NULL),
(10, 2, '4 LTR', 1, NULL, NULL),
(11, 3, '200 ML', 1, NULL, NULL),
(12, 3, '500 ML', 1, NULL, NULL),
(13, 3, '1 LTR', 1, NULL, NULL),
(14, 3, '4 LTR', 1, NULL, NULL),
(15, 3, '20 LTR', 1, NULL, NULL),
(16, 4, '200 ML', 1, NULL, NULL),
(17, 4, '500 ML', 1, NULL, NULL),
(18, 4, '1 LTR', 1, NULL, NULL),
(19, 4, '4 LTR', 1, NULL, NULL),
(20, 4, '20 LTR', 1, NULL, NULL),
(21, 5, '200 ML', 1, NULL, NULL),
(22, 5, '500 ML', 1, NULL, NULL),
(23, 5, '1 LTR', 1, NULL, NULL),
(24, 5, '4 LTR', 1, NULL, NULL),
(25, 5, '20 LTR', 1, NULL, NULL),
(26, 6, '500 ML', 1, NULL, NULL),
(27, 6, '1 LTR', 1, NULL, NULL),
(28, 6, '4 LTR', 1, NULL, NULL),
(29, 6, '20 LTR', 1, NULL, NULL),
(30, 7, '500 ML', 1, NULL, NULL),
(31, 7, '1 LTR', 1, NULL, NULL),
(32, 7, '4 LTR', 1, NULL, NULL),
(33, 7, '20 LTR', 1, NULL, NULL),
(34, 8, '500 ML', 1, NULL, NULL),
(35, 8, '1 LTR', 1, NULL, NULL),
(36, 8, '4 LTR', 1, NULL, NULL),
(37, 8, '10 LTR', 1, NULL, NULL),
(38, 9, '500 ML', 1, NULL, NULL),
(39, 9, '1 LTR', 1, NULL, NULL),
(40, 9, '4 LTR', 1, NULL, NULL),
(41, 9, '10 LTR', 1, NULL, NULL),
(42, 9, '20 LTR', 1, NULL, NULL),
(43, 10, '1 LTR', 1, NULL, NULL),
(44, 10, '4 LTR', 1, NULL, NULL),
(45, 10, '10 LTR', 1, NULL, NULL),
(46, 10, '20 LTR', 1, NULL, NULL),
(47, 11, '1 KG', 1, NULL, NULL),
(48, 12, '1 KG', 1, NULL, NULL),
(49, 12, '5 KG', 1, NULL, NULL),
(50, 8, '20 LTR', 1, NULL, NULL),
(51, 12, '10 KG', 1, NULL, NULL),
(52, 12, '20 KG', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `size_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size_status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`id`, `size_name`, `size_status`, `created_at`, `updated_at`) VALUES
(1, '50 ML', 1, NULL, NULL),
(2, '100 ML', 1, NULL, NULL),
(3, '200 ML', 1, NULL, NULL),
(4, '500 ML', 1, NULL, NULL),
(5, '1 LTR', 1, NULL, NULL),
(6, '4 LTR', 1, NULL, NULL),
(7, '10 LTR', 1, NULL, NULL),
(8, '20 LTR', 1, NULL, NULL),
(9, '1 KG', 1, NULL, NULL),
(10, '5 KG', 1, NULL, NULL),
(11, '10 KG', 1, NULL, NULL),
(12, '20 KG', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `dealer_id` bigint(20) UNSIGNED DEFAULT NULL,
  `date` date DEFAULT NULL,
  `mode` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invoice_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `inward` bigint(20) NOT NULL DEFAULT 0,
  `outward` bigint(20) NOT NULL DEFAULT 0,
  `credit_balance` bigint(20) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reg_id` int(111) DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `reg_id`, `email`, `password`, `user_role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'sds', 2, 'ravi@gmail.com', '$2y$10$xXV1.vIAMRCqIB/Z1GhFYejwDgNvPJ2.Fh9uv7PaMoewQYp1xSIcq', 'user', NULL, '2022-01-25 06:54:48', '2022-01-25 06:54:48'),
(7, 'aapple', 5, 'admin@gmail.com', '$2y$10$MY3tXY4GyaMS2gosh/YNKe4XSGRwvpHk9Pg6eGq0St3hdQ.4TsYqu', 'admin', NULL, '2022-01-27 05:01:03', '2022-01-27 05:01:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dealers`
--
ALTER TABLE `dealers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_dealer_id_index` (`dealer_id`);

--
-- Indexes for table `orders_data`
--
ALTER TABLE `orders_data`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_data_order_id_index` (`order_id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_cat_id_index` (`cat_id`);

--
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`),
  ADD KEY `size_cat_id_index` (`cat_id`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_dealer_id_index` (`dealer_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `dealers`
--
ALTER TABLE `dealers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders_data`
--
ALTER TABLE `orders_data`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_cat_id_foreign` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `size`
--
ALTER TABLE `size`
  ADD CONSTRAINT `size_cat_id_foreign` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
