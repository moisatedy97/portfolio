import { ModeToggle } from "@/components/mode-toggle";
import React from "react";

function Navbar(): React.JSX.Element {
  return (
    <div className="flex w-full items-center justify-end px-6 py-4">
      <ModeToggle />
    </div>
  );
}

export default Navbar;
