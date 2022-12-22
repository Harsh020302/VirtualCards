import React from 'react';
import Card from '../Card/Card';
import { useGetCardsQuery } from '../../Services/MockAPI.js';
import { useSelector } from 'react-redux';
const CardsLayout = () => {

  const { cardCategory,searchQuery } = useSelector((state)=>state.currentQuery);
  const { data,isFetching  } = useGetCardsQuery(cardCategory);
  
  if(searchQuery !== '' ){
      const filteredData = data.data.filter((item)=>{
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    return (
      <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>

          { filteredData.length !== 0 ? (filteredData.map((item)=>{

              return <Card item={item} />

            })) : (
              
               <h3>No Cards for the Search</h3>

            )
            
          }
      </div>
    )
  }

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