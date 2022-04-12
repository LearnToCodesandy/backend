import {Router} from "express";
import {addNewUser,loginUser,deleteUser} from "../controllers/login.controller.js";

const router = Router();

router.post('/addNewUser',addNewUser);
router.post('/loginUser',loginUser);
router.delete('/deleteUser/:user_id',deleteUser);

export default router;