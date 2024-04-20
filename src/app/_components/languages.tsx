import { Label } from "@/components/ui/label";
import { getFileFromDir } from "@/lib/utils";
import { getProjectLanguages } from "@/server/db/queries";
import React from "react";
import Image from "next/image";

async function Languages({ projectId }: { projectId: number }): Promise<React.JSX.Element | undefined> {
  const languages = await getProjectLanguages(projectId);

  if (languages.length > 0) {
    return (
      <div className="flex items-start gap-4">
        <Label className="text-primary-contrast w-24 text-base">Languages</Label>
        <div className="flex flex-1 flex-wrap gap-4">
          {languages.map((language, index) => {
            const isValidPath = language.image ? getFileFromDir(language.image) !== null : false;

            return (
              <div key={`${language.name}_${index}`} className="flex items-center gap-1">
                {isValidPath && (
                  <div className="relative h-5 w-5">
                    <Image
                      src={language.image!}
                      alt={language.name ?? `Language image ${index}`}
                      className="origin-center"
                      fill={true}
                      sizes="20px"
                    />
                  </div>
                )}
                <p className="font-semibold">{language.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Languages;
