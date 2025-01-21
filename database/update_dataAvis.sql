-- Mettre à jour la note d'un avis spécifique
UPDATE avis
SET note = 5
WHERE id = 1; -- Remplacez 1 par l'ID de l'avis cible

-- Mettre à jour le commentaire d'un avis spécifique
UPDATE avis
SET commentaire = 'Service excellent et très professionnel'
WHERE id = 1; -- Remplacez 1 par l'ID de l'avis cible

-- Mettre à jour la date d'un avis spécifique
UPDATE avis
SET date_avis = '2025-01-02'
WHERE id = 1; -- Remplacez 1 par l'ID de l'avis cible

-- Mettre à jour plusieurs colonnes pour un avis spécifique
UPDATE avis
SET note = 4,
    commentaire = 'Bon service, mais quelques améliorations nécessaires',
    date_avis = '2025-01-03'
WHERE id = 1; -- Remplacez 1 par l'ID de l'avis cible

-- Mettre à jour tous les avis d'un utilisateur spécifique pour ajuster la note
UPDATE avis
SET note = note + 1
WHERE utilisateur_id = 3 AND note < 5; -- Remplacez 3 par l'ID de l'utilisateur

-- Marquer tous les avis laissés avant une certaine date comme "anciens"
UPDATE avis
SET commentaire = 'Avis ancien : ' || commentaire
WHERE date_avis < '2024-12-31'; -- Remplacez par la date cible

-- Vérification des mises à jour
SELECT * FROM avis
WHERE id = 1; -- Vérifiez les résultats pour l'ID mis à jour