import React from "react";
import Image from "next/image";
import Logo from "@/components/logo";
import profilePicture from "../../public/images/profile.png";

function Home(): React.JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative h-44 w-[176px]">
        <Image
          className="origin-center rounded-full"
          priority={true}
          fill={true}
          sizes="176px"
          src={profilePicture}
          alt="profile"
        />
      </div>
      <div className="gap flex flex-col items-center">
        <h1 className="text-gradient text-4xl font-bold">Tedy Gabriel Moisa</h1>
        <Logo />
        <h2 className="text-xl font-semibold text-black dark:text-white">Frontend Developer</h2>
      </div>
      {/* <Socials /> */}
    </div>
  );
}

export default Home;
