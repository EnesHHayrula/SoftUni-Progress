const router = require("express").Router();
const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController");
const catalogController = require("./controllers/electronicController");
const searchController = require("./controllers/searchController");

router.use(homeController);
router.use("/users", userController);
router.use("/catalog", catalogController);
router.use("/search", searchController);


router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
