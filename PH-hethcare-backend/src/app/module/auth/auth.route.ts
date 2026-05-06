import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();

router.post("/register", AuthController.registerPatientController)
router.post("/login", AuthController.loginUserController)

export const AuthRoutes = router;