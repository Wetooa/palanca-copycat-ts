import { Request } from "express";

export const notFound = (req: Response, res: any) =>
  res.status(404).send("Route does not exist");
