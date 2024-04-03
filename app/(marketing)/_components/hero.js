"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:pt-45">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-6xl">Data to enrich your online business</h1>
          <p className="mt-6 text-lg leading-8 dark:text-white text-gray-600">Empowering businesses with intuitive reporting solutions, our platform simplifies data analysis. Seamlessly generate customized reports, gaining actionable insights effortlessly.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button> Get Started<ArrowRight className="h-4 w-4 ml-2" /></Button>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Hero;
