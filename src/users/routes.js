const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getUsers);
router.get("/", controller.getData);
router.get("/", controller.getData2);

module.exports = router;