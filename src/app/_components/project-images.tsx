"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, { useRef } from "react";

type ProjectImagesProps = {
  projectId: number;
  imagesPath: string;
  images: string[];
};

function ProjectImages({ projectId, imagesPath, images }: ProjectImagesProps): React.JSX.Element {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <Carousel
      className="w-[18rem] sm:w-[28rem]"
      plugins={[autoplay.current]}
      opts={{
        align: "start",
        loop: true
      }}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.play}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={`${projectId}_${image}`}>
            <div className="relative h-44 w-full sm:h-64">
              <Image
                src={`${imagesPath}/${image}`}
                alt={image}
                fill={true}
                priority={true}
                sizes="(min-width: 1660px) 448px, (min-width: 1540px) calc(34vw - 110px), (min-width: 640px) 448px, 288px"
                className="rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default ProjectImages;
