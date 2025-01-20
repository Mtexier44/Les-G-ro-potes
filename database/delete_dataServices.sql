-- Supprimer un service spécifique par son ID
DELETE FROM service
WHERE id;

-- Supprimer tous les services appartenant à une entreprise spécifique
DELETE FROM service
WHERE entreprise_id;

-- Supprimer tous les services d'une localisation spécifique
DELETE FROM service
WHERE localisation = 'localisation_cible';

-- Supprimer un type de service d'une d'entreprise spécifique
DELETE FROM service
WHERE type_service = 'type_service_cible';

-- Supprimer tous les services dont la description contient un mot-clé spécifique
DELETE FROM service
WHERE description LIKE '%mot_clé%';

-- Supprimer tous les services d'une entreprise dans une localisation spécifique
DELETE FROM service
WHERE entreprise_id = entreprise_id AND localisation = 'localisation_cible';