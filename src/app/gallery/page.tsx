import { type } from "os";
import Upload from "./upload";
import cloudinary from "cloudinary";
import { requestToBodyStream } from "next/dist/server/body-streams";
import View from "./view";
import Loding from "./loding";

type myImage = {
  public_id: string;
  tags:string[]
};

const Page = async () => {
  let res = (await cloudinary.v2.search
    .expression("resource_type:image ")
    .sort_by("public_id", "desc")
    .max_results(10)
    .with_field("tags")

    .execute()) as { resources: myImage[] };

  
  return (
    <>
      <div className="flex items-center justify-between px-5 py-3">
        <h2 className="mb-2 px-4 text-3xl font-semibold tracking-tight">
          Gallery
        </h2>

        <Upload />
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
