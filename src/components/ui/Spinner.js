import React, {Fragment} from 'react';
import SpinnerImage from '../../img/spinner.gif'

const Spinner = () => {
    return <div className='center'><img src={SpinnerImage} style={{width: '100px'}} alt="spinner"/></div>;
};
export default Spinner;
