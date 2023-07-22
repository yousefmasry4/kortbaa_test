/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { Request, Response } from "express";

import type { Controller } from "@/presentation/protocols";

export const expressRouterAdapter = (controller: Controller) => {
  /// consider headers
  return async (req: Request, res: Response) => {
    const headers = req.headers;
    const request = { ...req.body};
    console.log(req.body);
    console.log(headers);
    const response = await controller.handle(request, headers);
    res.status(response.statusCode).json(response.body);
  }
};
