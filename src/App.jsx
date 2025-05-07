import React from "react";
import { useState } from "react";
import { clsx } from "clsx";
import { languages } from "./languages";

export default function Header() {
  /**
   * Goal: Add in the incorrect guesses mechanism to the game
   *
   * Challenge:
   * 1. Create a variable `isGameOver` which evaluates to `true`
   *    if the user has guessed incorrectly 8 times. Consider how
   *    we might make this more dynamic if we were ever to add or
   *    remove languages from the languages array.
   * 2. Conditionally render the New Game button only if the game
   *    is over.
   */

  const [currentWord] = useState("react");
  const [guessing, setGuessing] = useState([]);

  function handleGuess(letter) {
    if (!guessing.includes(letter)) {
      setGuessing((prevGuesses) => [...prevGuesses, letter]);
    }
  }
  //handle the wrong guesses
  const wrongGuessCount = guessing.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  

  
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  //creating place to hold the guesses
  const keyboard = alphabet.split("").map((letter) => {
    // define the guess letter and knowing when it will be right or wrong
    const isGuessed = guessing.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    return (

      // the keyboard
      <button
        key={letter}
        className={clsx(
          //making the
          "inline-flex justify-center items-center w-[40px] h-[40px] text-white text-lg font-medium rounded-md m-1 hover:bg-[#fccf5c] active:bg-[#fabe3f]",
          {
            "bg-[#FCBA29] text-white": isGuessed,
            "bg-green-500 text-white": isCorrect,
            "bg-red-500 text-white": isWrong,
          }
        )}
        onClick={() => handleGuess(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  const wordLetters = currentWord.split("").map((letter, index) => {
    return (
      <span
        key={index}
        className="inline-flex justify-center items-center w-[40px] h-[40px] 
                 text-[#F9F4DA] text-2xl font-bold border-b border-[#F9F4DA] mx-1"
      >
        {guessing.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    );
  });

  const languagesElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessCount;
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
      padding: "4px 8px",
      borderRadius: "12px",
      margin: "3px",
      display: "inline-block",
      position: "relative",
    };

    // Create a chip with a skull overlay when lost
    return (
      <div key={lang.name} className="relative inline-block">
        <span className={`${isLanguageLost ? "lost" : ""}`} style={styles}>
          {lang.name}
        </span>
        {isLanguageLost && (
          <span className="absolute inset-0 flex items-center justify-center text-2xl bg-black/70 rounded-lg">
            💀
          </span>
        )}
      </div>
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
      <div className="flex justify-center items-center mx-auto mt-8">
        <div className="flex">{wordLetters}</div>
      </div>

      <div className="flex flex-wrap justify-center max-w-lg mx-auto mt-8">
        {keyboard}
      </div>
    </div>
  );
}
