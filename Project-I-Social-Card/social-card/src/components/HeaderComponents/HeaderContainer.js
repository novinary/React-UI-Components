import React from 'react';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import './Header.css';

const HeaderContainer = () => {
    return(
        <div className="header-container">
        <div className="img-column">
            <ImageThumbnail />
        </div>
        <div className="header-txt-column">
            <HeaderTitle />
            <HeaderContent />
        </div>
    </div>

);
}

export default HeaderContainer;