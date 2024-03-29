import { Request, Response } from "express";
import days from "../models/days.model";

const getDays = async (req: Request, res: Response): Promise<void> => {
  try {
    //get all days
    const allDays = await days.getDays();

    //logic to appointments: truepointments: trueeck the updates on each day
    for (let i = 0; i < allDays.length; i++) {
      const { id, appointments } = allDays[i];
      let spots = 0;

      //if there are no interview increase the spot
      for (let j = 0; j < appointments.length; j++) {
        if (!appointments[j].interview) {
          spots++;
        }
      }

      // update the data that changed in client side
      allDays[i].spots = spots;

      // update the data in db
      await days.updateDays({
        id,
        attr: { spots },
      });
    }

    res.status(200).json({ days: allDays });
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
};

export default {
  getDays,
};
