const Joi = require("joi"); // пакет валидации постов

module.exports = {
  addPostValidation: (req, res, next) => {
    // правила валидации
    const schema = Joi.object({
      topic: Joi.string().alphanum().min(3).max(30).required(),
      text: Joi.string().alphanum().min(3).max(400).required(),
    });
    // валидируем присланные данные
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.details });
    }
    next();
  },
  patchPostValidation: (req, res, next) => {
    // правила валидации
    const schema = Joi.object({
      topic: Joi.string().alphanum().min(3).max(30).optional(),
      text: Joi.string().alphanum().min(3).max(400).optional(),
    });
    // валидируем присланные данные
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      console.log(
        res.status(400).json({ status: validationResult.error.details })
      );
      return res
        .status(400)
        .json({ status: validationResult.error.details.message.status });
    }
    next();
  },
};
