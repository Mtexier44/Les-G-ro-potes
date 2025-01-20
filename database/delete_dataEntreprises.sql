-- Supprimer une entreprise par son ID
DELETE FROM entreprise
WHERE id = 'id_de_l_entreprise';

-- Supprimer une entreprise par son nom
DELETE FROM entreprise
WHERE nom = 'nom_de_l_entreprise';

-- Supprimer toutes les entreprises d'un certain type
DELETE FROM entreprise
WHERE type_entreprise = 'type_d_entreprise';

-- Supprimer toutes les entreprises localisées dans une certaine ville
DELETE FROM entreprise
WHERE villes_desservies LIKE '%nom_de_la_ville%';

-- Supprimer toutes les entreprises dont l'adresse correspond
DELETE FROM entreprise
WHERE adresse = 'adresse_specifique';

-- Supprimer toutes les entreprises ayant une certaine description de services
DELETE FROM entreprise
WHERE description_services LIKE '%description_specifique%';

-- Supprimer le logo d'une entreprise 
DELETE FROM entreprise
WHERE logo = 'logo_entreprise';

-- Supprimer le téléphone pour une entreprise donnée
DELETE FROM entreprise
WHERE telephone = 'telephone_entreprise';

-- Supprimer une ville_desservie d'une entreprise donnée
DELETE FROM entreprise
WHERE nom = nom AND villes_desservies = 'nom_de_la_ville';

-- Supprimer les photos d'une entreprise
DELETE FROM entreprise
WHERE photos = '%photos_recherchées%';

-- Supprimer les videos d'une entreprise
DELETE FROM entreprise
WHERE videos = '%videos_recherchées';