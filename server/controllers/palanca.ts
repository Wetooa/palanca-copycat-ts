import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes/build/cjs/status-codes";

export const getPalanca = (req: Request, res: Response): void => {
  res.status(StatusCodes.OK).json({
    msg: "Here are your palancas",
    palancas: ["testing", "testing", "testing"],
  });
};

export const sendPalanca = (req: Request, res: Response): void => {
  res.status(StatusCodes.CREATED).json({ msg: "palanca sent" });
};
