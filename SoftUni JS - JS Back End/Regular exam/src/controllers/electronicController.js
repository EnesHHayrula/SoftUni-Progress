const router = require("express").Router();
const electronicService = require("../services/electronicService");
const { isAuth } = require("../middlewares/authMiddleware");
const { extractErrorMsgs } = require("../utils/errorHandler");

router.get("/all", async (req, res) => {
  const electronics = await electronicService.getAll().lean();
  res.render("post/catalog", { electronics });
});

router.get("/create", isAuth, (req, res) => {
  res.render("post/create");
});

router.post("/create", async (req, res) => {
  const {
    name,
    type,
    damages,
    image,
    description,
    productionYear,
    exploitationYear,
    price,
  } = req.body;

  const payload = {
    name,
    type,
    damages,
    image,
    description,
    productionYear,
    exploitationYear,
    price,
    owner: req.user,
  };
  try {
    await electronicService.create(payload);
    res.redirect("/catalog/all");
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    res.status(404).render("post/create", { errorMessages });
  }
});

router.get("/:electronicId/details", async (req, res) => {
  const { electronicId } = req.params;

  const electronic = await electronicService
    .getSingleElectronic(electronicId)
    .lean();

  const { user } = req;
  const { owner } = electronic;
  const isOwner = user?._id === owner.toString();
  const hasBuy = electronic.buyingList?.some(
    (b) => b?._id.toString() === user?._id
  );
  const joinedEmailOfAdders = electronic.buyingList
    .map((b) => b.email)
    .join(", ");

  res.render("post/details", {
    electronic,
    isOwner,
    hasBuy,
    joinedEmailOfAdders,
  });
});

router.get("/:electronicId/edit", async (req, res) => {
  const { electronicId } = req.params;
  const electronic = await electronicService
    .getSingleElectronic(electronicId)
    .lean();

  res.render("post/edit", { electronic });
});

router.post("/:electronicId/edit", async (req, res) => {
  const { electronicId } = req.params;
  const {
    name,
    type,
    damages,
    image,
    description,
    productionYear,
    exploitationYear,
    price,
  } = req.body;

  const payload = {
    name,
    type,
    damages,
    image,
    description,
    productionYear,
    exploitationYear,
    price,
    owner: req.user,
  };
  await electronicService.update(electronicId, payload);

  res.redirect(`/catalog/${electronicId}/details`);
});

router.get("/:electronicId/delete", async (req, res) => {
  const { electronicId } = req.params;

  await electronicService.delete(electronicId);

  res.redirect("/catalog/all");
});

router.get("/:electronicId/buyingList", async (req, res) => {
  const { electronicId } = req.params;
  const { _id } = req.user;

  await electronicService.addToBuyingList(electronicId, _id);

  res.redirect(`/catalog/${electronicId}/details`);
});

module.exports = router;
