const pool = require("../db");
const queries = require("../queries/arteQueries");

const getArtes = (req, res) => {
    pool.query(queries.getArtes, (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getArteById = (req, res) => {
     const id_arte = parseInt(req.params.id_arte);
     pool.query(queries.getArteById, [id_arte], (error, results) => {
         if (error) throw error;
         res.status(200).json(results.rows);
     });
};

const addArte = (req, res) => {
    const { nom_ar, descr_ar, etoi_art } = req.body;
    //check if name exists
    pool.query(queries.checkNameArExists, [nom_ar], (error, results) => {
        if (results.rows.length) {
            res.send("L'artefact existe déjà.");
        }
        //add artefact to database
        pool.query(queries.addArte, [nom_ar, descr_ar, etoi_art], (error, resulst) => {
            if (error) throw error;
            res.status(201).send("L'artefact a bien été créé.");
        });
    });
};

const removeArte = (req, res) => {
    const id_arte = parseInt(req.params.id_arte);
    pool.query(queries.getArteById, [id_arte], (error, results) => {
        const noArteFound = !results.rows.length;
        if(noArteFound){
            res.send("L'artefact n'existe pas, ne peut pas être supprimé.");
        }
        pool.query(queries.removeArte, [id_arte], (error, results) => {
            if (error) throw error;
            res.status(200).send("L'artefact a bien été supprimé.")
        });
    });
};

const updateArte = (req, res) => {
    const id_arte = parseInt(req.params.id_arte); 
    const { nom_ar, descr_ar, etoi_art } = req.body;
    pool.query(queries.getArteById, [id_arte], (error, results) => {
        const noArteFound = !results.rows.length;
        if(noArteFound){
            res.send("L'artefact n'existe pas, ne peut pas être modifié.");
        }
        pool.query(queries.updateArte, [nom_ar, descr_ar, etoi_art, id_arte], (error, results) => {
            if (error) throw error;
            res.status(200).send("L'artefact a bien été modifié.");
        });
    });
};

module.exports = {
    getArtes,
    getArteById,
    addArte,
    removeArte,
    updateArte
};