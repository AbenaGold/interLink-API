import joi from "joi";

export const itemValidator = joi.object({
    itemName: joi.string().required(),
    description: joi.string().required(),
    location: joi.string().required(),
    category: joi.string().valid('Lost Item', 'Found Item'),
    image: joi.string().optional(),
});
