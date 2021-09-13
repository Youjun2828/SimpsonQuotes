import React from 'react';

const Character = ({ character, image }) => {
  return (
    <>
      <div>
        <img src={image} width="50" />
        <h4>{character}</h4>
      </div>
    </>
  );
};

export default Character;
