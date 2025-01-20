-- Sélectionner toutes les réservations
SELECT * FROM reservation;

-- Sélectionner une réservation spécifique par son ID
SELECT * FROM reservation
WHERE id = 1; -- Remplacez 1 par l'ID de la réservation souhaitée

-- Sélectionner toutes les réservations d'un utilisateur spécifique par son ID
SELECT * FROM reservation
WHERE utilisateur_id = 1; -- Remplacez 1 par l'ID de l'utilisateur

-- Sélectionner toutes les réservations pour un service spécifique par son ID
SELECT * FROM reservation
WHERE service_id = 1; -- Remplacez 1 par l'ID du service

-- Sélectionner toutes les réservations effectuées à une date précise
SELECT * FROM reservation
WHERE date_reservation = '2025-01-10'; -- Remplacez la date par la date souhaitée (format YYYY-MM-DD)

-- Sélectionner toutes les réservations avec un certain statut
SELECT * FROM reservation
WHERE status = 'confirmée'; -- Remplacez 'confirmée' par le statut souhaité (ex. 'annulée', 'en attente')


-- Sélectionner toutes les reservations avec un statut en attente
SELECT * FROM reservation
WHERE status = 'en attente';

-- Sélectionner toutes les réservations avec un statu annulée
SELECT * FROM reservation
WHERE status = 'annulée';

-- Sélectionner toutes les réservations avec un statut terminée
SELECT * FROM reservation
WHERE status = 'terminée';

-- Sélectionner toutes les réservations avec des notes vides et des statuts spécifiques
SELECT * FROM reservation
WHERE notes = '' AND status IN ('confirmée', 'en attente', 'annulée', 'terminée');

-- Sélectionner toutes les réservations avec des notes non vides et des statuts spécifiques
SELECT * FROM reservation
WHERE notes IS NOT NULL AND notes != '';

-- Sélectionner toutes les réservations avec des notes vides
SELECT * FROM reservation
WHERE notes = '';

-- Sélectionner toutes les réservations avec des notes
SELECT * FROM reservation
WHERE notes IS NOT NULL;

-- Sélectionner toutes les réservations où des notes ont été ajoutées
SELECT * FROM reservation
WHERE notes IS NOT NULL AND notes != '';

-- Sélectionner toutes les réservations avec un statut et une date spécifique
SELECT * FROM reservation
WHERE status = 'confirmée'
  AND date_reservation = '2025-01-10'; -- Remplacez par la date souhaitée

-- Sélectionner toutes les réservations triées par date (croissante)
SELECT * FROM reservation
ORDER BY date_reservation ASC;

-- Sélectionner toutes les réservations triées par date (décroissante)
SELECT * FROM reservation
ORDER BY date_reservation DESC;

-- Compter le nombre total de réservations dans la table
SELECT COUNT(*) AS total_reservations FROM reservation;

-- Compter le nombre de réservations pour un utilisateur spécifique
SELECT COUNT(*) AS total_reservations_utilisateur
FROM reservation
WHERE utilisateur_id = 1; -- Remplacez 1 par l'ID de l'utilisateur

-- Sélectionner les réservations avec des statuts spécifiques (exemple : confirmée ou en attente)
SELECT * FROM reservation
WHERE status IN ('confirmée', 'en attente');

-- Sélectionner toutes les réservations pour un utilisateur et un service spécifiques
SELECT * FROM reservation
WHERE utilisateur_id = 1
  AND service_id = 1; -- Remplacez les IDs par ceux des utilisateurs et services souhaités

-- Sélectionner toutes les réservations effectuées dans une plage de dates
SELECT * FROM reservation
WHERE date_reservation BETWEEN '2025-01-01' AND '2025-01-31'; -- Remplacez les dates par la plage souhaitée

-- Vérifier les réservations ayant des notes spécifiques (par exemple, contenant un mot clé)
SELECT * FROM reservation
WHERE notes LIKE '%important%'; -- Remplacez 'important' par le mot clé souhaité