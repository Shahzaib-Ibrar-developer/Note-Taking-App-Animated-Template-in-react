import React, { useState } from 'react';
import Model from './Model'

const ButtonShow = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        console.log('Opening modal');
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    const handleModalSubmit = (inputValue) => {
      // Handle the submitted value as needed
      console.log('Submitted value:', inputValue);
    };
  return (
    <div className='btn-submit'>
    <button onClick={handleOpenModal}>ADD Docs</button>
    <Model
    isOpen={isModalOpen}
    onClose={handleCloseModal}
    onSubmit={handleModalSubmit}
  />
  </div>

  )
}

export default ButtonShow