-- Supprimer une activité spécifique par son ID
DELETE FROM log_activity
WHERE id = 1; -- Remplacez 1 par l'ID de l'activité à supprimer

-- Supprimer toutes les activités d'un utilisateur spécifique
DELETE FROM log_activity
WHERE utilisateur_id = 3; -- Remplacez 3 par l'ID de l'utilisateur cible

-- Supprimer toutes les activités d'une date spécifique
DELETE FROM log_activity
WHERE date_action = '2025-01-01'; -- Remplacez par la date cible au format YYYY-MM-DD

-- Supprimer toutes les activités d'une plage de dates
DELETE FROM log_activity
WHERE date_action BETWEEN '2025-01-01' AND '2025-01-31'; -- Remplacez par vos dates

-- Supprimer toutes les activités associées à une action spécifique
DELETE FROM log_activity
WHERE action = 'connexion'; -- Remplacez "connexion" par l'action à supprimer

-- Supprimer toutes les activités dont les détails contiennent un mot-clé spécifique
DELETE FROM log_activity
WHERE details LIKE '%mot_clé%'; -- Remplacez "mot_clé" par le texte recherché

-- Supprimer toutes les activités d'un utilisateur spécifique à une date précise
DELETE FROM log_activity
WHERE utilisateur_id = 3 AND date_action = '2025-01-01'; -- Remplacez 3 et la date par les valeurs appropriées

-- Vérification des suppressions
SELECT * FROM log_activity LIMIT 10; -- Vérifiez les résultats pour voir ce qui reste dans la table