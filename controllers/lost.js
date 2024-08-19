import { itemModel } from "../models/lostuser.js";
import { ProfileModel } from "../models/profile.js";
import { itemValidator } from "../validators/lost.js";

// Find profile for logged in user
// const profile = await ProfileModel.findOne({userId: req.session.user.id})



//  Get All lost items
export const getitems = async (req, res, next) => {
    try {
        const allitems = await itemModel.find()
        .populate('postedBy', 'userName')
        // Return response
        res.status(200).json(allitems)
    } catch (error) {
        next(error)
    }
};

// Get a lost item
export const getitem = async (req, res, next) => {
    try {
        const item = await itemModel.findById(req.params.id)
        res.status(200).json('lost item')
    } catch (error) {
        next(error)
    }
}



//Add a lost item
export const postitem = async (req, res, next) => {
    try {
        // validate request
        const { value, error } = itemValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // post item
        const posteditem = await itemModel.create({
            ...req.body,
            image: req.file.filename,
            postedBy: req.session.user.id
        });
        // return Response
        res.status(201).json(posteditem)

    } catch (error) {
        next(error)
    }
};

//Update a posted item
export const updateitem = async (req, res, next) => {
    try {
        const itemId = req.params.id;
        const updateditem = await itemModel.findByIdAndUpdate(
            { _id: itemId },
            req.body,
            { new: true })

        res.status(200).json(updateditem)
    } catch (error) {
        next(error)
    }
};

//Delete a posted item
export const deleteitem = async (req, res, next) => {
    try {
        const deleteditem = await itemModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteditem)
    } catch (error) {
        next(error)
    }
}

