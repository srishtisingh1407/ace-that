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
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
             
            </DialogDescription> <div>
                <Button  onClick={()=>setOpenDialog(false)}>Cancel</Button>
                <Button>Start Interview</Button>
              </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
