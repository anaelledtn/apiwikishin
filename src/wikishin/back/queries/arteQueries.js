const getArtes = "SELECT * FROM ARTEFACT";
const getArteById = "SELECT * FROM ARTEFACT WHERE id_arte = $1";
const checkNameArExists = "SELECT a FROM ARTEFACT a WHERE a.nom_ar = $1";
const addArte = "INSERT INTO ARTEFACT (nom_ar, descr_ar, etoi_art) VALUES ($1, $2, $3)";
const removeArte = "DELETE FROM ARTEFACT WHERE id_arte = $1";
const updateArte = "UPDATE ARTEFACT SET nom_ar = $1, descr_ar = $2, etoi_art = $3 WHERE id_arte = $4";


module.exports = {
    getArtes,
    getArteById,
    checkNameArExists,
    addArte,
    removeArte,
    updateArte,
};