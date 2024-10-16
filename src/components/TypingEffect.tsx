import React, { useState, useEffect } from 'react';
import { TextField } from "@mui/material";

const TypingEffect = () => {
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    const text = 'I have lots of projects you can look up in my github... Feel free to visit me there...';
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setPlaceholder(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50);
    return () => clearInterval(typingEffect);
  }, []);

  return <TextField className='w-100' placeholder={placeholder} />;
};

export default TypingEffect;
