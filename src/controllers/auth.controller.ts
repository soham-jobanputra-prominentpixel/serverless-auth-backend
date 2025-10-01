import { BadRequestError, NotFoundError } from "../common/errors.ts";
import { User } from "../common/models/user.ts";
import type { LoginCredentials, RegisterRequestBody } from "../common/types.ts";
import { matchedData } from "express-validator";
import type { Request, Response } from "express";

export async function login(request: Request, response: Response) {
  const { email, password }: LoginCredentials = matchedData(request);
  const user = await User.findOne({ where: { email: email } });

  if (!user || user.password !== password) {
    throw new NotFoundError("User not found.");
  }

  request.session!["userId"] = user.id;
  response.json({ user });
}

export async function register(request: Request, response: Response) {
  const {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
  }: RegisterRequestBody = matchedData(request);

  if (password !== confirmPassword) {
    throw new BadRequestError("Password and Confirm-Password must match.");
  }

  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    throw new BadRequestError("Email already exists.");
  }

  User.create({ email, password, firstName, lastName });
  response.json({ success: true });
}
