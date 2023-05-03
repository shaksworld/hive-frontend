import './ButtonDefault.css'
import { useState } from 'react'
import Modal from '../Modal/ViewJob'

function ButtonDefault() {

    
    const [openModal, setOpenModal] = useState(false)

    return (
    <div className="button-default-button-default">
        <button 
            className="dashboard-button" 
            onClick={() => {
                setOpenModal(true)
            }}
        >
                View Task
        </button>

        {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
    );
    }
    
    
    export default ButtonDefault;