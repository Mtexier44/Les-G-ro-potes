-- Sélectionner toutes les activités de journalisation
SELECT * FROM log_activity;

-- Sélectionner une activité spécifique par son ID
SELECT * FROM log_activity
WHERE id = 1; -- Remplacez 1 par l'ID de l'activité recherchée

-- Sélectionner toutes les activités d'un utilisateur spécifique
SELECT * FROM log_activity
WHERE utilisateur_id = 3; -- Remplacez 3 par l'ID de l'utilisateur cible

-- Sélectionner toutes les activités d'un utilisateur à une date spécifique
SELECT * FROM log_activity
WHERE utilisateur_id = 3 AND date_action = '2025-01-01'; -- Remplacez 3 et la date cible

-- Sélectionner toutes les activités ayant eu lieu à une date spécifique
SELECT * FROM log_activity
WHERE date_action = '2025-01-01'; -- Remplacez par la date cible au format YYYY-MM-DD

-- Sélectionner toutes les activités ayant eu lieu dans une plage de dates
SELECT * FROM log_activity
WHERE date_action BETWEEN '2025-01-01' AND '2025-01-31'; -- Remplacez par vos dates cibles

-- Sélectionner toutes les activités associées à une action spécifique
SELECT * FROM log_activity
WHERE action = 'connexion'; -- Remplacez "connexion" par l'action recherchée

-- Sélectionner toutes les activités dont les détails contiennent un mot-clé spécifique
SELECT * FROM log_activity
WHERE details LIKE '%mot_clé%'; -- Remplacez "mot_clé" par le mot ou texte recherché

-- Compter le nombre total d'activités enregistrées dans le journal
SELECT COUNT(*) AS total_activites FROM log_activity;

-- Compter le nombre total d'activités pour un utilisateur spécifique
SELECT COUNT(*) AS total_activites_utilisateur
FROM log_activity
WHERE utilisateur_id = 3; -- Remplacez 3 par l'ID de l'utilisateur cible

-- Lister toutes les activités triées par date d'action (croissant)
SELECT * FROM log_activity
ORDER BY date_action ASC;

-- Lister toutes les activités triées par date d'action (décroissant)
SELECT * FROM log_activity
ORDER BY date_action DESC;

-- Sélectionner toutes les activités associées à une action spécifique pour un utilisateur spécifique
SELECT * FROM log_activity
WHERE utilisateur_id = 3 AND action = 'connexion'; -- Remplacez 3 et "connexion" par les valeurs recherchées

-- Vérifier les données pour tester des filtres ou des requêtes
SELECT * FROM log_activity LIMIT 10; -- Affiche les 10 premières lignes pour vérification
