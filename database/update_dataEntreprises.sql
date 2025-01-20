-- Mettre à jour le nom d'une entreprise par son ID
UPDATE entreprise
SET nom = 'nouveau_nom'
WHERE id = id;

-- Mettre à jour le type d'entreprise par son ID
UPDATE entreprise
SET type_entreprise = 'nouveau_type'
WHERE id = id;

-- Mettre à jour l'adresse d'une entreprise par son ID
UPDATE entreprise
SET adresse = 'nouvelle_adresse'
WHERE id = id;

-- Mettre à jour l'email d'une entreprise par son ID
UPDATE entreprise
SET email = 'nouvel_email'
WHERE id = id;

-- Mettre à jour le téléphone d'une entreprise par son ID
UPDATE entreprise
SET telephone = 'nouveau_telephone'
WHERE id = id;

-- Mettre à jour les villes desservies par une entreprise par son ID
UPDATE entreprise
SET villes_desservies = 'nouvelles_villes'
WHERE id = id;

-- Mettre à jour la description des services d'une entreprise par son ID
UPDATE entreprise
SET description_services = 'nouvelle_description'
WHERE id = id;

-- Mettre à jour le logo d'une entreprise par son ID
UPDATE entreprise
SET logo = 'nouveau_logo'
WHERE id = id;

-- Mettre à jour les photos d'une entreprise par son ID
UPDATE entreprise
SET photos = 'nouvelles_photos'
WHERE id = id;

-- Mettre à jour les vidéos d'une entreprise par son ID
UPDATE entreprise
SET videos = 'nouvelles_videos'
WHERE id = id;

-- Mettre à jour plusieurs champs d'une entreprise simultanément par son ID
UPDATE entreprise
SET nom = 'nouveau_nom',
    type_entreprise = 'nouveau_type',
    adresse = 'nouvelle_adresse',
    email = 'nouvel_email',
    telephone = 'nouveau_telephone',
    villes_desservies = 'nouvelles_villes',
    description_services = 'nouvelle_description',
    logo = 'nouveau_logo',
    photos = 'nouvelles_photos',
    videos = 'nouvelles_videos'
WHERE id = id;

-- Vérifier les mises à jours
SELECT * FROM entreprise WHERE id = id;