const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, netx) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      netx(boom.badRequest(error));
    }
    netx();
  };
}

module.exports = validatorHandler;
