import { Router } from "express";

import { validateJwt } from "../middlewares/validarJWT";

import {
    getestation,
    getestationID,
    getdatesxname,
} from "../controllers/clima";

const router = Router();

router.get("/climaroutes", validateJwt, getestation);
router.get("/climaroutes/:id", getestationID);
router.get("/climaroutes/:estacion",getdatesxname);

export default router;
