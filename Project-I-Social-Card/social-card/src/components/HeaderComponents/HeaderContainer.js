import React from 'react';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import './Header.css';


function HeaderContainer (){
    return(
        <div className='header-container'>
            <HeaderTitle />
            <HeaderContent />  
        </div>
    )
}


export default HeaderContainer;