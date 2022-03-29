const getPersos = "SELECT * FROM PERSO";
const getPersoById = "SELECT * FROM PERSO WHERE id_perso = $1";
const checkNameExists = "SELECT p FROM PERSO p WHERE p.nom_p = $1";
const addPerso = "INSERT INTO PERSO (nom_p, etoiles, element, taille) VALUES ($1, $2, $3,$4)";
const removePerso = "DELETE FROM PERSO WHERE id_perso = $1";
const updatePerso = "UPDATE PERSO SET nom_p = $1, etoiles = $2, element = $3, taille = $4 WHERE id_perso = $5";

module.exports = {
    getPersos,
    getPersoById,
    checkNameExists,
    addPerso,
    removePerso,
    updatePerso,
};