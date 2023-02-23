const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/users", controller.getUsers);
router.get("/cequipment", controller.getData);
router.get("/cequipment/:equipmentcategory", controller.getDataFilter);
router.get("/coordinates", controller.getDataCoordinates);
router.get("/fglcmake", controller.getDataMake);
router.get("/fglcmodel", controller.getDataModel);
router.get("/fglccategory", controller.getDataCategory);
router.get("/fglcprodline", controller.getDataProductLine);
router.get("/fglcCountabcindicator", controller.getDataCountAbcIndicator);
module.exports = router;