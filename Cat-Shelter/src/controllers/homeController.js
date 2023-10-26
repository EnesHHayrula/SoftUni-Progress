const router = require("express").Router();
const catService = require("../services/catService");

router.get("/", (req, res) => {
  const { search } = req.query;
  const cats = catService.getAll(search);
  res.render("home", { cats, search });
});

module.exports = router;
