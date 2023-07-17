import React, { Component } from 'react';
import FormQuis from './FormQuis';
import { Link, NavLink } from 'react-router-dom';

class Quis extends Component {
    render() {
        return (
            <div>
              
            <h1>Quis 2</h1>
            <p className='text-center'>
                Click <Link to={Quis}>Link</Link> to accses LINK
            </p>
                {/* <FormQuis/> */}
            </div>
            
         
        );
    }
}

export default Quis;
