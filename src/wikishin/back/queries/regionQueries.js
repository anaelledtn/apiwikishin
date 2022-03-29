const getRegions = "SELECT * FROM REGION";
const getRegionById = "SELECT * FROM REGION WHERE id_reg = $1";
const checkNameRExists = "SELECT r FROM REGION r WHERE r.nom_r = $1";
const addRegion = "INSERT INTO REGION (nom_r, description) VALUES ($1, $2)";
const removeRegion = "DELETE FROM REGION WHERE id_reg = $1";
const updateRegion = "UPDATE REGION SET nom_r = $1, description = $2 WHERE id_reg = $3";

module.exports = {
    getRegions,
    getRegionById,
    checkNameRExists,
    addRegion,
    removeRegion,
    updateRegion,
};