const { Router } = require('express');
const controller = require('../controller/userController');

const router = Router();

router.get("/", controller.getUsers);
router.post("/", controller.addUser);
router.get("/:id_perso", controller.getUserByEmail);
router.delete("/:id_perso", controller.removeUser);
router.put("/", controller.connectUser);


module.exports = router;
