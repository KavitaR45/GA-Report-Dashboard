"use client";
import Navbar from "./_components/navbar";

const MarketingLayout = ({ children }) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
       <Navbar />
      <main className="h-full w-full">
        {children}
      </main>
    </div>
  );
}

export default MarketingLayout;
