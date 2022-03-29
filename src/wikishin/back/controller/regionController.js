const pool = require("../db");
const queries = require("../queries/regionQueries");

const getRegions = (req, res) => {
    pool.query(queries.getRegions, (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getRegionById = (req, res) => {
     const id_reg = parseInt(req.params.id_reg);
     pool.query(queries.getRegionById, [id_reg], (error, results) => {
         if (error) throw error;
         res.status(200).json(results.rows);
     });
};

const addRegion = (req, res) => {
    const { nom_r, description } = req.body;
    //check if name exists
    pool.query(queries.checkNameRExists, [nom_r], (error, results) => {
        if (results.rows.length) {
            res.send("La région existe déjà.");
        }
        //add region to database
        pool.query(queries.addRegion, [nom_r, description], (error, resulst) => {
            if (error) throw error;
            res.status(201).send("La région a bien été créée.");
        });
    });
};

const removeRegion = (req, res) => {
    const id_reg = parseInt(req.params.id_reg);
    pool.query(queries.getRegionById, [id_reg], (error, results) => {
        const noRegionFound = !results.rows.length;
        if(noRegionFound){
            res.send("La région n'existe pas, ne peut pas être supprimée.");
        }
        pool.query(queries.removeRegion, [id_reg], (error, results) => {
            if (error) throw error;
            res.status(200).send("La région a bien été supprimée.")
        });
    });
};

const updateRegion = (req, res) => {
    const id_reg = parseInt(req.params.id_reg); 
    const { nom_r, description } = req.body;
    pool.query(queries.getRegionById, [id_reg], (error, results) => {
        const noRegionFound = !results.rows.length;
        if(noRegionFound){
            res.send("La region n'existe pas, ne peut pas être modifiée.");
        }
        pool.query(queries.updateRegion, [nom_r, description, id_reg], (error, results) => {
            if (error) throw error;
            res.status(200).send("La region a bien été modifiée.");
        });
    });
};

module.exports = {
    getRegions,
    getRegionById,
    addRegion,
    removeRegion,
    updateRegion
};