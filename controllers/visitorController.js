const { Visitor } = require("../models");

class visitorController {
  static getAllVisitor = async (req, res, next) => {
    try {
      const visitors = await Visitor.findAll({
        order: [["id", "ASC"]],
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).json(visitors);
    } catch (error) {
      next(error);
    }
  };

  static createVisitor = async (req, res, next) => {
    try {
      const { name, join_date } = req.body;
      const payload = { name, join_date };
      const visitors = await Visitor.create(payload, { returning: true });
      res.status(201).json(visitors);
    } catch (error) {
      next(error);
    }
  };

  static updateVisitor = async (req, res, next) => {
    try {
      const visitorId = Number(req.params.id);
      const { name, join_date } = req.body;
      const result = await Visitor.findByPk(visitorId);

      if (!result) throw { code: 400, name: "bad request" };
      const payload = { name, join_date };
      const updatedVisitors = await Visitor.update(payload, {
        where: { id: visitorId },
        returning: true,
      });

      res.status(200).json(updatedVisitors[1][0]);
    } catch (error) {
      next(error);
    }
  };

  static deleteVisitor = async (req, res, next) => {
    try {
      const visitorId = Number(req.params.id);
      const result = await Visitor.findByPk(visitorId);

      if (!result) throw { code: 400, name: "bad request" };
      await Visitor.destroy({ where: { id: visitorId } });

      res.status(200).json({ message: `visitor with id:${visitorId} deleted` });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = visitorController;
