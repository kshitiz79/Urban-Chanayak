// components/BlendBox.jsx
"use client";
import React from "react";

export default function BlendBox({ size = 48 }) {
  return (
    <div
      style={{
        // you want this to blend with the red/blue behind it,
        // so *don't* isolate it in its own stacking context
        position: "relative",
        width: size,
        height: size,
        backgroundColor: "#fff",        // solid white
        mixBlendMode: "difference",     // invert whatever is under it
        pointerEvents: "none",          // optional, so it never steals clicks
      }}
    />
  );
}
