-- Mettre à jour le statut d'une réservation par son ID
UPDATE reservation
SET status = 'confirmée' -- Remplacez 'confirmée' par le statut souhaité (ex. 'annulée', 'en attente')
WHERE id = 1; -- Remplacez 1 par l'ID de la réservation à mettre à jour

-- Mettre à jour la date d'une réservation par son ID
UPDATE reservation
SET date_reservation = '2025-01-15' -- Remplacez par la nouvelle date au format YYYY-MM-DD
WHERE id = 1; -- Remplacez 1 par l'ID de la réservation

-- Mettre à jour les notes d'une réservation par son ID
UPDATE reservation
SET notes = 'Nouvelles notes ajoutées'
WHERE id = 1; -- Remplacez 1 par l'ID de la réservation

-- Mettre à jour le service d'une réservation par son ID
UPDATE reservation
SET service_id = 2 -- Remplacez 2 par l'ID du nouveau service
WHERE id = 1; -- Remplacez 1 par l'ID de la réservation

-- Mettre à jour l'utilisateur associé à une réservation par son ID
UPDATE reservation
SET utilisateur_id = 3 -- Remplacez 3 par l'ID du nouvel utilisateur
WHERE id = 1; -- Remplacez 1 par l'ID de la réservation

-- Mettre à jour plusieurs champs d'une réservation par son ID
UPDATE reservation
SET utilisateur_id = 3,         -- Remplacez 3 par l'ID du nouvel utilisateur
    service_id = 2,             -- Remplacez 2 par l'ID du nouveau service
    date_reservation = '2025-01-15', -- Remplacez par la nouvelle date
    status = 'en attente',      -- Remplacez par le nouveau statut
    notes = 'Mise à jour complète des informations'
WHERE id = 1; -- Remplacez 1 par l'ID de la réservation

-- Appliquer un statut par défaut ("en attente") à toutes les réservations sans statut
UPDATE reservation
SET status = 'en attente'
WHERE status IS NULL OR status = '';

-- Modifier la date de toutes les réservations ayant un certain statut
UPDATE reservation
SET date_reservation = '2025-02-01' -- Remplacez par la nouvelle date
WHERE status = 'confirmée'; -- Remplacez 'confirmée' par le statut cible

-- Ajouter des notes standardisées à toutes les réservations sans notes
UPDATE reservation
SET notes = 'Pas de notes pour cette réservation'
WHERE notes IS NULL OR notes = '';

-- Appliquer une mise à jour groupée pour changer le statut de toutes les réservations à une date précise
UPDATE reservation
SET status = 'terminée' -- Remplacez 'terminée' par le nouveau statut
WHERE date_reservation = '2025-01-10'; -- Remplacez par la date cible au format YYYY-MM-DD

-- Vérifier les mises à jour appliquées
SELECT * FROM reservation
WHERE id = 1; -- Remplacez 1 par l'ID de la réservation pour vérifier