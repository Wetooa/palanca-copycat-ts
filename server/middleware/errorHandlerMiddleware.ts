import { StatusCodes } from "http-status-codes";

interface Err {
  statusCode: number;
  message: string;
}

const errorHandler = (err: Err, req: Request, res: any) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later",
  };

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandler;
