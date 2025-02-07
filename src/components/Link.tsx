"use client";

import { useTransitionRouter } from "next-view-transitions";
import { ReactNode } from "react";
import NextLink from "next/link";

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  withTransition?: boolean;
}

export default function Link({
  href,
  children,
  className = "text-blue-500",
  withTransition = false,
}: LinkProps) {
  const router = useTransitionRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (withTransition) {
      router.push(href, {
        onTransitionReady: slideInOut,
      });
    } else {
      router.push(href);
    }
  };

  return (
    <NextLink href={href} className={className} onClick={handleClick}>
      {children}
    </NextLink>
  );
}

function slideInOut() {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translate(0, 0)",
      },
      {
        opacity: 0,
        transform: "translate(-100px, 0)",
      },
    ],
    {
      duration: 400,
      easing: "ease",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    },
  );

  document.documentElement.animate(
    [
      {
        opacity: 0,
        transform: "translate(100px, 0)",
      },
      {
        opacity: 1,
        transform: "translate(0, 0)",
      },
    ],
    {
      duration: 400,
      easing: "ease",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    },
  );
}