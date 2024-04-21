import { getAllCompanies } from "@/server/db/queries";
import React from "react";
import Image from "next/image";

async function Companies(): Promise<React.JSX.Element | undefined> {
  const data = await getAllCompanies();

  if (data.length > 0) {
    return (
      <div className="flex flex-wrap justify-center gap-8 px-24">
        {data.map((company) => {
          return (
            <Image
              key={company.id}
              height={company.image_height!}
              width={company.image_width!}
              sizes={company.image_sizes!}
              src={company.image!}
              alt={company.name!}
            />
          );
        })}
      </div>
    );
  }
}

export default Companies;
