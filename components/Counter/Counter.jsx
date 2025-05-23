"use client";
import { useState, useEffect } from "react";

export default function Counter({ target, duration = 1000, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = target / (duration / 16); // ~60fps
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [inView, target, duration]);

  return <>{count.toLocaleString()}</>;
}
