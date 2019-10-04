const express = require("express");

const FavouriteController = require("../controllers/favourite");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("/add", FavouriteController.addFavouriteResturant);

router.delete("/remove/:id", FavouriteController.removeFavouriteResturant);

router.get("/view/:id", FavouriteController.viewFavouriteResturant)

module.exports = router;
