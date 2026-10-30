"use client";

import Link from "next/link";
import React from "react";

/*
  Qx Broker brand logo — single source of truth.
  Vector artwork supplied by the brand (images/qs_logo.svg): isometric cube mark
  + "QX BROKER" wordmark. All fills are currentColor so the colour follows text
  classes on the wrapper (defaults to white). Edit this file to change the logo
  on every surface (public, auth, in-app) in this app.
*/

type BrandLogoProps = {
  /** Rendered height in px. */
  size?: number;
  /** "full" = mark + wordmark, "mark" = cube only. */
  variant?: "full" | "mark";
  /** Wrap in a link. Pass null to render inline without a link. */
  href?: string | null;
  className?: string;
  /** Extra classes for the svg (e.g. a different text colour). */
  wordmarkClassName?: string;
};

const MARK_PATH =
  "M26.44 22.512v-15l-6.224-3.54v2.529l3.995 2.287v12.448l-1.765 1.011V12.135h-2.23v11.388l-1.813 1.012V9.294h-2.23V25.81l-1.813 1.035V3.178l4.043 2.312V2.937L13.233 0 8.087 2.937v2.528l4.043-2.287v23.668l-1.814-1.035V9.294h-2.23v15.265l-1.813-1.036V12.135h-2.23V22.27L2.23 21.236V8.788l.122-.072L6.273 6.5V3.949L0 7.512v15L13.233 30l13.208-7.488z";

const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 28,
  variant = "full",
  href = "/",
  className = "",
  wordmarkClassName = "",
}) => {
  const isMark = variant === "mark";
  const vbW = isMark ? 26.44 : 140;
  const width = (size * vbW) / 30;

  const content = (
    <span
      className={`inline-flex items-center text-white ${className}`}
      style={{ lineHeight: 1 }}
    >
      <svg
        width={width}
        height={size}
        viewBox={`0 0 ${vbW} 30`}
        fill="currentColor"
        role="img"
        aria-label="Qx Broker"
        className={`shrink-0 ${wordmarkClassName}`}
      >
        <path d={MARK_PATH} />
        {!isMark && (
          <text x="35" y="21" fontSize="17" fontFamily="Arial, sans-serif" fontWeight="700">
            Qx Broker
          </text>
        )}
      </svg>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center">
        {content}
      </Link>
    );
  }
  return content;
};

export default BrandLogo;
