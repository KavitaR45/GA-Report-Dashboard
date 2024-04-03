"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import React from "react";

function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 font-bold text-blue-500 text-2xl">
          GA.
        </div>
        <div className="flex flex-1 justify-end gap-x-3">
          <Button size='sm'>Log in</Button>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
