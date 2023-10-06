"use client"
import { CldImage } from "next-cloudinary";
import { AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {Action} from "../action";
import {useState} from "react"
import AlbumDialogue from "./albumDialogue";

const View = ({src,tag}:{src:string;tag:string[]}) => {
  const [fav, setfav] = useState(tag.includes("favourite"));
  return (
    <div className="relative">
      <CldImage
        width="500"
        height="600"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />
      <div
        className="absolute top-1 right-1"
        onClick={() => {
          Action(src)
        }}
      >
        {fav ? (
          <AiFillHeart className=" w-8 h-8 cursor-pointer text-red-500  " />
        ) : (
          <AiOutlineHeart className="w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-200" />
        )}
      </div>
      {/* add to album */}
      <div  className="absolute bottom-1 left-1">
       <AlbumDialogue  imageData={src}  />
      </div>

    </div>
  );
}

export default View
