"use client";

import React, { useEffect } from "react";
import gsap from "gsap/all";

const Preloader = () => {
  useEffect(() => {
    const counter = document.querySelector(".counter");
    const preloader = document.querySelector(".preloader");

    const milestones = [0, 15, 30, 45, 60, 75, 95, 100];
    let currentIndex = 0;

    const updateCounter = () => {
      if (currentIndex < milestones.length) {
        counter.textContent = milestones[currentIndex];
        currentIndex++;
        setTimeout(updateCounter, 400);
      } else {
        gsap.to(preloader, {
          duration: 2,
          y: "-100%",
          ease: "power4.inOut",
        });
      }
    };

    setTimeout(updateCounter, 400);
  }, []);

  return (
    <div
      className="preloader fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center z-50 bg-black
text-white select-none"
    >
      <img src="/bg-1.avif" alt="bg" className="img w-full h-full object-cover" />
      
      <div className="title text-2xl md:text-5xl font-medium leading-[1] -tracking-[0.1rem] mb-4 text-center uppercase absolute"><h1>Capturing Life, <br/>One Click at a Time.</h1></div>

      <div className="counter absolute bottom-0 mb-8">0</div>
    </div>
  );
};

export default Preloader;
