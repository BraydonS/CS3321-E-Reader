const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/books", adminController.getBooks);

router.get("/add-book", adminController.getAddBook);

router.post("/add-book", adminController.postAddBook);

router.get("/edit-book/:bookId", adminController.getEditBook);

router.post("/edit-book", adminController.postEditBook);

router.post("/delete-book", adminController.postDeleteBook);

module.exports = router;
