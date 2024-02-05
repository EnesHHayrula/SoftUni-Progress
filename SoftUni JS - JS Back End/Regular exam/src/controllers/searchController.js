const router = require("express").Router();
const electronicService = require("../services/electronicService");

router.get("/search", (req, res) => {
  res.render("views/search");
});

router.post("/search", async (req, res) => {
  const { searchName, searchType } = req.body; // Use req.body to access form data
  const electronics = await electronicService.getFilteredElectronics(
    searchName,
    searchType
  );
  res.render("search", { electronics, searchName, searchType });
});

module.exports = router;
