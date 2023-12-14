import React, { useState } from 'react';

const Model = ({ isOpen, onClose, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue('');
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <label>
              Input:
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </label>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
