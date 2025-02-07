"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(false);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    const timer = setTimeout(() => {
      setShow(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!mount) return null;

  return (
    <div
      className={`
        fixed inset-0 flex items-center justify-center z-50
        transition-all duration-300 ease-in-out
        ${show ? "bg-black/50 backdrop-blur-sm" : "bg-black/0 backdrop-blur-none"}
      `}
    >
      <div
        className={`
          bg-white/90 rounded-xl p-6 flex flex-col items-center gap-3
          shadow-lg transform transition-all duration-300 ease-in-out
          ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full" />
          <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
        <span className="text-sm font-medium text-gray-700">
          데이터를 불러오고 있습니다...
        </span>
      </div>
    </div>
  );
}