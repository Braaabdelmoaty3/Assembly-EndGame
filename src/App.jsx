import React from "react";
import { languages } from "./languages";

export default function Header() {

  const languagesElements = languages.map((lang) => {
    return (
      <span
        key={lang.name}
        style={{
          backgroundColor: lang.backgroundColor,
          color: lang.color,
          padding: "4px 8px",
          borderRadius: "12px",
          margin: "3px",
          display: "inline-block",
        }}
      >
        {lang.name}
      </span>
    );
  });

  return (
    <div className="min-h-screen bg-[#282726] text-[#F9F4DA]">
      <header className="container mx-auto p-4 flex flex-col items-center">
        <div className="text-center w-full max-w-[352px] px-4 sm:px-0">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            Assembly: Endgame
          </h3>
          <p className="text-sm sm:text-base">
            Guess the word in under 8 attempts to keep the programming world
            safe from Assembly!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full max-w-[352px] h-[59px] bg-[#10A95B] mt-4 rounded">
          <h2 className="text-[#F9F4DA] text-lg sm:text-xl">You Win !</h2>
          <h2 className="text-[#F9F4DA] text-sm sm:text-base">Well done! 🎉</h2>
        </div>
        <div className="flex flex-wrap justify-center max-w-[352px] mt-4">
          {languagesElements}
        </div>
      </header>
    </div>
  );
}
