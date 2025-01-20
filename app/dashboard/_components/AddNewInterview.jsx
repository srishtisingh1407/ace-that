"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModel";
import { Loader2 } from "lucide-react";
import { db } from "@/utils/db";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";

import { MockInterview } from "@/utils/schema";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const { user } = useUser();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const InputPrompt =
      "Generate " +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      " interview questions and answers in JSON format tailored for the following job details: Job Position: " +
      jobPosition +
      " Job Description: " +
      jobDesc +
      " Years of Experience: " +
      jobExperience +
      " The JSON should have an array structure, where each question-answer pair is an object with question and answer fields. Ensure the questions test the core technical skills, problem-solving abilities, and behavioral aspects relevant to the job. Format the output neatly for integration.";

    const result = await chatSession.sendMessage(InputPrompt);
    const responseText = await result.response.text();
    const MockJsonResp = responseText.replace("```json", "").replace("```", "");
    const parsedJson = JSON.parse(MockJsonResp);

    setJsonResponse(parsedJson);

    const resp = await db.insert(MockInterview).values({
      mockId: uuidv4(),
      jsonMockResp: MockJsonResp,
      jobPosition,
      jobDesc,
      jobExperience,
      createdBy: user?.primaryEmailAddress?.emailAddress || "unknown",
    });

    console.log("Inserted Id: ", resp);

    // Reset state and close dialog
    setOpenDialog(false);
    setJobPosition("");
    setJobDesc("");
    setJobExperience("");
    setJsonResponse([]);
    setLoading(false);
  };

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-emerald-100 hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="font-medium text-xl text-center">+ Add new</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-semibold text-2xl text-emerald-700">
              Tell us more about your job Interview
            </DialogTitle>

            <DialogDescription asChild>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>
                    Add details about your job position, Job description, and
                    years of experience
                  </h2>
                  <div className="mt-7 my-3">
                    <label className="text-emerald-800" htmlFor="job-role">
                      Job Role/ Job Position:
                    </label>
                    <Input
                      id="job-role"
                      placeholder="Ex. Front-end Developer"
                      required
                      value={jobPosition}
                      onChange={(event) => setJobPosition(event.target.value)}
                    />
                  </div>
                  <div className="mt-7 my-3">
                    <label
                      className="text-emerald-800"
                      htmlFor="job-description"
                    >
                      Job Description/ Tech-stack (In short):
                    </label>
                    <Textarea
                      id="job-description"
                      placeholder="Ex. JavaScript, React, etc."
                      required
                      value={jobDesc}
                      onChange={(event) => setJobDesc(event.target.value)}
                    />
                  </div>
                  <div className="mt-7 my-3">
                    <label className="text-emerald-800" htmlFor="experience">
                      Years of Experience:
                    </label>
                    <Input
                      id="experience"
                      type="number"
                      placeholder="Ex. 1"
                      required
                      value={jobExperience}
                      onChange={(event) =>
                        setJobExperience(event.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="flex gap-5 justify-end mt-5">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-emerald-700 hover:bg-emerald-900"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
