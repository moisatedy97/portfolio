import { Label } from "@/components/ui/label";
import { getFileFromDir } from "@/lib/utils";
import { getProjectDatabases } from "@/server/db/queries";
import React from "react";
import Image from "next/image";

async function Databases({ projectId }: { projectId: number }): Promise<React.JSX.Element | undefined> {
  const databases = await getProjectDatabases(projectId);

  if (databases.length > 0) {
    return (
      <div className="flex items-start gap-4">
        <Label className="text-primary-contrast w-24 text-base">Databases</Label>
        <div className="flex flex-1 flex-wrap gap-4">
          {databases.map((database, index) => {
            const isValidPath = database.image ? getFileFromDir(database.image) !== null : false;

            return (
              <div key={`${database.name}_${index}`} className="flex items-center gap-1">
                {isValidPath && (
                  <div className="relative h-5 w-5">
                    <Image
                      src={database.image!}
                      alt={database.name ?? `Database image ${index}`}
                      className="origin-center"
                      fill={true}
                      sizes="20px"
                    />
                  </div>
                )}
                <p className="font-semibold">{database.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Databases;
