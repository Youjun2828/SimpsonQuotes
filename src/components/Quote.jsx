import React from 'react';
const Quote = ({quote}) => {
  return ( 
    <>
    <div style={{flexGrow:"2"}}>
    <blockquote>{quote}</blockquote>
    </div>
    </>
   );
}
 
export default Quote;