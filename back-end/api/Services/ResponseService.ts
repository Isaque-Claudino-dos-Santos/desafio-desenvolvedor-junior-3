import { Response } from "express";

export default class ResponseService {
  async unprocessableEntity<T>(data: T, res: Response) {
    res.status(422).json({
      errors: data,
    });
  }

  async unauthorized<T>(data: T, res: Response) {
    res.status(200).json({ error: data });
  }

  async ok<T>(data: T, res: Response) {
    res.status(200).json({ data });
  }

  async created<T>(data: T, res: Response) {
    res.status(201).json({ data });
  }
}
