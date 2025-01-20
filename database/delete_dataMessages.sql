-- Supprimer un message spécifique par son ID
DELETE FROM message
WHERE id = 1; -- Remplacez 1 par l'ID du message à supprimer

-- Supprimer tous les messages d'un utilisateur spécifique
DELETE FROM message
WHERE utilisateur_id = 3; -- Remplacez 3 par l'ID de l'utilisateur cible

-- Supprimer tous les messages pour une entreprise spécifique
DELETE FROM message
WHERE entreprise_id = 2; -- Remplacez 2 par l'ID de l'entreprise cible

-- Supprimer tous les messages envoyés à une date spécifique
DELETE FROM message
WHERE date_envoi = '2025-01-01'; -- Remplacez par la date cible au format YYYY-MM-DD

-- Supprimer tous les messages envoyés dans une plage de dates
DELETE FROM message
WHERE date_envoi BETWEEN '2025-01-01' AND '2025-01-31'; -- Remplacez par vos dates cible

-- Supprimer tous les messages non lus
DELETE FROM message
WHERE lu = 0; -- 0 représente "non lu", remplacez par votre convention si différente

-- Supprimer tous les messages contenant un mot-clé spécifique
DELETE FROM message
WHERE message LIKE '%mot_clé%'; -- Remplacez "mot_clé" par le texte ou mot-clé recherché

-- Supprimer tous les messages pour une entreprise spécifique qui sont non lus
DELETE FROM message
WHERE entreprise_id = 2 AND lu = 0; -- Remplacez 2 par l'ID de l'entreprise cible

-- Supprimer tous les messages d'un utilisateur spécifique pour une entreprise spécifique
DELETE FROM message
WHERE utilisateur_id = 3 AND entreprise_id = 2; -- Remplacez 3 et 2 par les IDs appropriés

-- Vérifier les suppressions effectuées
SELECT * FROM message; -- Vérifiez les données restantes après suppression