import { useState } from 'react';

import '../assets/styles/BasicModal.css';



export default function BasicModal({onClose, children}) {


    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                {children}
                <button className='text-black' onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}
