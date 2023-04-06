import { NextFunction, Request, Response } from 'express';
import {
  ControllerHandlerFn,
  ControllerArgs,
  ValidationSchema,
} from '../types';
import { AnyFunction } from 'sequelize/types/utils';

function parseControllerArgs(req: Request): ControllerArgs {
  return {
    input: req.body,
    params: req.params,
    query: req.query,
    user: req.user,
    headers: req.headers,
  };
}

export const controllerHandler = (
  controllerFn: AnyFunction,
  schema?: ValidationSchema | undefined
): ControllerHandlerFn => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const controllerArgs = parseControllerArgs(req);
    try {
      const controllerResult = await controllerFn(controllerArgs);

      if (!controllerResult) {
        res.status(200).send({ status: true });
        return;
      }

      const { code, ...data } = controllerResult;
      res.status(code ?? 200).send({
        status: true,
        ...data,
      });
        
    } catch (error) {
      next(error);
    }
  }
};
