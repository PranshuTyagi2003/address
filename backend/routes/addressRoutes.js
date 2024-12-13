const express = require("express");
const router = express.Router();
const { saveAddress, getAllAddresses } = require("../controllers/addressController");

router.post("/", saveAddress);
router.get("/", getAllAddresses);

module.exports = router;
