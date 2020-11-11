-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 11 nov. 2020 à 15:56
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
  `authorid` int(11) NOT NULL,
  `publicationid` int(11) NOT NULL,
  `commentary` varchar(255) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `authorname`, `authorfirstname`, `authorid`, `publicationid`, `commentary`, `date`) VALUES
(62, 'Célair', 'Jacques', 13, 71, 'Vive Batman !!', '2020-11-11 15:49:29'),
(64, 'Caman', 'Medhi', 15, 71, 'Je suis team Superman.', '2020-11-11 15:50:37'),
(67, 'Caman', 'Medhi', 15, 74, 'Ah quand même !', '2020-11-11 15:54:12'),
(68, 'Caman', 'Medhi', 15, 75, 'Et sans colorants !!!', '2020-11-11 15:54:44'),
(69, 'Freichi', 'Sarah', 14, 75, 'Ca donne faim !', '2020-11-11 15:55:04'),
(70, 'Freichi', 'Sarah', 14, 74, 'En rouge c\'est plus jolie.', '2020-11-11 15:55:45');

-- --------------------------------------------------------

--
-- Structure de la table `publications`
--

CREATE TABLE `publications` (
  `id` int(11) NOT NULL,
  `authorname` varchar(255) NOT NULL,
  `authorfirstname` varchar(255) NOT NULL,
  `authorid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `attachment` varchar(255) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `publications`
--

INSERT INTO `publications` (`id`, `authorname`, `authorfirstname`, `authorid`, `title`, `attachment`, `date`) VALUES
(71, 'Freichi', 'Sarah', 14, 'Mon personnage de fiction préféré !! Et vous c\'est lequel ?', 'Batman.jpg1605106121615.jpg', '2020-11-11 15:48:41'),
(74, 'Célair', 'Jacques', 13, 'La voiture de mes rêves :', 'Voiture.jpg1605106416750.jpg', '2020-11-11 15:53:36'),
(75, 'Caman', 'Medhi', 15, 'La dernière sauce que j\'ai créée !', 'téléchargement_(2).jpg1605106470412.jpg', '2020-11-11 15:54:30');

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_ibfk_1` (`publicationid`),
  ADD KEY `comments_ibfk_2` (`authorid`);

--
-- Index pour la table `publications`
--
ALTER TABLE `publications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `authorid` (`authorid`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT pour la table `publications`
--
ALTER TABLE `publications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`publicationid`) REFERENCES `publications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`authorid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `publications`
--
ALTER TABLE `publications`
  ADD CONSTRAINT `publications_ibfk_1` FOREIGN KEY (`authorid`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
