"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { AiFillFolderAdd } from "react-icons/ai";
import { folderCreat } from "../action";

const AlbumDialogue = ({ imageData }: { imageData :string}) => {
  const [album, setalbum] = useState("");
  const [open, setopen] = useState(false);
  return (
    <div>
      <Dialog open={open} onOpenChange={setopen}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="p-0 m-0">
            <AiFillFolderAdd className="w-8 h-8 duration-200 cursor-pointer text-white hover:text-red-500" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add to Album</DialogTitle>
            <DialogDescription>
              Enter the name picture album you want to add in album. Click add
              to album when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="album-name" className="text-right">
                Name
              </Label>
              <Input
                id="album-name"
                value={album}
                onChange={(e: any) => {
                  setalbum(e.target.value);
                }}
                placeholder="Add Album Name Here......"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={async () => {
                setopen(false);
                await folderCreat(album,imageData);
              }}
            >
              Add to album
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlbumDialogue;
