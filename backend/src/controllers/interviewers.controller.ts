import { Request, Response } from "express";
import interviewers from "../models/interviewers.model";
/**
 *
 * @param req
 * @param res
 * @returns {void}
 */
const getInterviewersWithDayId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // get all of the dayIds from the query string
    const dayIds = typeof req.query.dayIds === "string" ? req.query.dayIds : "";

    //parse the dayIds into an array of numbers
    const dayIdsArray = dayIds.split(",").map(Number);

    const interviewersWithDayId =
      await interviewers.findManyWithDayId(dayIdsArray);

    res.status(200).json({ interviewers: interviewersWithDayId });
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
};

export default { getInterviewersWithDayId };
