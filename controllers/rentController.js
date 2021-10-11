const { Rent, Book, Visitor } = require("../models");

class rentController {
  static getAllRent = async (req, res, next) => {
    try {
      const rents = await Rent.findAll({
        order: [["id", "ASC"]],
        include: [
          { model: Book, attributes: ["id", "name", "genre"] },
          { model: Visitor, attributes: ["id", "name", "join_date"] },
        ],
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).json(rents);
    } catch (error) {
      next(error);
    }
  };

  static getRent = async (req, res, next) => {
    try {
      const { id: rentId } = req.params;
      const rent = await Rent.findByPk(Number(rentId), {
        include: [
          { model: Book, attributes: ["id", "name", "genre"] },
          { model: Visitor, attributes: ["id", "name", "join_date"] },
        ],
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).json(rent);
    } catch (error) {
      next(error);
    }
  };

  static createRent = async (req, res, next) => {
    try {
      const UserId = req.headers.id;
      const { BookId, renting_date } = req.body;

      const payload = {
        UserId: Number(UserId),
        BookId: Number(BookId),
        renting_date,
      };

      // * User Check
      const resultUser = await Visitor.findByPk(payload.UserId);
      if (!resultUser) throw { code: 400, name: "bad request" };

      // * Book Check
      const resultBook = await Book.findByPk(payload.BookId);
      if (!resultBook) throw { code: 400, name: "bad request" };

      const newRent = await Rent.create(payload, { returning: true });
      res.status(201).json(newRent);
    } catch (error) {
      next(error);
    }
  };

  static updateRent = async (req, res, next) => {
    try {
      const rentId = Number(req.params.id);
      const UserId = req.headers.id;
      const { BookId, renting_date } = req.body;

      //* rent Check
      const resultRent = await Rent.findByPk(rentId);
      if (!resultRent) throw { code: 400, name: "bad request" };

      const payload = {
        UserId: Number(UserId),
        BookId: Number(BookId),
        renting_date,
      };

      // * User Check
      const resultUser = await Visitor.findByPk(payload.UserId);
      if (!resultUser) throw { code: 400, name: "bad request" };

      // * Book Check
      const resultBook = await Book.findByPk(payload.BookId);
      if (!resultBook) throw { code: 400, name: "bad request" };

      const updatedRent = await Rent.update(payload, {
        where: { id: rentId },
        returning: true,
      });
      res.status(200).json(updatedRent[1][0]);
    } catch (error) {
      next(error);
    }
  };

  static deleteRent = async (req, res, next) => {
    try {
      const rentId = Number(req.params.id);
      const result = await Rent.findByPk(rentId);

      if (!result) throw { code: 400, name: "bad request" };
      await Rent.destroy({ where: { id: rentId } });

      res.status(200).json({ message: `rent with id:${rentId} deleted` });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = rentController;
