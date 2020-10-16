-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 16 oct. 2020 à 10:44
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `name` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`name`, `firstname`, `email`, `password`) VALUES
('', '', '', ''),
('gautier', 'Gautier', 'test@email.com', 'test123'),
('Dupont', 'Jean michel', 'test@email.com', '$2b$10$tLWKE/DsW1Pptxx8hxdWaOPXQ3TSyquDHv53upUERitWSw6y9jale'),
('Dupont', 'jean', 'test@email.com', '$2b$10$WvNg8SWYJO2pzqA1KcSB7OgVtNOcG1HyE.VAPAOGeAR6frqFxqyha'),
('Dupont', 'jean', 'test@email.com', '$2b$10$ev31FEbcFj2sN2w/EIVyi.oapm0adHlMeHbJ6F9HdOlA2/1Ta.lOS');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
