import { Label } from "@/components/ui/label";
import React from "react";
import Image from "next/image";
import { getProjectOtherUtils } from "@/server/db/queries";
import { getFileFromDir } from "@/lib/utils";

async function OtherUtils({ projectId }: { projectId: number }): Promise<React.JSX.Element | undefined> {
  const otherUtils = await getProjectOtherUtils(projectId);

  if (otherUtils.length > 0) {
    return (
      <div className="flex items-start gap-4">
        <Label className="text-primary-contrast w-24 text-base">Other Utils</Label>
        <div className="flex flex-1 flex-wrap gap-4">
          {otherUtils.map((otherUtil, index) => {
            const isValidPath = otherUtil.image ? getFileFromDir(otherUtil.image) !== null : false;

            return (
              <div key={`${otherUtil.name}_${index}`} className="flex items-center gap-1">
                {isValidPath && (
                  <div className="relative h-5 w-5">
                    <Image
                      src={otherUtil.image!}
                      alt={otherUtil.name ?? `Other Util image ${index}`}
                      className="origin-center"
                      fill={true}
                      sizes="20px"
                    />
                  </div>
                )}
                <p className="font-semibold">{otherUtil.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default OtherUtils;
