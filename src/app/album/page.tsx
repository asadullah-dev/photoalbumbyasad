import cloudinary from "cloudinary";
import Folderlist from "./folderlist";
import { Item } from "@radix-ui/react-select";

export interface FolderType {
  name: string;
  path: string;
}

const Page = async () => {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders:FolderType[]
  }

    
   


  return (
    <div>
      <div className="flex items-center justify-between px-5 py-3">
        <h2 className="mb-2 px-4 text-3xl font-semibold tracking-tight">
          Album
        </h2>
      </div>

      {/* Data Show */}
      <div className="px-5 py-5 grid grid-cols-3 gap-4">
        {folders.map((Items, i) => (
          <div key={i}>
            <Folderlist folder={Items} />
          </div>
        ))}
        {/* {folders.map((Item, i) => {
          return (
            <div key={i}>
              <Folderlist folder={Item} />
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Page;
