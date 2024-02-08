import { Request, Response } from 'express';
import interviews from '../models/interviews.model';
import { CreateInterviewDto, UpdateInterviewDto } from '../dtos';

const createInterview = async (req: Request, res: Response) => {
  try {
    const createInterviewDto: CreateInterviewDto = req.body;
    const interview = await interviews.createInterview(createInterviewDto);
    res.status(201).json({ interview });
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
};

const updateInterview = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const attr = req.body;
    const updateInterviewDto: UpdateInterviewDto = { id, attr };
    const interview = await interviews.updateInterview(updateInterviewDto);
    res.status(200).json({ interview });
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
};

const deleteInterview = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await interviews.deleteInterview(id);
    res.status(200).json({ message: 'Interview deleted successfully' });
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
};

export default { createInterview, updateInterview, deleteInterview };
