import express, { Request, Response } from "express";

const login = (req: Request, res: Response): void => {
  res.send("login");
};

export default login;
