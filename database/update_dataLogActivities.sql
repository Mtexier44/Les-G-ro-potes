-- Mettre à jour l'action pour une activité spécifique
UPDATE log_activity
SET action = 'nouvelle_action'
WHERE id = 1; -- Remplacez 1 par l'ID de l'activité à mettre à jour

-- Mettre à jour les détails pour une activité spécifique
UPDATE log_activity
SET details = 'nouveaux_details'
WHERE id = 1; -- Remplacez 1 par l'ID de l'activité à mettre à jour

-- Mettre à jour la date de l'action pour une activité spécifique
UPDATE log_activity
SET date_action = '2025-01-01'
WHERE id = 1; -- Remplacez 1 par l'ID de l'activité à mettre à jour

-- Mettre à jour plusieurs colonnes d'une activité spécifique
UPDATE log_activity
SET action = 'nouvelle_action',
    date_action = '2025-01-01',
    details = 'nouveaux_details'
WHERE id = 1; -- Remplacez 1 par l'ID de l'activité cible

-- Mettre à jour l'action pour toutes les activités d'un utilisateur spécifique
UPDATE log_activity
SET action = 'nouvelle_action'
WHERE utilisateur_id = 3; -- Remplacez 3 par l'ID de l'utilisateur cible

-- Marquer toutes les activités d'une plage de dates comme révisées (par exemple, mettre "details" à jour)
UPDATE log_activity
SET details = 'Révisé'
WHERE date_action BETWEEN '2025-01-01' AND '2025-01-31'; -- Remplacez par vos dates

-- Vérification des mises à jour
SELECT * FROM log_activity
WHERE id = 1; -- Vérifiez les résultats pour l'ID mis à jour