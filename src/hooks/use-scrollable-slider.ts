"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollableSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isTopScrollable, setIsTopScrollable] = useState(false);
  const [isBottomScrollable, setIsBottomScrollable] = useState(false);

  const checkScrollability = () => {
    const el = containerRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;

    const atTop = scrollTop === 0;
    const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    setIsTopScrollable(!atTop);
    setIsBottomScrollable(!atBottom);
  };

  const scrollToTop = () => {
    const el = containerRef.current;
    if (el) {
      el.scrollBy({ top: -el.clientHeight / 2, behavior: "smooth" });
      checkScrollability();
    }
  };

  const scrollToBottom = () => {
    const el = containerRef.current;
    if (el) {
      el.scrollBy({ top: el.clientHeight / 2, behavior: "smooth" });
      checkScrollability();
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    checkScrollability();

    const onScroll = () => checkScrollability();

    el.addEventListener("scroll", onScroll);
    window.addEventListener("resize", checkScrollability);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkScrollability);
    };
  }, []);

  return {
    containerRef,
    isTopScrollable,
    isBottomScrollable,
    scrollToTop,
    scrollToBottom,
  };
}
