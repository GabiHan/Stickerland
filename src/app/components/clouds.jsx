// components/FloatingClouds.jsx
"use client";

import { useEffect, useState } from "react";

const cloudImages = [
  "/fruits/1.png",
  "/fruits/2.png",
  "/fruits/3.png",
  "/fruits/4.png",
];

const generateCloud = (id) => {
  const size = Math.floor(Math.random() * 40) + 80; // 80px to 120px
  const top = Math.floor(Math.random() * 80); // 0% to 70%
  const delay = Math.random() * 30; // seconds
  const duration = Math.random() * 50 + 40; // 40s to 80s
  const image = cloudImages[Math.floor(Math.random() * cloudImages.length)];

  return {
    id,
    top,
    delay,
    duration,
    size,
    image,
  };
};

export default function Clouds({ count = 5 }) {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    const newClouds = [];
    for (let i = 0; i < count; i++) {
      newClouds.push(generateCloud(i));
    }
    setClouds(newClouds);
  }, [count]);

  return (
    <>
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="cloud"
          style={{
            top: `${cloud.top}%`,
            left: `-${cloud.size}px`,
            width: `${cloud.size}px`,
            height: `${cloud.size * 0.6}px`,
            backgroundImage: `url(${cloud.image})`,
            animationDelay: `${cloud.delay}s`,
            animationDuration: `${cloud.duration}s`,
          }}
        />
      ))}
    </>
  );
}
