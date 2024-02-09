import { Router } from "express";
import controller from "../controllers/interviewers.controller";
export const interviewersRouter = Router();

interviewersRouter.get("/", controller.getInterviewersWithDayId);
