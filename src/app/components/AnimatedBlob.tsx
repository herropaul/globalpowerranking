"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimatedBlobType {
  radius: number;
  duration: number;
  top: number;
  left: number;
  borderRadius: string;
  backgroundColor: string;
  clockwise: boolean;
}

export const AnimatedBlob: React.FC<AnimatedBlobType> = ({
  radius,
  duration,
  borderRadius,
  backgroundColor,
  top,
  left,
  clockwise,
}) => {
  const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    //const radius = 200; // Radius of the circle
    //const duration = 20 * 1000; // 20 seconds
    const startTime = new Date().getTime();

    const animate = () => {
      const currentTime = new Date().getTime();
      const timePassed = currentTime - startTime;
      const angleDirection = clockwise ? 1 : -1;
      const angle =
        ((angleDirection * (timePassed % (duration * 1000))) /
          (duration * 1000)) *
        360;
      const x = radius * Math.cos((angle * Math.PI) / 180);
      const y = radius * Math.sin((angle * Math.PI) / 180);
      setCoordinates({ x, y });
      requestAnimationFrame(animate);
    };

    animate();
  }, [radius, duration, clockwise]);

  return (
    <motion.div
      className=" w-96 h-96 absolute"
      initial={{ position: "absolute", top: top, left: left }}
      style={{
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        filter: "blur(125px)",
        boxShadow: "",
        x: coordinates.x,
        y: coordinates.y,
        zIndex: -1,
      }}
    ></motion.div>
  );
};
