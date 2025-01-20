-- Supprimer toutes les réservations associées à un service spécifique
DELETE FROM reservation
WHERE service_id = 2; -- Remplacez 2 par l'ID du service cible

-- Supprimer toutes les réservations d'une date spécifique
DELETE FROM reservation
WHERE date_reservation = '2025-01-15'; -- Remplacez par la date cible au format YYYY-MM-DD

-- Supprimer toutes les réservations ayant un statut spécifique
DELETE FROM reservation
WHERE status = 'annulée'; -- Remplacez 'annulée' par le statut cible

-- Supprimer toutes les réservations sans notes
DELETE FROM reservation
WHERE notes IS NULL OR notes = '';

-- Supprimer toutes les réservations d'une certaine localisation en fonction du service
DELETE FROM reservation
WHERE service_id IN (
    SELECT id FROM service WHERE localisation = 'Paris'
); -- Remplacez 'Paris' par la localisation cible

-- Supprimer toutes les réservations qui sont terminées (statut = 'terminée')
DELETE FROM reservation
WHERE status = 'terminée';

-- Supprimer toutes les réservations plus anciennes qu'une certaine date
DELETE FROM reservation
WHERE date_reservation < '2025-01-01'; -- Remplacez par la date limite au format YYYY-MM-DD

-- Supprimer toutes les réservations
DELETE FROM reservation;

-- Vérifier les suppressions appliquées
SELECT * FROM reservation;