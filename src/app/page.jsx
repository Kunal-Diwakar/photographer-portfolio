"use client";

import Nav from "@/components/Nav";
import Preloader from "@/components/Preloader";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="app">
      <Preloader />

      <Nav />

      <Slider />

      <footer className="absolute left-0 bottom-0 w-screen p-2 flex justify-between gap-8 z-20 select-none">
        <p className="block uppercase text-black text-sm">Portfolio</p>
        <p className="block uppercase text-black text-sm">2025</p>
      </footer>

      <div className="gradient-bg"></div>
    </div>
  );
}
