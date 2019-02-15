import React from 'react';
import CardBannerImage from './CardBannerImage';
import CardBannerDescription from './CardBannerDescription';

function CardContainer({children}) {
    return (
      <div className="card-container">
         <CardContent />
      </div>
    )
  }
  
  export default CardContainer;