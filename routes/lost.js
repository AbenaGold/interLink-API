import { Router } from "express";
import { getlostitems, postlostitem } from "../controllers/lost.js";
import { remoteUpload } from "../middlewares/uploads.js";
import { isAuthenticated } from "../middlewares/auth.js";

// create a Router
const itemRouter = Router();

// Define Routes
itemRouter.post('/item', remoteUpload.single('image'), isAuthenticated,  postlostitem);

itemRouter.get('/item', getlostitems);

// export router
export default itemRouter;