import { Router } from "express";
import { matchedData, query } from "express-validator";

export const timeDelayMiddleware = Router();

timeDelayMiddleware.use(
    query("delay").optional().isNumeric(),
    (request, _response, next) => {
        const { delay }: { delay?: number } = matchedData(request);

        if (delay) {
            setTimeout(next, delay);
        } else {
            next();
        }
    },
);
