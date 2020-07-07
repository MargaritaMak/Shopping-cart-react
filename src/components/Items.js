import React from 'react';
import Button from './Button';

const Items  = ({id, title, description, onAdd}) => {
  return (
    <div className="items">
      <h3>{title}</h3>
      <h4>{description}</h4>
      <Button value = 'Add to cart' onClick = {()=> {onAdd(id)}}/>
    </div>
  )
}

export default Items;