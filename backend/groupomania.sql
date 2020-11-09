-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 09 nov. 2020 à 10:18
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
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `authorname` varchar(255) NOT NULL,
  `authorfirstname` varchar(255) NOT NULL,
  `authorid` varchar(255) NOT NULL,
  `publicationid` varchar(255) NOT NULL,
  `commentary` varchar(255) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `authorname`, `authorfirstname`, `authorid`, `publicationid`, `commentary`, `date`) VALUES
(18, 'Célair', 'Jacques', '13', '48', 'Oh non pas Batman ! Je préfère Superman !', '2020-11-06 14:00:18'),
(19, 'Raque', 'Eric', '12', '50', 'Magnifique photo Jacques ! Tu nous raconteras à ton retour pendant la pause café !', '2020-11-06 14:06:33'),
(20, 'Raque', 'Eric', '12', '48', 'Moi je veux bien sa Batmobile si c\'est possible !', '2020-11-06 14:07:03'),
(21, 'Caman', 'Medhi', '15', '51', 'Tu vas pouvoir faire des heures sup :D', '2020-11-06 14:07:49'),
(22, 'Caman', 'Medhi', '15', '48', 'J\'adore l\'univers Batman, mais uniquement avec le Joker !', '2020-11-06 14:08:21'),
(23, 'Caman', 'Medhi', '15', '50', 'Très jolie !', '2020-11-06 14:08:36'),
(24, 'Freichi', 'Sarah', '14', '51', 'Rien que ça ?', '2020-11-06 14:09:07'),
(25, 'Freichi', 'Sarah', '14', '50', 'On veut plus de photos comme ça !!!!! Trop beau !', '2020-11-06 14:09:33'),
(26, 'Freichi', 'Sarah', '14', '52', 'Si tu ne finis pas, tu sais à qui penser !', '2020-11-06 14:12:21'),
(27, 'Célair', 'Jacques', '13', '52', 'MIAM !', '2020-11-06 14:12:43'),
(29, 'Couturier', 'Gautier', '16', '52', 'Oh non j\'ai raté ça !', '2020-11-08 13:24:09');

-- --------------------------------------------------------

--
-- Structure de la table `publications`
--

CREATE TABLE `publications` (
  `id` int(11) NOT NULL,
  `authorname` varchar(255) NOT NULL,
  `authorfirstname` varchar(255) NOT NULL,
  `authorid` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `attachment` varchar(255) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `publications`
--

INSERT INTO `publications` (`id`, `authorname`, `authorfirstname`, `authorid`, `title`, `attachment`, `date`) VALUES
(48, 'Freichi', 'Sarah', '14', 'Mon personnage de fiction', 'http://localhost:3000/images/Batman.jpg1604667127440.jpg', '2020-11-06 13:52:07'),
(50, 'Célair', 'Jacques', '13', 'Voici une photo de mes dernières vacances :', 'http://localhost:3000/images/Vacances.jpg1604667596101.jpg', '2020-11-06 13:59:56'),
(51, 'Raque', 'Eric', '12', 'Qui rêve d\'avoir cette voiture ? Moi OUI !!!!!', 'http://localhost:3000/images/Voiture.jpg1604667959975.jpg', '2020-11-06 14:05:59'),
(52, 'Caman', 'Medhi', '15', 'Voici mon repas de midi ! Pour la liste des ingrédients, venez me voir a la cafétéria !', 'http://localhost:3000/images/repas.jpg1604668306563.jpg', '2020-11-06 14:11:46');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `firstname`, `createdAt`, `updatedAt`, `role`) VALUES
(8, 'admin@admin.com', '$2b$10$MPx7UEXcXYDGaitjNgRvf.sjo93HyGrayf7dnK7fwbg4f3yOK6/fW', 'Admin', 'Admin', '2020-11-03 17:56:28', '2020-11-03 17:56:28', 'admin'),
(12, 'test2@email.com', '$2b$10$A.S.NU4z4A078f23QGYDr.XH0GJ3c7lb0slni1FdS39eLWz86Mj.2', 'Raque', 'Eric', '2020-11-06 12:05:17', '2020-11-06 12:05:17', 'user'),
(13, 'test3@email.com', '$2b$10$diFz77ULcdiMWR5MyJ6Rm.XMOcwAGAOzN4JLrbY9SQI31dsG17vbu', 'Célair', 'Jacques', '2020-11-06 12:06:25', '2020-11-06 12:06:25', 'user'),
(14, 'test@email.com', '$2b$10$p6Pk3IQnoHVcDQumuKcUWeaAceE7YYdtM0tmVIs8q9Q4D6lJwe9xa', 'Freichi', 'Sarah', '2020-11-06 12:07:26', '2020-11-06 12:07:26', 'user'),
(15, 'test4@email.com', '$2b$10$LbB6QbDhQGsAk2BV/GOytu4DS/xq8kyxYOwXu1LIgFLokN/meD4Ge', 'Caman', 'Medhi', '2020-11-06 12:08:09', '2020-11-06 12:08:09', 'user');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `publications`
--
ALTER TABLE `publications`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pour la table `publications`
--
ALTER TABLE `publications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
