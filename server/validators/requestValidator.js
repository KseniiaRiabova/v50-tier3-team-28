const Joi = require('joi');

const requestValidateSchema = Joi.object({
  title: Joi.string()
    // .min(5)
    .max(100)
    .required()
    // .regex(/^(?!\s*$)[\w\s]+$/, 'valid title')
    .messages({
      'any.required': 'Title is required.',
      'string.min': 'Title should be at least 5 characters long',
      'string.pattern.name':
        'Title must contain valid characters and not be empty or just spaces.',
    }),
  description: Joi.string()
    // .min(10)
    .max(750)
    .required()
    // .regex(/^(?!\s*$)[\w\s]+$/, 'valid description')
    .messages({
      'any.required': 'Description is required',
      'string.min': 'Please enter more details.',
      'string.pattern.name':
        'Description must contain valid characters and not be empty or just spaces.',
    }),
  image: Joi.string().uri().optional().allow(null, '')
    .messages({
    'string.uri': 'Enter valid URL',
  }),
  contactNumber: Joi.string()
    .pattern(/^\+?[1-9]\d{1,14}$/,)
    .required()
    .messages({
      'string.pattern.base': 'Enter valid contact number.',
      'any.required': 'Contact number is required.'
    }),
  isActive: Joi.boolean().required(),
  isAccepted: Joi.boolean().required(),
  acceptedAt: Joi.date().optional().allow(null, ''),
  canceledAcceptedAt: Joi.date().optional().allow(null, ''),
  completedAt: Joi.date().optional().allow(null, ''),
  beefinderId: Joi.string().optional(),
  beekeeperId: Joi.string().optional().allow(null, ''),
  location: Joi.object({
    type: Joi.string().valid('Point').required(),
    coordinates: Joi.array().items(Joi.number()).length(2).required(),
    city: Joi.string().optional().allow(null, ''),
    country: Joi.string().optional().allow(null, ''),
  }).required()
  .messages({
    'any.required': 'Coordinates numbers are required.'
  }),
});
const validateRequest = (request) => {
  const { error, value } = requestValidateSchema.validate(request, {
    abortEarly: false,
  });
  if (error) {
    const errorDetails = {};
    error.details.forEach((detail) => {
      errorDetails[detail.context.key] = detail.message;
    });
    throw {
      status: 400,
      details: errorDetails,
    };
  }
  console.log("request validated successfully");
  return value;
};

module.exports = {
  validateRequest,
};
