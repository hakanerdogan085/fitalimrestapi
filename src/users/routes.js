const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/users", controller.getUsers);
router.get("/cequipment", controller.getData);
router.get("/cequipment/:equipmentcategory", controller.getDataFilter);
module.exports = router;