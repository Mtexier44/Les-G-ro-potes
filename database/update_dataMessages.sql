-- Mettre à jour le contenu d'un message par son ID
UPDATE message
SET message = 'Nouveau contenu du message'
WHERE id = 1; -- Remplacez 1 par l'ID du message à modifier

-- Marquer un message comme lu par son ID
UPDATE message
SET lu = 1
WHERE id = 1; -- Remplacez 1 par l'ID du message à mettre à jour

-- Mettre à jour la date d'envoi d'un message
UPDATE message
SET date_envoi = '2025-01-01'
WHERE id = 2; -- Remplacez 2 par l'ID du message cible et la date par la valeur souhaitée

-- Changer l'utilisateur associé à un message
UPDATE message
SET utilisateur_id = 4
WHERE id = 3; -- Remplacez 3 par l'ID du message et 4 par le nouvel ID utilisateur

-- Changer l'entreprise associée à un message
UPDATE message
SET entreprise_id = 5
WHERE id = 3; -- Remplacez 3 par l'ID du message et 5 par le nouvel ID entreprise

-- Mettre à jour plusieurs colonnes d'un message
UPDATE message
SET message = 'Contenu mis à jour',
    date_envoi = '2025-01-02',
    lu = 1
WHERE id = 4; -- Remplacez 4 par l'ID du message cible

-- Marquer tous les messages d'un utilisateur comme lus
UPDATE message
SET lu = 1
WHERE utilisateur_id = 3; -- Remplacez 3 par l'ID de l'utilisateur cible

-- Marquer tous les messages pour une entreprise comme non lus
UPDATE message
SET lu = 0
WHERE entreprise_id = 2; -- Remplacez 2 par l'ID de l'entreprise cible

-- Modifier tous les messages contenant un mot-clé spécifique
UPDATE message
SET message = REPLACE(message, 'mot_clé', 'nouveau_mot_clé')
WHERE message LIKE '%mot_clé%'; -- Remplacez "mot_clé" et "nouveau_mot_clé" par les valeurs appropriées

-- Mettre à jour le statut de lecture de tous les messages dans une plage de dates
UPDATE message
SET lu = 1
WHERE date_envoi BETWEEN '2025-01-01' AND '2025-01-31'; -- Remplacez par vos dates cible

-- Ajouter une note ou un texte complémentaire à un message spécifique
UPDATE message
SET message = message || ' - Note ajoutée.'
WHERE id = 6; -- Remplacez 6 par l'ID du message cible

-- Vérifier les mises à jour effectuées
SELECT * FROM message WHERE id = 1; -- Remplacez 1 par l'ID à vérifier
SELECT * FROM message WHERE utilisateur_id = 3; -- Vérifier pour un utilisateur spécifique
SELECT * FROM message WHERE lu = 0; -- Vérifier pour un utilisateur