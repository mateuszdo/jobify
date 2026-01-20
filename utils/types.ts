import { z } from "zod";

export type JobType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
};

export enum JobStatus {
  Pending = "pending",
  Interview = "interview",
  Declined = "declined",
}
export enum JobMode {
  FullTime = "fullTime",
  PartTime = "partTime",
  Internship = "internship",
}

export const createAndEditJobSchema = z.object({
  position: z.string().min(2, {
    message: "position must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "position must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "position must be at least 2 characters.",
  }),
  status: z.enum(JobStatus),
  mode: z.enum(JobMode),
});

export type CreateAndEditJobType = z.infer<typeof createAndEditJobSchema>;
