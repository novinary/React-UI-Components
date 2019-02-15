import React from 'react';
import HeaderTitleText from './HeaderTitleText';
import DateHeader from './DateHeader';

const HeaderTitle = () => {
    return(
        <div className="header-title-container">
            <HeaderTitleText />
            <DateHeader/>
        </div>
    );
}


export default HeaderTitle; 