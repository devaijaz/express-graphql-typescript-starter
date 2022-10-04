import express from 'express';
import authRouter from './api/auth-router';
import userRouter from './api/user-router';

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);

export default router;