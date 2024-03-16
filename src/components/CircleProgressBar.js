import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const CircleProgressBar = ({ progress, height, loaderName, color="#0000FF" }) => {
  const circleAnimation = useAnimation();
  const strokeWidth = height / 40; // Adjust the divisor to change the thickness relative to height

  React.useEffect(() => {
    circleAnimation.start({
      pathLength: progress / 100,
      transition: { duration: 1 },
    });
  }, [progress, circleAnimation]);

  const viewBoxSize = height / 2;

  return (
    <svg
      width={height / 2}
      height={height / 2}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
    >
      <motion.path
        fill="none"
        stroke="#ccc"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        d={`M ${viewBoxSize / 2},${viewBoxSize / 2} m -${viewBoxSize / 4},0 a ${viewBoxSize / 4},${viewBoxSize / 4} 0 1,1 ${viewBoxSize / 2},0 a ${viewBoxSize / 4},${viewBoxSize / 4} 0 1,1 -${viewBoxSize / 2},0`}
      />
      <motion.path
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        d={`M ${viewBoxSize / 2},${viewBoxSize / 2} m -${viewBoxSize / 4},0 a ${viewBoxSize / 4},${viewBoxSize / 4} 0 1,1 ${viewBoxSize / 2},0 a ${viewBoxSize / 4},${viewBoxSize / 4} 0 1,1 -${viewBoxSize / 2},0`}
        initial={{ pathLength: 0 }}
        animate={circleAnimation}
      />
      <text x="50%" y="50%" fontSize={12} fontWeight={500} textAnchor="middle" dominantBaseline="middle">
        {progress}%
      </text>
      <text fontWeight={500} x="50%" y={height / 2 - 5} textAnchor="middle" dominantBaseline="middle" fontSize="12" fill={color ?? "#333"}>
        {loaderName}
      </text>
    </svg>
  );
};

export default CircleProgressBar;
