import { Link } from "next-view-transitions";
import React from "react";

export default function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold vt-about-header">AboutPage</h1>
      <p>About 페이지입니다.</p>
      <Link href="/" className="text-blue-500">
        Go to /
      </Link>
    </div>
  );
}