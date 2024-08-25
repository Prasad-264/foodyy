import React, {useState, useEffect} from 'react';
import { MENU_API } from './constants';

const useRestaurantMenu = (resId) => {
	const [resData, setResData] = useState(null);
  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    try {
      const response = await fetch( MENU_API + resId );
      const data = await response.json();
      setResData(data);
      console.log(data);
    } catch (error) {
      console.error(error);      
    }
  };
	
  return resData;
}

export default useRestaurantMenu;