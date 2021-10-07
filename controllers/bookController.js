const { Book, Genre } = require("../models");

class bookController {
  static getAllBook = async (req, res, next) => {
    try {
      const books = await Book.findAll({
        order: [["id", "ASC"]],
        include: [Genre],
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  };

  static createBook = async (req, res, next) => {
    try {
      const { name, genre } = req.body;

      //* Genre check
      const result = await Genre.findByPk(Number(genre));
      if (!result) throw { code: 400, name: "bad request" };

      const payload = { name, genre: Number(genre) };
      const books = await Book.create(payload, {
        returning: true,
      });

      res.status(201).json(books);
    } catch (error) {
      next(error);
    }
  };

  static updateBook = async (req, res, next) => {
    try {
      const bookId = Number(req.params.id);
      const { name, genre } = req.body;

      //* Book Check
      const resultBook = await Book.findByPk(bookId);
      if (!resultBook) throw { code: 400, name: "bad request" };

      //* Genre Check
      const resultGenre = await Genre.findByPk(Number(genre));
      if (!resultGenre) throw { code: 400, name: "bad request" };

      const payload = { name, genre: Number(genre) };

      const updatedBooks = await Book.update(payload, {
        where: { id: bookId },
        returning: true,
      });
      res.status(200).json(updatedBooks[1][0]);
    } catch (error) {
      next(error);
    }
  };

  static deleteBook = async (req, res, next) => {
    try {
      const bookId = Number(req.params.id);
      const result = await Book.findByPk(bookId);

      if (!result) throw { code: 400, name: "bad request" };
      await Book.destroy({ where: { id: bookId } });

      res.status(200).json({ message: `book with id:${bookId} deleted` });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = bookController;
