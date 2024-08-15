import joi from "joi";

export const itemValidator = joi.object({
    itemName: joi.string().required(),
    description: joi.string().required(),
    locationLost: joi.string().required(),
    image: joi.string().optional(),

});
