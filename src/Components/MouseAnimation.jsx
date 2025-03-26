import React, { useEffect, useState } from "react";

const MouseAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY + window.scrollY;

      setMousePosition({ x, y });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <div className="relative">
        <div
          className="absolute w-[6px] h-[6px] bg-gray-500 rounded-full pointer-events-none z-50"
          style={{
            transform: `translate(${mousePosition.x - 3}px, ${
              mousePosition.y - 3
            }px)`,
          }}
        ></div>

        <div
          className="absolute w-8 h-8 border-2 border-gray-500 rounded-full pointer-events-none z-50"
          style={{
            transform: `translate(${mousePosition.x - 16}px, ${
              mousePosition.y - 16
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default MouseAnimation;
