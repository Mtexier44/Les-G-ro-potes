-- Supprimer un avis spécifique par son ID
DELETE FROM avis
WHERE id = 1; -- Remplacez 1 par l'ID de l'avis à supprimer

-- Supprimer tous les avis d'un utilisateur spécifique
DELETE FROM avis
WHERE utilisateur_id = 3; -- Remplacez 3 par l'ID de l'utilisateur cible

-- Supprimer tous les avis concernant une entreprise spécifique
DELETE FROM avis
WHERE entreprise_id = 2; -- Remplacez 2 par l'ID de l'entreprise cible

-- Supprimer tous les avis pour un service spécifique
DELETE FROM avis
WHERE service_id = 5; -- Remplacez 5 par l'ID du service cible

-- Supprimer tous les avis laissés avant une certaine date
DELETE FROM avis
WHERE date_avis < '2024-12-31'; -- Remplacez par la date cible

-- Supprimer tous les avis ayant une note inférieure ou égale à 2
DELETE FROM avis
WHERE note <= 2;

-- Supprimer tous les avis contenant un mot-clé spécifique dans le commentaire
DELETE FROM avis
WHERE commentaire LIKE '%problème%'; -- Remplacez "problème" par le mot-clé recherché

-- Vérification des suppressions
SELECT * FROM avis LIMIT 10; -- Vérifiez les résultats pour voir ce qui reste dans la table