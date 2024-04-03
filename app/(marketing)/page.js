"use client";
import Hero from "./_components/hero";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <>
      <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
        <div className="flex flex-col items-center justify-center md:justify-center text-center gap-y-8 flex-1 px-6 pb-10">
          <Hero />
        </div>
        <Footer />
      </div>
    </>
  );
}
