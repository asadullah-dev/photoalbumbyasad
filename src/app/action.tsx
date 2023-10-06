"use server"
import cloudinary from 'cloudinary';
import { promises } from 'dns';

import { revalidatePath } from 'next/cache';



export async function Action(publicId: string, fav: boolean): Promise<void> {
  if (fav) {
    await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);
  } else {
    await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
  }

  await new Promise((resolve) => {
    setTimeout(resolve), 1000;
  });
  revalidatePath("/gallery");
}
    
export async function folderCreat (folder:string , image:string   ){
    await cloudinary.v2.api.create_folder(folder);
    await cloudinary.v2.uploader.rename(image,`${folder}/${image}`)

}

    


