"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface FlipWordsProps {
  words: string[];
  letterStyles?: { [word: string]: { [index: number]: React.CSSProperties } }; // Styles for specific letters
  wordStyle?: React.CSSProperties; // Style for entire word
  className?: string;
  animationType?: "none" | "fade"; // Custom prop to handle animation type
}

export const FlipWords = ({
  words,
  letterStyles = {},
  wordStyle = {},
  className,
  animationType = "fade", // Default to no animation
}: FlipWordsProps) => {
  const getLetterStyle = (word: string, index: number) => {
    const styles = letterStyles[word] || {};
    return styles[index] || {};
  };

  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      {words.map((word, wordIndex) => (
        <div
          key={wordIndex}
          className={`inline-block ${animationType === "fade" ? "fade-in" : ""}`}
          style={wordStyle}
        >
          {word.split("").map((letter, letterIndex) => (
            <span
              key={letterIndex}
              style={getLetterStyle(word, letterIndex)}
            >
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
