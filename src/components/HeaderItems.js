import React from 'react'
import { RES_LOGO } from '../utils/constants';

const HeaderItems = ({items}) => {
  console.log(items);  
  return (
    <div className="w-full flex overflow-x-auto scroll-smooth no-scrollbar my-2">
      {items.map((item) => (
        <div 
          key={item.id}
          className="w-40 m-2 shrink-0"
        >
          <img 
            src={RES_LOGO + item.imageId} 
            alt={item.accessibility?.altText}
          />
        </div>
      ))}
    </div>
  )
}

export default HeaderItems;