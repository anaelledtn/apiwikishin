const { Router } = require('express');
const controller = require('../controller/armeController');

const router = Router();

router.get("/", controller.getArmes);
router.post("/", controller.addArme);
router.get("/:id_perso", controller.getArmeById);
router.delete("/:id_perso", controller.removeArme);

module.exports = router;