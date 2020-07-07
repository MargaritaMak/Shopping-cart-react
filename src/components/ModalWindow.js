import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {Modal} from 'react-bootstrap'

const ModalWindow = ({ values, onItemDelete }) => {
    return (
        <Modal.Dialog>
            <Modal.Body>
               {values.map(value => {
                   return(
                   <div> {value.title}
                      {value.description}
                      <FontAwesomeIcon icon={faTrash} onClick = {()=> {onItemDelete(value.id)}}/>
                   </div>
                   )
               })}
            </Modal.Body>
        </Modal.Dialog>
    )
}

export default ModalWindow;