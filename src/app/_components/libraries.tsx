import { Label } from "@/components/ui/label";
import { getFileFromDir } from "@/lib/utils";
import { getProjectLibraries } from "@/server/db/queries";
import React from "react";
import Image from "next/image";

async function Libraries({ projectId }: { projectId: number }): Promise<React.JSX.Element | undefined> {
  const libraries = await getProjectLibraries(projectId);

  if (libraries.length > 0) {
    return (
      <div className="flex items-start gap-4">
        <Label className="text-primary-contrast w-24 text-base">Libraries</Label>
        <div className="flex flex-1 flex-wrap gap-4">
          {libraries.map((library, index) => {
            const isValidPath = library.image ? getFileFromDir(library.image) !== null : false;

            return (
              <div key={`${library.name}_${index}`} className="flex items-center gap-1">
                {isValidPath && (
                  <div className="relative h-5 w-5">
                    <Image
                      src={library.image!}
                      alt={library.name ?? `Library image ${index}`}
                      className="origin-center"
                      fill={true}
                      sizes="20px"
                    />
                  </div>
                )}
                <p className="font-semibold">{library.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Libraries;
