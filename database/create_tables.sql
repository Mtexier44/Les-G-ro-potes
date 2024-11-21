CREATE TABLE entreprise (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    type_entreprise TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    telephone TEXT,
    adresse TEXT,
    villes_desservies TEXT,
    nombre_patients INTEGER,
    description_services TEXT,
    logo TEXT,
    photos TEXT,
    videos TEXT
);

CREATE TABLE service (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    entreprise_id INTEGER,
    type_service TEXT NOT NULL,
    description TEXT,
    prix DECIMAL,
    localisation TEXT,
    FOREIGN KEY(entreprise_id) REFERENCES entreprise(id)
);

CREATE TABLE utilisateur (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    prenom TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    mot_de_passe TEXT NOT NULL,
    role TEXT NOT NULL,
    telephone TEXT,
    adresse TEXT,
    ville TEXT
);

CREATE TABLE reservation (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    utilisateur_id INTEGER,
    service_id INTEGER,
    date_reservation DATETIME,
    status TEXT NOT NULL,
    notes TEXT,
    FOREIGN KEY(utilisateur_id) REFERENCES utilisateur(id),
    FOREIGN KEY(service_id) REFERENCES service(id)
);

CREATE TABLE message (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    utilisateur_id INTEGER,
    entreprise_id INTEGER,
    message TEXT NOT NULL,
    date_envoi DATETIME,
    lu BOOLEAN,
    FOREIGN KEY(utilisateur_id) REFERENCES utilisateur(id),
    FOREIGN KEY(entreprise_id) REFERENCES entreprise(id)
);

CREATE TABLE avis (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    utilisateur_id INTEGER,
    entreprise_id INTEGER,
    service_id INTEGER,
    note INTEGER NOT NULL,
    commentaire TEXT,
    date_avis DATETIME,
    FOREIGN KEY(utilisateur_id) REFERENCES utilisateur(id),
    FOREIGN KEY(entreprise_id) REFERENCES entreprise(id),
    FOREIGN KEY(service_id) REFERENCES service(id)
);

CREATE TABLE log_activity (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    utilisateur_id INTEGER,
    action TEXT NOT NULL,
    date_action DATETIME,
    details TEXT,
    FOREIGN KEY(utilisateur_id) REFERENCES utilisateur(id)
);