"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenTexts?: number;
  showCursor?: boolean;
}

export const TypewriterText = ({
  texts,
  className = "",
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
  showCursor = true,
}: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const text = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText !== text) {
      // Typing
      timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length + 1));
      }, typeSpeed);
    } else if (isDeleting && currentText !== "") {
      // Deleting
      timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length - 1));
      }, deleteSpeed);
    } else if (!isDeleting && currentText === text) {
      // Finished typing, wait then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenTexts);
    } else if (isDeleting && currentText === "") {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentTextIndex,
    isDeleting,
    texts,
    typeSpeed,
    deleteSpeed,
    delayBetweenTexts,
  ]);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;

    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, [showCursor]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <span>{currentText}</span>
      {showCursor && (
        <span
          className={`inline-block ml-1 w-1 bg-current transition-opacity duration-100 ${
            cursorVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ height: "1em" }}
        >
          |
        </span>
      )}
    </motion.div>
  );
};
