const { Router } = require('express');
const controller = require('../controller/arteController');

const router = Router();

router.get("/", controller.getArtes);
router.post("/", controller.addArte);
router.get("/:id_perso", controller.getArteById);
router.delete("/:id_perso", controller.removeArte);

module.exports = router;
