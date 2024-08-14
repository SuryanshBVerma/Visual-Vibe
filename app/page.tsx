"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LandingPage() {

  const router = useRouter();


  return (
    <div className="relative"> {/* Add relative positioning */}
      <BackgroundBeams />
      <div className="relative z-10 min-h-[90vh]"> {/* Add z-10 to bring content above background */}

        {/* Header */}
        <header className="p-4 flex items-center justify-center m-4 mt-4">
          <div className="flex justify-center items-center text-8xl font-bold text-white">
            <Image
              src="/icons/logo.svg"
              alt="Visual Vibe Logo"
              height={100}
              width={100}
            />
            Visual Vibe
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center py-20 h-full">
          <h1 className="text-xl font-bold text-white mb-4">
            <TextGenerateEffect words="Connect Seamlessly"/>
            <TextGenerateEffect words="Anytime , Anywhere" className="text-6xl"/>
          </h1>
          <p className="text-xl text-gray-300 mb-8">Experience high-quality video conferencing like never before</p>

          <Button
            size="lg"
            className="cursor-pointer bg-blue-500 hover:bg-blue-800 text-white text-sm"
            onClick={() => { router.push('/home') }}
          >
            Get Started
          </Button>
        </section>

      </div>
      <footer className="fixed bottom-0 z-10 w-full bg-black text-white py-5 px-4"> {/* Add z-10 to footer */}
        <div className="container mx-auto flex justify-center items-center text-sm">
          Developed by Suryansh
        </div>
      </footer>
    </div>
  );
}