-- Sélectionner tous les messages
SELECT * FROM message;

-- Sélectionner un message spécifique par son ID
SELECT * FROM message
WHERE id = 1; -- Remplacez 1 par l'ID du message que vous souhaitez récupérer

-- Sélectionner tous les messages envoyés par un utilisateur spécifique
SELECT * FROM message
WHERE utilisateur_id = 3; -- Remplacez 3 par l'ID de l'utilisateur

-- Sélectionner tous les messages reçus par une entreprise spécifique
SELECT * FROM message
WHERE entreprise_id = 2; -- Remplacez 2 par l'ID de l'entreprise

-- Sélectionner tous les messages envoyés à une entreprise par un utilisateur spécifique
SELECT * FROM message
WHERE utilisateur_id = 3 AND entreprise_id = 2; -- Remplacez 3 et 2 par les IDs appropriés

-- Sélectionner tous les messages envoyés à une date spécifique
SELECT * FROM message
WHERE date_envoi = '2025-01-01'; -- Remplacez par la date cible au format YYYY-MM-DD

-- Sélectionner tous les messages envoyés dans une plage de dates
SELECT * FROM message
WHERE date_envoi BETWEEN '2025-01-01' AND '2025-01-31'; -- Remplacez par vos dates cible

-- Sélectionner tous les messages non lus
SELECT * FROM message
WHERE lu = 0; -- 0 représente "non lu", remplacez par votre convention si différente

-- Sélectionner tous les messages lus
SELECT * FROM message
WHERE lu = 1; -- 1 représente "lu", remplacez par votre convention si différente

-- Compter le nombre total de messages dans la table
SELECT COUNT(*) AS total_messages FROM message;

-- Compter le nombre de messages non lus pour une entreprise spécifique
SELECT COUNT(*) AS messages_non_lus
FROM message
WHERE entreprise_id = 2 AND lu = 0; -- Remplacez 2 par l'ID de l'entreprise cible

-- Lister tous les messages triés par date d'envoi (croissant)
SELECT * FROM message
ORDER BY date_envoi ASC;

-- Lister tous les messages triés par date d'envoi (décroissant)
SELECT * FROM message
ORDER BY date_envoi DESC;

-- Sélectionner les messages contenant un mot-clé spécifique
SELECT * FROM message
WHERE message LIKE '%mot_clé%'; -- Remplacez "mot_clé" par le mot ou la phrase recherchée


-- Sélectionner les messages envoyés par des utilisateurs spécifiques ayant des critères précis
SELECT * FROM message
WHERE utilisateur_id IN (
    SELECT id FROM utilisateur WHERE ville = 'Paris' AND role = 'client'
); -- Remplacez "Paris" et "client" par vos critères

-- Sélectionner les messages pour une entreprise spécifique, triés par état de lecture et date d'envoi
SELECT * FROM message
WHERE entreprise_id = 2
ORDER BY lu ASC, date_envoi DESC; -- Remplacez 2 par l'ID de l'entreprise cible

-- Vérifier les données pour déboguer ou tester des suppressions ou mises à jour
SELECT * FROM message LIMIT 10; -- Affiche les 10 premiers messages pour vérification