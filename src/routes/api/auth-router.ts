import express, { Request, Response } from 'express';
const router = express.Router();

router.get("/login", (request:Request, response:Response)=> {
  response.json({
    message: "Login Route"
  })
});

export default router;