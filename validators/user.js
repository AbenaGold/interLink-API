import joi from 'joi'

export const signupValidator = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    userName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmpassword: joi.string().valid(joi.ref('password')).required(),

});


export const loginValidator = joi.object({
    // userName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
});

