import { Router } from "express";
import { matchedData, query } from "express-validator";
import { setTimeout } from "node:timers/promises";

export const timeDelayMiddleware = Router();

timeDelayMiddleware.use(
    query("delay").optional().toInt(),
    async (request, _response, next) => {
        const { delay }: { delay?: number } = matchedData(request);

        if (delay) {
            await setTimeout(delay * 1000);
            next();
        } else {
            next();
        }
    },
);
