const express = require("express");

const router = express.Router();

//middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

//controllers
const { create, read } = require("../controllers/productController");

router.post("/product", authCheck, adminCheck, create);

router.get("/products", read);
//router.put("/product/:slug", authCheck, adminCheck, update);
//router.delete("/product/:slug", authCheck, adminCheck, remove);

module.exports = router;
