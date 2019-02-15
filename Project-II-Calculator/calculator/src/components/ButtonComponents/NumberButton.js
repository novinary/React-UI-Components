import React from 'react';
import './Button.css';
import Button from './Button'

const numbers = [1,2,3,4,5,6,7,8,9]
const numberArr = numbers.map(x => <Button item = {x}/>)

function NumberButton(props){
    return(
        <div className="numbers">
            {numberArr}
            <Button item = '0'/>
        </div>
    );
}

export default NumberButton;