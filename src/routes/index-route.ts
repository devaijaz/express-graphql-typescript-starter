import express, { Request, Response } from 'express';
const router = express.Router();

router.get("/", (request:Request, response:Response)=> {
  response.json({
    message: "Index Route"
  })
});

router.get("/useragent", (request:Request, response:Response)=> {
  response.json(request.useragent);
});

export default router;