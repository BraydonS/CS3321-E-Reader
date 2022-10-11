const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  library: {
    items: [
      {
        bookId: {
          type: Schema.Types.ObjectId,
          ref: "Book",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
});

userSchema.methods.addToLibrary = function (book) {
  const libraryBookIndex = this.book.items.findIndex((book) => {
    return book.bookId.toString() === book._id.toString();
  });
  let newQuantity = 1;
  const updatedLibraryItems = [...this.library.items];

  if (libraryBookIndex >= 0) {
    newQuantity = this.library.items[libraryBookIndex].quantity + 1;
    updatedLibraryItems[libraryBookIndex].quantity = newQuantity;
  } else {
    updatedLibraryItems.push({
      bookId: book._id,
      quantity: newQuantity,
    });
  }
  const updatedLibrary = {
    items: updatedLibraryItems,
  };
  this.library = updatedLibrary;
  return this.save();
};

userSchema.methods.removeFromLibrary = function (bookId) {
  const updatedLibraryItems = this.library.items.filter((book) => {
    return book.bookId.toString() !== bookId.toString();
  });
  this.library.items = updatedLibraryItems;
  return this.save();
};

userSchema.methods.clearLibrary = function () {
  this.library = { items: [] };
  return this.save();
};

module.exports = mongoose.model("User", userSchema);
