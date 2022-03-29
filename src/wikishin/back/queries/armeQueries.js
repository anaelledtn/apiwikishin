const getArmes = "SELECT * FROM ARME";
const getArmeById = "SELECT * FROM ARME WHERE id_arme = $1";
const checkNameAExists = "SELECT a FROM ARME a WHERE a.nom_a = $1";
const addArme = "INSERT INTO ARME (nom_a, type_a, etoi_arm, descr_arm) VALUES ($1, $2, $3, $4)";
const removeArme = "DELETE FROM ARME WHERE id_arme = $1";
const updateArme = "UPDATE ARME SET nom_a = $1, type_a = $2, etoi_arm = $3, descr_arm = $4 WHERE id_arme = $5";

module.exports = {
    getArmes,
    getArmeById,
    checkNameAExists,
    addArme,
    removeArme,
    updateArme,
};