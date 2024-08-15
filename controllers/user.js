import { UserModel } from "../models/user.js";
import { signupValidator, loginValidator } from "../validators/user.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
    // validate request
    try {
        const { value, error } = signupValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }


        // encrypt user password
        const hashedPassword = bcrypt.hashSync(value.password, 10);

        // create user
        value.password = hashedPassword;
        await UserModel.create(value);

        // Return response
        res.status(201).json('User registered');


    } catch (error) {
        next(error);
    }
}


export const login = async (req, res, next) => {
    // validate request
    try {
        const { value, error } = loginValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // Find user with unique identifier
        const user = await UserModel.findOne({
            $or: [
                { userName: value.userName },
                { email: value.email },
            ]
        });
        if (!user) {
            return res.status(401).json('User not found');
        }

        // verify password
        const correctPassword = bcrypt.compareSync(value.password, user.password);
        if (!correctPassword) {
            return res.status(401).json('invalid credentials');

        }
        // create a session
        req.session.user = { id: user.id }

        // Return a response
        res.status(200).json('user logged in');
    } catch (error) {
        next(error);
    }

}

export const profile = async (req, res, next) => {
   try {
     // Get user id from session or request
     const id = req.session.user.id;
 
     // find user by id
     const user = await UserModel.findById(id)
         .select({ password: false });
     // return response
     res.status(200).json(user);
   } catch (error) {
    next(error);
   }
}

export const logout = async (req, res, next) => {
   try {
     // Destroy user session
     await  req.session.destroy();
     // Return Response
     res.status(200).json('User logged out');
   } catch (error) {
    next(error);
   }
}











