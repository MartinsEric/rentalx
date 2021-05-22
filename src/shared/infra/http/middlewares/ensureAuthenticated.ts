import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UserRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UserRepository";
import { AppError } from "../../../errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  // pegar token do hearder
  const authHeader = request.headers.authorization;

  // verificar se token existe
  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  // verificar se token eh valido
  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "c2571e591b105a72725f1910cd58b890"
    ) as IPayload;

    // verificar se id passado pelo token eh de um usuario existente
    const userRepository = new UserRepository();
    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError("user does not exists", 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}
