"use client";
import React from "react";

export default function BlendBox({ size = 48 }) {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        backgroundColor: "#fff",       // solid white
        mixBlendMode: "difference",    // key for dynamic contrast
        pointerEvents: "none",         // optional
      }}
    />
  );
}



// "use client";
// import React from "react";

// export default function LogoBlend() {
//   return (
//     <div className="fixed top-4 left-4 z-50">
//       <img
//         src="/logo.png"
//         alt="Logo"
//         className="w-50 h-auto mix-blend-difference pointer-events-none"
//       />
//     </div>
//   );
// }
