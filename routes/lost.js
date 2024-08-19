import { Router } from "express";
import { deleteitem, getitem, getitems, postitem, updateitem } from "../controllers/lost.js";
import { remoteUpload } from "../middlewares/uploads.js";
import { isAuthenticated } from "../middlewares/auth.js";

// create a Router
const itemRouter = Router();

// Define Routes
itemRouter.post('/item', remoteUpload.single('image'), isAuthenticated,  postitem);

itemRouter.get('/item', getitems);

itemRouter.get('/item/:id', getitem);

itemRouter.patch('/item/:id', updateitem);

itemRouter.delete('/item/:id', deleteitem);

// export router
export default itemRouter;