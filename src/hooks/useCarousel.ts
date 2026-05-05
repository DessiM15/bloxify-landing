"use client";

import { useState, useEffect, useCallback } from "react";

export function useCarousel(count: number, interval: number = 4000) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [isPaused, interval, next]);

  return { activeIndex, setActiveIndex, isPaused, setIsPaused, next, prev };
}
