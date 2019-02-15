import React from 'react';
import CardBannerImage from './CardBannerImage';
import CardBannerDescription from './CardBannerDescription';

function CardBanner ({children}) {
  return(
    <div className="card-banner-container">
        <div className="card-banner-img">
            <CardBannerImage />
        </div>
        <div className="card-banner-description">
            <CardBannerDescription />
        </div>
    </div>
    )
  }
  
  export default CardBanner;