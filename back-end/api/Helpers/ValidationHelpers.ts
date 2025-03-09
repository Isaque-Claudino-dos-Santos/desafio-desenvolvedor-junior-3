import { NextFunction, Request, Response } from "express";
import { body, matchedData } from "express-validator";

export default class ValidationHelper {
  /*
    baseCustomValidation() {
      return async (req: Request, res: Response, next: NextFunction) => {
        const data = matchedData(req);

        
      };
    }
  */

  bodyEquals(key1: string, key2: string, message: string) {
    return async (req: Request, _: Response, next: NextFunction) => {
      const data = matchedData(req);

      if (!(key1 in data) || !(key2 in data)) {
        next();
        return;
      }

      const data1 = data[key1];
      const data2 = data[key2];

      if (data1 || data2) {
        await body(key1).equals(data2).withMessage(message).run(req);
      }

      next();
    };
  }
}
