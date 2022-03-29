const { Router } = require('express');
const controller = require('../controller/regionController');

const router = Router();

router.get("/", controller.getRegions);
router.post("/", controller.addRegion);
router.get("/:id_perso", controller.getRegionById);
router.delete("/:id_perso", controller.removeRegion);


module.exports = router;
