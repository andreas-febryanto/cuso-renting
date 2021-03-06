module.exports = errorHandler = (err, req, res, next) => {
  let code = err.code || 500;
  let message = "Internal Server Code";

  switch (err.name) {
    case "SequelizeValidationError":
      code = 400;
      const errors = err.errors.map((e) => e.message);
      message = errors;
      break;
    case "SequelizeUniqueConstraintError":
      code = 400;
      message = `${req.body.name} already taken`;
      break;
    case "bad request":
      code = 400;
      message = `id not found`;
      break;
  }
  res.status(code).json({ message });
};
