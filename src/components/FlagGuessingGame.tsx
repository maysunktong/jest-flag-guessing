"use client";

import { data } from "@/data/flags";
import { useEffect, useState } from "react";

type Country = {
  name: string;
  imageSrc: string;
};

/* Fisher-Yates Shuffle (Best Practice) */
/* const x = <T>(...) => {...}; // TS might think <T> is a JSX tag like <div>
 */
function shuffleArray<T>(arr: T[]): T[] {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const FlagGuessingGame = () => {
  const [flag, setFlag] = useState<Country>(data[0]);
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const startGame = () => {
    const randomFlag = data[Math.floor(Math.random() * data.length)];
    const incorrectChoices = data.filter((c) => c.name !== randomFlag.name);
    const shuffledIncorrect = shuffleArray(incorrectChoices).slice(0, 3);
    const allChoices = shuffleArray([randomFlag, ...shuffledIncorrect]).map(
      (c) => c.name
    );

    setFlag(randomFlag);
    setOptions(allChoices);
    setSelected(null);
    setIsCorrect(null);
  };

  useEffect(() => {
    startGame();
  }, []);

  const restartGame = () => {
    startGame();
  };

  const handleGuess = (item: string) => {
    setSelected(item);
    setIsCorrect(item === flag.name);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={flag.imageSrc}
        alt={flag.name}
        width={500}
        height={400}
        className="w-auto h-100"
      />
      <div className="flex flex-col w-sm gap-3 py-6">
        {options.map((option) => (
          <button
            type="button"
            key={option}
            disabled={!!selected}
            onClick={() => handleGuess(option)}
            className={`cursor-pointer font-bold text-white p-4 rounded-2xl ${
              selected
                ? option === flag.name
                  ? "bg-green-700"
                  : option === selected
                  ? "bg-red-700"
                  : "bg-gray-400"
                : "bg-blue-600 hover:bg-blue-800"
            }`}
          >
            {option}
          </button>
        ))}
        {isCorrect !== null && (
          <>
            <p className="text-center text-2xl p-4">
              {isCorrect ? "✅ Correct!" : `❌ Wrong. Answer is ${flag.name}.`}
            </p>
            <button
              className="text-xl font-bold cursor-pointer hover:text-gray-500"
              type="button"
              onClick={restartGame}
            >
              Restart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FlagGuessingGame;
