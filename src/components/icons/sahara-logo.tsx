"use client";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center mb-4">
      <Image src="/logo.jpg" alt="Logo" width={150} height={150} priority />
    </div>
  );
}
