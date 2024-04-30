'use client'
import React, { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect'; 

export default function TypingEffect() {
  const texts = [
    'Hi!',
    'Salut!',
    '¡Hola!',
    'Hej!',
    'Ciao',
    'Olá',
    'Привет',
    'مرحبا',
    'こんにちは',
    '안녕하세요',
    '你好',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>
        <Typewriter
          options={{
            strings: [texts[index]],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
}
