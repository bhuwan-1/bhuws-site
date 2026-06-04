import { useEffect, useState } from "react";

export default function TypeLine({
  text,
  className = "",
  start = 0,
  speed = 80,
  caret = false,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // respect reduced-motion: show the full line immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, start);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, start, speed]);

  return (
    <span className={className} aria-label={text} role="text">
      {text.split("").map((ch, i) => (
        <span
          className={`type-char${i < count ? " on" : ""}`}
          aria-hidden="true"
          key={i}
        >
          {ch}
        </span>
      ))}
      {caret && (
        <span
          className={`type-caret${count >= text.length ? " on" : ""}`}
          aria-hidden="true"
        >
          ▌
        </span>
      )}
    </span>
  );
}
