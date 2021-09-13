import React from 'react';

const DeleteButton = ({onDelete, index}) => {
  return ( 
    <>
    <div style={{justifyContent:"right"}}>
    <button onClick={() => onDelete(index)}>Delete</button>
    </div>
    </>
   );
}
 
export default DeleteButton;