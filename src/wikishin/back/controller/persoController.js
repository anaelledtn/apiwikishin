const pool = require("../db");
const queries = require("../queries/persoQueries");

const getPersos = (req, res) => {
    pool.query(queries.getPersos, (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getPersoById = (req, res) => {
     const id_perso = parseInt(req.params.id_perso);
     pool.query(queries.getPersoById, [id_perso], (error, results) => {
         if (error) throw error;
         res.status(200).json(results.rows);
     });
};

const addPerso = (req, res) => {
    const { nom_p, etoiles, element, taille } = req.body;
    //check if name exists
    pool.query(queries.checkNameExists, [nom_p], (error, results) => {
        if (results.rows.length) {
            res.send("Le personnage existe déjà.");
        }
        //add perso to database
        pool.query(queries.addPerso, [nom_p, etoiles, element, taille], (error, resulst) => {
            if (error) throw error;
            res.status(201).send("Le personnage a bien été créé.");
        });
    });
};

const removePerso = (req, res) => {
    const id_perso = parseInt(req.params.id_perso);
    pool.query(queries.getPersoById, [id_perso], (error, results) => {
        const noPersoFound = !results.rows.length;
        if(noPersoFound){
            res.send("Le personnage n'existe pas, ne peut pas être supprimé.");
        }
        pool.query(queries.removePerso, [id_perso], (error, results) => {
            if (error) throw error;
            res.status(200).send("Le personnage a bien été supprimé.")
        });
    });
};

const updatePerso = (req, res) => {
    const id_perso = parseInt(req.params.id_perso); 
    const { nom_p, etoiles, element, taille } = req.body;
    pool.query(queries.getPersoById, [id_perso], (error, results) => {
        const noPersoFound = !results.rows.length;
        if(noPersoFound){
            res.send("Le personnage n'existe pas, ne peut pas être modifié.");
        }
        pool.query(queries.updatePerso, [nom_p, etoiles, element, taille, id_perso], (error, results) => {
            if (error) throw error;
            res.status(200).send("Le personnage a bien été modifié.");
        });
    });
};

module.exports = {
    getPersos,
    getPersoById,
    addPerso,
    removePerso,
    updatePerso,
};