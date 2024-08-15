import { Router } from "express";

import { remoteUpload } from "../middlewares/uploads.js";
import { addprofile, deleteprofile, getprofile, getprofiles, updateProfile } from "../controllers/profile.js";

//create a Router
const ProfileRouter = Router();


// Define Routes
ProfileRouter.get('/profile/:id', getprofile );

ProfileRouter.get('/profile', getprofiles );

ProfileRouter.post('/profile', remoteUpload.single('image'),  addprofile );

ProfileRouter.update('/profile/:id', updateProfile );

ProfileRouter.delete('/profile/:id', deleteprofile );

