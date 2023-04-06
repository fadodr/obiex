import { NextFunction, Request, Response } from 'express';

export type ControllerHandlerFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;


export type UpdateTxnArg = {
  clientId: string;
  walletAddress: string;
  currencyType: string;
};