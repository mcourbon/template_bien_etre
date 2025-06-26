import React from "react";

const BackgroundShapes = ({
  type = "circle",
  position = "top-left",
  size = "w-32 h-32",
  color = "text-green-300",
  opacity = "opacity-20",
  offset = "", // to adjust the position if needed
}) => {
  // Possible positions (shapes sticking out of the container)
  const positions = {
    "top-left": "absolute -top-16 -left-16",
    "top-right": "absolute -top-16 -right-16",
    "bottom-left": "absolute -bottom-16 -left-16",
    "bottom-right": "absolute -bottom-16 -right-16",
    "top-center": "absolute -top-16 left-1/2 ml-[-4rem]", // instead of translate-x
    "bottom-center": "absolute -bottom-16 left-1/2 ml-[-4rem]",
    "center-left": "absolute top-1/2 -left-16 mt-[-4rem]",
    "center-right": "absolute top-1/2 -right-16 mt-[-4rem]",
  };

  // Define appropriate viewBoxes depending on the shape
  const viewBoxes = {
    roundedTriangle: "0 0 53 53",
    default: "0 0 100 100",
  };

  // SVG shapes
  const shapes = {
    circle: <circle cx="50" cy="50" r="50" />,
    square: <rect width="100" height="100" />,
    roundedSquare: <rect width="100" height="100" rx="20" />,
    triangle: <polygon points="50,5 95,95 5,95" />,
    roundedTriangle: (
      <path
        d="M17.8397 8.7872
           a10 10 0 0 1 17.3205 0
           l14.6795 25.4256
           a10 10 0 0 1 -8.6603 15
           l-29.359 0
           a10 10 0 0 1 -8.6603 -15
           z"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    ),
    diamond: <polygon points="50,5 95,50 50,95 5,50" />,
  };

  return (
    <svg
      className={`${positions[position]} ${size} ${opacity} ${color} pointer-events-none ${offset}`}
      fill="currentColor"
      viewBox={viewBoxes[type] || viewBoxes.default}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {shapes[type]}
    </svg>
  );
};

export default BackgroundShapes;
