import React from 'react'
import { useParams } from 'react-router-dom';
import RestaurantUpdate from './RestaurantUpdate';

const RestaurantUpdateWrapper =() => {
  
    const { id } = useParams();
    return <RestaurantUpdate id={id} />;
  
}


export default RestaurantUpdateWrapper
