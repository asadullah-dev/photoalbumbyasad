"use client"

import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";

interface UploadImage {
  event: "success";
  info: { public_id:string};
}

export default function Home() {
const [ImageId,SetImageId]=  useState("jksjeddk5fmpkdctxfzg")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        uploadPreset="e3bl6ydb"
        onUpload={(result) => {
          let res=result as UploadImage;
          SetImageId(res.info.public_id)
    
        }}
      />
      <CldImage
        width="500"
        height="600"
        src={ImageId}
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
