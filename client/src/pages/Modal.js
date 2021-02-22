import React, {useEffect, useState} from 'react';
import '../css_folders/help.css'
import Help from './Help'

function Modal () {
    const [ click, setClick ] = useState (false);

    const handleClick = () => {
        setClick (true);
    }


    return (
        <div>
            <div className="modal">
                <h3 className="model-content"> We received it 😉 <i class="fa fa-times" aria-hidden="true"></i> </h3>
            </div>
        </div>

       
    )
}

export default Modal;