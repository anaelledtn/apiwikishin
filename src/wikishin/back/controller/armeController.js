const pool = require("../db");
const queries = require("../queries/armeQueries");

const getArmes = (req, res) => {
    pool.query(queries.getArmes, (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getArmeById = (req, res) => {
     const id_arme = parseInt(req.params.id_arme);
     pool.query(queries.getArmeById, [id_arme], (error, results) => {
         if (error) throw error;
         res.status(200).json(results.rows);
     });
};

const addArme = (req, res) => {
    const { nom_a, type_a, etoi_arm, descr_arm } = req.body;
    //check if name exists
    pool.query(queries.checkNameAExists, [nom_a], (error, results) => {
        if (results.rows.length) {
            res.send("L'arme existe déjà.");
        }
        //add weapon to database
        pool.query(queries.addArme, [nom_a, type_a, etoi_arm, descr_arm], (error, resulst) => {
            if (error) throw error;
            res.status(201).send("L'arme a bien été créée.");
        });
    });
};

const removeArme = (req, res) => {
    const id_arme = parseInt(req.params.id_arme);
    pool.query(queries.getArmeById, [id_arme], (error, results) => {
        const noWeaponFound = !results.rows.length;
        if(noWeaponFound){
            res.send("L'arme n'existe pas, ne peut pas être supprimée.");
        }
        pool.query(queries.removeArme, [id_arme], (error, results) => {
            if (error) throw error;
            res.status(200).send("L'arme a bien été supprimée.")
        });
    });
};

const updateArme = (req, res) => {
    const id_arme = parseInt(req.params.id_arme); 
    const { nom_a, type_a, etoi_arm, descr_arm } = req.body;
    pool.query(queries.getArmeById, [id_arme], (error, results) => {
        const noWeaponFound = !results.rows.length;
        if(noWeaponFound){
            res.send("L'arme' n'existe pas, ne peut pas être modifiée.");
        }
        pool.query(queries.updateArme, [nom_a, type_a, etoi_arm, descr_arm, id_arme], (error, results) => {
            if (error) throw error;
            res.status(200).send("L'arme a bien été modifiée.");
        });
    });
};

module.exports = {
    getArmes,
    getArmeById,
    addArme,
    removeArme,
    updateArme
};