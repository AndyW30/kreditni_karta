import './style.css';
import { useRef, useState } from 'react';

export const HomePage = () => {
  const [blocks, setBlocks] = useState({
    block1: '',
    block2: '',
    block3: '',
    block4: '',
  });

  const inputRefs = {
    block1: useRef(null),
    block2: useRef(null),
    block3: useRef(null),
    block4: useRef(null),
  };

  const handleInputChange = (e, blockKey, nextRef) => {
    const value = e.target.value.replace(/\D/g, '');
    setBlocks((prevBlocks) => ({
      ...prevBlocks,
      [blockKey]: value,
    }));

    if (value.length === 4 && nextRef) {
      nextRef.current.focus();
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        name="number"
        maxLength="4"
        value={blocks.block1}
        onChange={(e) => handleInputChange(e, 'block1', inputRefs.block2)}
        ref={inputRefs.block1}
      />
      <input
        type="text"
        name="number"
        maxLength="4"
        value={blocks.block2}
        onChange={(e) => handleInputChange(e, 'block2', inputRefs.block3)}
        ref={inputRefs.block2}
      />
      <input
        type="text"
        name="number"
        maxLength="4"
        value={blocks.block3}
        onChange={(e) => handleInputChange(e, 'block3', inputRefs.block4)}
        ref={inputRefs.block3}
      />
      <input
        type="text"
        name="number"
        maxLength="4"
        value={blocks.block4}
        onChange={(e) => handleInputChange(e, 'block4', null)}
        ref={inputRefs.block4}
      />
    </div>
  );
};
