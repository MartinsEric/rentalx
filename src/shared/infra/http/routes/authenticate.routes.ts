import { Router } from "express";

import { AuthenticateUserController } from "../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserUseCase = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserUseCase.handle);

export { authenticateRoutes };
