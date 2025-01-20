-- Sélectionner tous les services
SELECT * FROM service;

-- Sélectionner un service spécifique par son ID
SELECT * FROM service
WHERE id = 'id_service';

-- Sélectionner tous les services pour une entreprise spécifique par son ID
SELECT * FROM service
WHERE entreprise_id = 'entreprise_id';

-- Sélectionner tous les services pour un type d'entreprise spécifique
SELECT * FROM service
WHERE type_service = 'type_service_recherché';

-- Sélectionner tous les services disponibles dans une localisation spécifique
SELECT * FROM service
WHERE localisation = 'nom_de_la_localisation';

-- Sélectionner tous les services avec un prix inférieur à une certaine valeur
SELECT * FROM service
WHERE prix = 'prix_service';

-- Sélectionner tous les services dont la description contient un mot-clé spécifique
SELECT * FROM service
WHERE description LIKE '%mot_clé%';

-- Compter le nombre total de services dans la base
SELECT COUNT(*) AS total_services FROM service;

-- Lister tous les services triés par leur prix (croissant)
SELECT * FROM service
ORDER BY prix ASC;

-- Lister tous les services triés par leur prix (décroissant)
SELECT * FROM service
ORDER BY prix DESC;

-- Sélectionner les services dont le prix est compris entre deux valeurs
SELECT * FROM service
WHERE prix BETWEEN 50 AND 100 ; -- Remplacez 10 et 100 par les valeurs minimales et maximales


-- Lister tous les services triés par localisation et prix (croissant)
SELECT * FROM service
ORDER BY localisation ASC, prix ASC;