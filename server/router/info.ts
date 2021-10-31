import ResumeData from '../models/info'
import cors from 'cors';
import express, { Request, Response } from 'express';
import { IResume } from '../Interface/types';
export const resumeRouter = express.Router();
resumeRouter.use(cors());
resumeRouter.get("/", async (req: Request, res: Response) => {
    try {
        const resumeData = await ResumeData.find();
        res.status(200).json(resumeData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

resumeRouter.post("/", async (req: Request, res: Response) => {
    const resumePayload: IResume = {
        ...req.body
    }
    const resume = new ResumeData(resumePayload);
    try {
        const newResume = await resume.save();
        res.status(200).json(newResume);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

resumeRouter.put("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        let resumeData = await ResumeData.findById(id);
        if (!resumeData) {
            res.status(404).json({ message: "Not Found" })
        } else {
            await ResumeData.findByIdAndUpdate(id, req.body, {
                useFindAndModify: false
            })
            resumeData = await ResumeData.findById(id);
            res.json(resumeData);
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


resumeRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const resumeData = await ResumeData.findById(id);
        if (!resumeData) {
            res.status(404).json({ message: "Not Tryed" });
        } else {
            await resumeData.remove();
            res.json({ message: "Product Deleted." })
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default resumeRouter