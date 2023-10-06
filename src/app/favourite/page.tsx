import { type } from "os";

import cloudinary from "cloudinary";
import { requestToBodyStream } from "next/dist/server/body-streams";
import View from "../gallery/view";
import Loding from "./loding";

type myImage = {
  public_id: string;
  tags: string[];
};

const Page = async () => {
  let res = (await cloudinary.v2.search
    .expression("resource_type:image   AND tags=favourite ")
    .sort_by("public_id", "desc")
    .max_results(10)
    .with_field("tags")

    .execute()) as { resources: myImage[] };

  return (
    <>
      <div className="flex items-center justify-between px-5 py-3">
        <h2 className="mb-2 px-4 text-3xl font-semibold tracking-tight">
          Favourite
        </h2>

     
      </div>
      <div className="grid grid-cols-4 gap-4 p-3">
        {res.resources.map((item, i) => {
          return (
            <div key={i}>
              <View src={item.public_id} tag={item.tags} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Page;
