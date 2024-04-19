import { getFilesFromDir } from "@/lib/utils";
import React from "react";

export default async function Files() {
  const data = await getFilesFromDir("/public/images/projects/mist");

  return (
    <div>
      {data.map((file) => (
        <div key={file}>{file}</div>
      ))}
    </div>
  );
}
