const { Router } = require('express');
const controller = require('../controller/persoController');

const router = Router();


router.get("/", controller.getPersos);
router.post("/", controller.addPerso);
router.get("/:id_perso", controller.getPersoById);
router.put("/:id_perso", controller.updatePerso);
router.delete("/:id_perso", controller.removePerso);

module.exports = router;