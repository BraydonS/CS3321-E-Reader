const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/test", adminController.test);

//admin/books => GET
router.get("/books", adminController.getBooks);

// /admin/add-product => GET
router.get("/add-book", adminController.getAddBook);

//admin/add-product => POST
router.post("/add-book", adminController.postAddBook);

// router.get("/edit-product/:productId", adminController.getEditProduct);
router.get("/edit-book/:bookId", adminController.getEditBook);

router.post("/edit-book", adminController.postEditBook);
// router.post("/edit-product", adminController.postEditProduct);

// router.post("/delete-product", adminController.postDeleteProduct);

module.exports = router;
