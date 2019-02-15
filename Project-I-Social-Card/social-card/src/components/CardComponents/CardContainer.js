import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import ImageThumbnail from '../HeaderComponents/ImageThumbnail';

function CardContainer (){
    return(
        <div className='CardContainer'>
            <div className='left'>
                <ImageThumbnail />
            </div>
            <div className='right'>
                <HeaderContainer />
                <CardContent />
            </div>
        </div>
    )
}

export default CardContainer;