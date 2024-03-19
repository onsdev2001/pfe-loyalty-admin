const { Router } = require("express");
const controller = require('./controller');

const router =Router();

router.get("/",controller.getAdmin);
router.post("/", controller.addAdmin);
router.get("/:cin",controller.getAdminById);
router.put("/:cin",controller.updateAdmin);
router.put("/:cin/archive", controller.archiveAdmin);

    
module.exports = router;