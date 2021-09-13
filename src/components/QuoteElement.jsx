import React from 'react';
import Character from './Character';
import Quote from './Quote';
import DeleteButton from './DeleteButton';

const QuoteElement = ({
  quote,
  character,
  image,
  characterDirection,
  index,
  onDelete,
}) => {
  if (characterDirection === 'Left') {
    return (
      <>
        <ol>
          <li
            className="quoteBox"
            style={{
              backgroundColor: 'lightblue',
              display: 'flex',
              padding: '25px 25px',
              marginBlockEnd: '10px',
            }}
          >
            <Character character={character} image={image} />
            <Quote quote={quote} />
            <DeleteButton onDelete={onDelete} index={index} />
          </li>
        </ol>
      </>
    );
  } else if (characterDirection === 'Right') {
    return (
      <>
        <ol>
          <li
            className="quoteBox"
            style={{
              backgroundColor: 'lightblue',
              display: 'flex',
              padding: '25px 25px',
              marginBlockEnd: '10px',
            }}
          >
            <Quote quote={quote} />
            <Character character={character} image={image} />

            <DeleteButton onDelete={onDelete} index={index} />
          </li>
        </ol>
      </>
    );
  }
};

export default QuoteElement;
