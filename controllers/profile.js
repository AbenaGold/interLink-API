import { ProfileModel } from "../models/profile.js";

//  Get All Profiles
export const getprofiles = async (req, res, next) => {
    try {
        const profiles = await ProfileModel.find()
        res.status(200).json(profiles)
    } catch (error) {
        next(error)
    }
};

// Get a Profile
export const getprofile = async (req, res, next) => {
    try {
        const profile = await ProfileModel.findById(req.params.id)
        res.status(200).json(profile)
    } catch (error) {
        next(error)
    }
}



//Add a Profile
export const addprofile = async (req, res, next) => {
    try {
        const addedprofile = await ProfileModel.create({
            ...req.body,
            image: req.file.filename
        });
        res.status(201).json(addedprofile)
    } catch (error) {
        next(error)
    }
};

//Update a Profile
export const updateProfile = async (req, res, next) => {
    try {
        const profileId = req.params.id;
        const updatedProfile = await ProfileModel.findByIdAndUpdate(
            { _id: profileId },
            req.body,
            { new: true })

        res.status(200).json(updatedProfile)
    } catch (error) {
        next(error)
    }
};

//Delete a Profile
export const deleteprofile = async (req, res, next) => {
    try {
        const deletedProfile = await ProfileModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedProfile)
    } catch (error) {
        next(error)
    }
}

