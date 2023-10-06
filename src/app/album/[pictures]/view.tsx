"use client"
import { CldImage } from "next-cloudinary";
import { AiOutlineHeart, AiFillHeart} from "react-icons/ai";

import {useState} from "react"

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
          
        }}
      >
        {fav ? (
          <AiFillHeart className=" w-8 h-8 cursor-pointer text-red-500  " />
        ) : (
          <AiOutlineHeart className="w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-200" />
        )}
      </div>
    

    </div>
  );
}

export default View
