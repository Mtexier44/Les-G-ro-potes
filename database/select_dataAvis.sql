-- Sélectionner tous les avis
SELECT * FROM avis;

-- Sélectionner un avis spécifique par son ID
SELECT * FROM avis
WHERE id = 1; -- Remplacez 1 par l'ID de l'avis cible

-- Sélectionner tous les avis laissés par un utilisateur spécifique
SELECT * FROM avis
WHERE utilisateur_id = 3; -- Remplacez 3 par l'ID de l'utilisateur

-- Sélectionner tous les avis concernant une entreprise spécifique
SELECT * FROM avis
WHERE entreprise_id = 2; -- Remplacez 2 par l'ID de l'entreprise

-- Sélectionner tous les avis pour un service spécifique
SELECT * FROM avis
WHERE service_id = 5; -- Remplacez 5 par l'ID du service

-- Sélectionner tous les avis avec une note supérieure ou égale à 4
SELECT * FROM avis
WHERE note >= 4;

-- Sélectionner tous les avis contenant un mot-clé spécifique dans le commentaire
SELECT * FROM avis
WHERE commentaire LIKE '%excellent%'; -- Remplacez "excellent" par le mot-clé recherché

-- Sélectionner tous les avis laissés à une date spécifique
SELECT * FROM avis
WHERE date_avis = '2025-01-01'; -- Remplacez par la date au format YYYY-MM-DD

-- Sélectionner tous les avis laissés dans une plage de dates
SELECT * FROM avis
WHERE date_avis BETWEEN '2025-01-01' AND '2025-01-31'; -- Remplacez par vos dates cible

-- Compter le nombre total d'avis pour une entreprise spécifique
SELECT COUNT(*) AS total_avis
FROM avis
WHERE entreprise_id = 2; -- Remplacez 2 par l'ID de l'entreprise

-- Calculer la moyenne des notes pour un service spécifique
SELECT AVG(note) AS moyenne_note
FROM avis
WHERE service_id = 5; -- Remplacez 5 par l'ID du service

-- Lister tous les avis triés par date (décroissant)
SELECT * FROM avis
ORDER BY date_avis DESC;

-- Lister tous les avis triés par note (croissant)
SELECT * FROM avis
ORDER BY note ASC;

-- Vérification des données
SELECT * FROM avis LIMIT 10; -- Affiche les 10 premiers avis pour vérification