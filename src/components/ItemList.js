import React from 'react';
import { RES_LOGO } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="flex justify-between space-x-3 m-2 p-2 pb-5 border-b border-gray-300">
          <div className="flex flex-col flex-grow">
            <p className="text-lg font-bold">{item.card.info.name}</p>
            <p className="text-md font-semibold mb-1">₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
            <p className="text-gray-500 text-sm">{item.card.info.description}</p>
          </div>
          <div className="relative flex-shrink-0">
            <img className="h-28 w-28 rounded-md object-cover" src={RES_LOGO + item.card.info.imageId} />
            <button 
              className="absolute left-5 top-24 px-5 py-1 bg-white text-green-500 font-bold text-sm rounded-md shadow-md"
              onClick={() => handleAddItem(item)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList;