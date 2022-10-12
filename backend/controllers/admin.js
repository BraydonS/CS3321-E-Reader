const Book = require("../models/book");
const User = require("../models/user");

exports.getAddBook = (req, res, next) => {
  res.render("admin/edit-book", {
    pageTitle: "Add Book",
    path: "/admin/add-book",
    editing: false,
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.postAddBook = (req, res, next) => {
  const title = req.body.title;
  const writer = req.body.writer;
  const description = req.body.description;
  const userId = req.session.user;
  console.log(req);
  const book = new Book({
    title: title,
    writer: writer,
    description: description,
    userId: userId,
  });
  book
    .save()
    .then((result) => {
      console.log("book info");
      console.log(result);
      const bookId = result._id;
      console.log(bookId);
      return req.user.addToLibrary(result);
      // User.findOne({ _id: userId }).then((user) => {
      //   console.log("user");

      //   console.log(user);
      //   console.log(bookId);

      //   user.library.items.push(bookId);
      // });
    })
    .then((result) => {
      console.log("Added Book");
      res.redirect("/admin/books");
    });
};

exports.getEditBook = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const bookId = req.params.bookId;
  console.log(req.params.bookId);
  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        return res.redirect("/");
      }
      res.render("admin/edit-book", {
        pageTitle: "Edit Book",
        path: "/admin/edit-book",
        editing: editMode,
        book: book,
        isAuthenticated: req.session.isLoggedIn,
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditBook = (req, res, next) => {
  const bookId = req.body.bookId;
  const updatedTitle = req.body.title;
  const updatedWriter = req.body.writer;
  const updatedDesc = req.body.description;

  Book.findById(bookId)
    .then((book) => {
      book.title = updatedTitle;
      book.writer = updatedWriter;
      book.description = updatedDesc;
      return book.save();
    })
    .then((result) => {
      console.log("updated book");
      res.redirect("/admin/books");
    });
};

exports.getBooks = (req, res, next) => {
  Book.find()
    .then((books) => {
      console.log(books);
      res.render("admin/books", {
        books: books,
        pageTitle: "Book List",
        path: "/admin/books",
        isAuthenticated: req.session.isLoggedIn,
      });
    })
    .catch((err) => console.log(err));
};

exports.postDeleteBook = (req, res, next) => {
  const bookId = req.body.bookId;
  Book.findByIdAndRemove(bookId)
    .then(() => {
      console.log("DESTROYED BOOK");
      res.redirect("/admin/books");
    })
    .catch((err) => console.log(err));
};

exports.getMyBooks = (req, res, next) => {
  console.log("req.user");

  console.log(req.user);
  req.user.populate("library.items.bookId").then((user) => {
    const books = user.library.items;
    console.log(books);
    res.render("admin/books", {
      books: books,
      pageTitle: "Book List",
      path: "/admin/books",
      isAuthenticated: req.session.isLoggedIn,
    });
  });
};
