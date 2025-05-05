import React from "react";
import { languages } from "./languages";

export default function Header() {
  /**
   * Goal: Build out the main parts of our app
   *
   * Challenge: Create the language chips. Use the
   * `languages.js` file to pull in the array of
   * languages to use, which contains the language
   * name, background color, and text color.
   *
   * Hint for layout: use a flex container that can wrap
   * to layout the languages.
   */

  const languagesElements = languages.map((lang) => {
    return <span>{lang.name}</span>;
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
      </header>
    </div>
  );
}
