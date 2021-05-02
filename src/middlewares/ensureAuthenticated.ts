import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // pegar token do hearder
  const authHeader = request.headers.authorization;

  // verificar se token existe
  if (!authHeader) {
    throw new Error("Token missing");
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
      throw new Error("user does not exists");
    }

    next();
  } catch {
    throw new Error("Invalid token");
  }
}
