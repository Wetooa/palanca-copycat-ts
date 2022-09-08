import { Request, Response } from "express";

export const getPalanca = (req: Request, res: Response) => {
  res.send("get palanca");
};

export const sendPalanca = (req: Request, res: Response) => {
  res.send("send palanca");
};
