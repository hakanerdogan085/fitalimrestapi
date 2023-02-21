const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/users", controller.getUsers);
router.get("/data", controller.getData);
router.get("/data2", controller.getData2);
router.get("/data/:equipmentcategory", controller.getDataFilter);

module.exports = router;