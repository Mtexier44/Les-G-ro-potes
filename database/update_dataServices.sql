-- Mettre à jour le type de service spécifique pour un service
UPDATE service
SET type_service = 'nouveau_type_service'
WHERE type_service;

-- Mettre à jour la description d'un service spécifique
UPDATE service
SET description = 'nouvelle_description'
WHERE description;

-- Mettre à jour le prix d'un service spécifique
UPDATE service
SET prix = 'nouveau_prix'
WHERE prix;

-- Mettre à jour la localisation d'un service spécifique
UPDATE service
SET localisation = 'nouvelle_localisation'
WHERE localisation;

-- Mettre à jour toutes les informations d'un service spécifique
UPDATE service
SET entreprise_id = 'nouvel_entreprise_id',
    type_service = 'nouveau_type_service',
    description = 'nouvelle_description',
    prix = 'nouveau_prix',
    localisation = 'nouvelle_localisation'
WHERE id;


-- Mettre à jour le prix d'un service dans une localisation spécifique
UPDATE service
SET prix = 'prix'
WHERE localisation = 'localisation_cible';

-- Ajouter un service dans service
INSERT INTO service (entreprise_id, type_service, description, prix, localisation)
VALUES ('entreprise_id', 'type_service', 'description', 'prix', 'localisation');

-- Appliquer une augmentation de prix de 10% à tous les services
UPDATE service
SET prix = prix * 1.10;

-- Réduire le prix de tous les services d'une localisation spécifique de 15%
UPDATE service
SET prix = prix * 0.85
WHERE localisation = 'localisation_cible';

-- Vérifier les mises à jour
SELECT * FROM service WHERE id;