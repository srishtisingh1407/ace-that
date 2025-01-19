"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-emerald-100 hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="font-medium text-xl text-center">+ Add new </h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-semibold text-2xl text-emerald-700">
              Tell us more about your job Interview
            </DialogTitle>
             
            <DialogDescription asChild>
              <div>
                <h2 className="">
                  Add details about your job position, Job description and years
                  of experience
                </h2>
                <div className="mt-7 my-3">
                  <label className="text-emerald-800" htmlFor="">Job Role/ Job Position :</label>
                  <Input placeholder="Ex. Front-end Developer"></Input>
                </div>
                <div className=" mt-7 my-3">
                  <label className="text-emerald-800" htmlFor="">Job Description/ Tech-stack (In short) :</label>
                  <Textarea placeholder="Ex. Javascript, React,etc."/>
                </div>
                <div className=" mt-7 my-3">
                  <label className="text-emerald-800" htmlFor="">Years of Experience :</label>
                  <Input type="number" placeholder="Ex. 1"></Input>
                </div>
              </div>
            </DialogDescription>
            <div className="flex gap-5 justify-end">
              <Button variant="ghost" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button className="bg-emerald-700 hover:bg-emerald-900">Start Interview</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
