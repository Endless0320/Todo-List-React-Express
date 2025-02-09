import { Request, Response, NextFunction } from "express";
import { checkAuth } from "../utils";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await checkAuth(req, res, next);
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};