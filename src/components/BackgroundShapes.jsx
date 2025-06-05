// BackgroundShapes.jsx
import React from "react";

const BackgroundShapes = ({
  type = "circle",
  position = "top-left",
  size = "w-32 h-32",
  color = "text-green-300",
  opacity = "opacity-20",
  offset = "", // pour ajuster la position si besoin
}) => {
  // Définir les positions possibles (shapes qui dépassent du bloc)
  const positions = {
    "top-left": "absolute -top-16 -left-16",
    "top-right": "absolute -top-16 -right-16",
    "bottom-left": "absolute -bottom-16 -left-16",
    "bottom-right": "absolute -bottom-16 -right-16",
    "top-center": "absolute -top-16 left-1/2 ml-[-4rem]", // au lieu de translate-x
    "bottom-center": "absolute -bottom-16 left-1/2 ml-[-4rem]",
    "center-left": "absolute top-1/2 -left-16 mt-[-4rem]",
    "center-right": "absolute top-1/2 -right-16 mt-[-4rem]",
  };

  // Définir les formes possibles
  const shapes = {
    circle: <circle cx="50" cy="50" r="50" />,
    square: <rect width="100" height="100" />,
    roundedSquare: <rect width="100" height="100" rx="20" />,
    triangle: <polygon points="50,5 95,95 5,95" />,
    diamond: <polygon points="50,5 95,50 50,95 5,50" />,
  };

  return (
    <svg
      className={`${positions[position]} ${size} ${opacity} ${color} pointer-events-none ${offset}`}
      fill="currentColor"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {shapes[type]}
    </svg>
  );
};

export default BackgroundShapes;
