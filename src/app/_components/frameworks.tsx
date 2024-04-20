import { Label } from "@/components/ui/label";
import { getFileFromDir } from "@/lib/utils";
import { getProjectFrameworks } from "@/server/db/queries";
import React from "react";
import Image from "next/image";

async function Frameworks({ projectId }: { projectId: number }): Promise<React.JSX.Element | undefined> {
  const frameworks = await getProjectFrameworks(projectId);

  if (frameworks.length > 0) {
    return (
      <div className="flex items-start gap-4">
        <Label className="text-primary-contrast w-24 text-base">Frameworks</Label>
        <div className="flex flex-1 flex-wrap gap-4">
          {frameworks.map((framework, index) => {
            const isValidPath = framework.image ? getFileFromDir(framework.image) !== null : false;

            return (
              <div key={`${framework.name}_${index}`} className="flex items-center gap-1">
                {isValidPath && (
                  <div className="relative h-5 w-5">
                    <Image
                      src={framework.image!}
                      alt={framework.name ?? `Framework image ${index}`}
                      className="origin-center"
                      fill={true}
                      sizes="20px"
                    />
                  </div>
                )}
                <p className="font-semibold">{framework.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Frameworks;
