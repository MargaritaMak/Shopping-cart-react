import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const navBar = ({onCartClick, itemCount}) => {
    return (
        <header>
        <nav>
           <ul>
            <li>
              <div> 
             <span>{itemCount}</span>
              <FontAwesomeIcon icon={faShoppingCart} onClick = {onCartClick} />
              </div>
            </li>
            </ul>
        </nav>
      </header>
    )
}

export default navBar;