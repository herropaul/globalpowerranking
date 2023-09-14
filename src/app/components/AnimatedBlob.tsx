import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// const blobVariants = {
//   rotate: { rotate: 360 },
//   vertical: { y: ["0%", "100%", "0%"] },
//   horizontal: { x: ["0%", "100%", "0%"] },
// };
const blobVariants = {
  around: {
    // This animation moves the blob in a square path.
    // The x and y values are defined as percentages of the container's width and height.
    // The blob starts at the top-left corner (0%, 0%) and moves to the top-right corner (100%, 0%),
    // then to the bottom-right corner (100%, 100%), then to the bottom-left corner (0%, 100%),
    // and finally back to the top-left corner (0%, 0%).
    x: ["0%", "100%", "100%", "0%", "0%"],
    y: ["0%", "0%", "100%", "100%", "0%"],
  },
};

const transition = {
  x: { duration: 15, repeat: Infinity, repeatType: "loop", ease: "linear" },
  y: { duration: 15, repeat: Infinity, repeatType: "loop", ease: "linear" },
};

// const transition = {
//   rotate: { duration: 4, repeat: Infinity, ease: "linear" },
//   vertical: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//   horizontal: { duration: 4, repeat: Infinity, ease: "easeInOut" },
// };

export const AnimatedBlob = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const radius = 200; // Radius of the circle
    const duration = 20 * 1000; // 20 seconds
    const startTime = new Date().getTime();

    const animate = () => {
      const currentTime = new Date().getTime();
      const timePassed = currentTime - startTime;
      const angle = ((timePassed % duration) / duration) * 360;
      const x = radius * Math.cos((angle * Math.PI) / 180);
      const y = radius * Math.sin((angle * Math.PI) / 180);
      setCoordinates({ x, y });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <motion.div
      className=" w-96 h-96 absolute"
      initial={{ x: "0%", y: "0%", position: "absolute", top: 0, left: 0 }}
      //animate="around"
      //variants={blobVariants}
      //transition={transition}
      style={{
        borderRadius: "28% 72% 79% 21% / 21% 40% 60% 79% ",
        backgroundColor: "#B99D76",
        filter: "blur(125px)",
        x: coordinates.x,
        y: coordinates.y,
      }}
    ></motion.div>
  );
};
