"use client";

import cn from "@/utils/class-names";
import Image from "next/image";
import { PiEnvelopeSimple, PiPhone, PiStarFill } from "react-icons/pi";
import { Badge, Button,  Title } from "rizzui";

import {TherapistDataType} from "@/types"


interface SidebarProps {
  className?: string;
  therapist: TherapistDataType;
}

export default function TherapistInfo({ className, therapist }: SidebarProps) {

  if (!therapist) {
    return <div>Therapist not Found</div>;
  }

  return (
    <article className={cn("lg:px-0 lg:pb-0", className)}>
      <div className="grid items-end gap-4 @xl:grid-cols-[80px_1fr] @2xl:grid-cols-[128px_1fr] md:gap-6">
        <figure className="relative h-28 w-28 rounded-full border-4 border-white drop-shadow @2xl:h-40 @2xl:w-40 @4xl:h-48 @4xl:w-48">
          <span className="absolute bottom-2 right-2 z-10 h-4 w-4 rounded-full border-2 border-white bg-[#11A849] @2xl:h-5 @2xl:w-5" />
          <Image
            src={therapist.avatar}
            alt={therapist.name}
            fill
            priority
            className="rounded-full bg-gray-100 object-cover"
          />
        </figure>

        <div className="grid grid-cols-2 gap-1 md:gap-1">
          <article>
            <div className="flex items-center gap-2.5">
              <Title as="h3" className="text-lg xl:text-xl">
                {therapist.name}
              </Title>
              <Badge className="gap-1.5">
                4.5/5
                <PiStarFill className="h-4 w-4 fill-[#FFEB3C]" />
              </Badge>
            </div>
            <p>
              <a href={`mailto:${therapist.email}`}>
                {therapist.email}
              </a>
            </p>
          </article>

          <article className="flex flex-wrap items-center justify-end gap-3">
            <Button
              variant="outline"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <PiPhone size={18} />
              WhatsApp
            </Button>
            <Button className="flex items-center gap-1">
              <PiEnvelopeSimple size={18} />
              Email
            </Button>
          </article>
        </div>
      </div>
    </article>
  );
}
