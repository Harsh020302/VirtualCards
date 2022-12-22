import React from 'react';
import Card from '../Card/Card';
import { useGetCardsQuery } from '../../Services/MockAPI.js';
import { useSelector } from 'react-redux';
const CardsLayout = () => {

  const { cardCategory } = useSelector((state)=>state.currentQuery);
  const { data,error,isFetching  } = useGetCardsQuery(cardCategory);
  console.log(data); 

  if(!isFetching){
    return (
      <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
          {
            data.data.map((item)=>{
              return <Card item={item} />
            })
          }
      </div>
    )
  }

  
}

export default CardsLayout