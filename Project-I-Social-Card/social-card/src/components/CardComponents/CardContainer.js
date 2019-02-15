import React from 'react';
import CardContent from './CardContent';

function CardContainer({children}) {
    return (
      <div className="card-container">
         <CardContent />
      </div>
    )
  }
  
  export default CardContainer;