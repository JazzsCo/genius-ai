"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Wave from "react-wavify";

const Footer = () => {
  const theme = useTheme().theme;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="mt-40 relative">
      <Wave
        mask="url(#mask)"
        fill={theme === "dark" ? "#0F172A" : "#F1F5F9"}
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 10,
          amplitude: 17,
          speed: 0.5,
          points: 2,
        }}
      />

      <div className="absolute bottom-0 left-0">
        <p className="text-black/50 dark:text-white/20 text-[10px] sm:text-sm px-3 pb-[0.5px]">
          Copyright &copy; Genius AI. All rights reserved.
          <a
            className="ml-2 cursor-pointer hover:underline"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/u/0/#sent?compose=CllgCJvlHJLCRrGqkqwjvwMvvLjvcWrSQgzzhVwWtHWtwXZNJjTXXVNPFmZpWbwfHNHnWThWSNB"
              )
            }
          >
            Contact Developer
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
