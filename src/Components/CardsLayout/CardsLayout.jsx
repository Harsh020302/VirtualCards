import React from 'react';
import Card from '../Card/Card';
import { useGetCardsQuery } from '../../Services/MockAPI.js';
import { useSelector } from 'react-redux';
const CardsLayout = () => {
  
  const { cardCategory,searchQuery,filterBy } = useSelector((state)=>state.currentQuery);
  const { data,isFetching  } = useGetCardsQuery(cardCategory);
  
  if(Object.keys(filterBy).length !== 0){
    if(filterBy.cardHolderName !== ''){
      const nameFilter = data.data.filter((item)=>{
        return ( item.owner_name.toLowerCase().includes(filterBy.cardHolderName.toLowerCase()) );
      })

      if(filterBy.burner !== filterBy.subscription){
      
        const typeFilter = nameFilter.filter((item)=>{
          return ( filterBy.burner ? item.card_type === 'Burner' : item.card_type === 'Subscription' );
        })

        return (
          <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
    
              { typeFilter.length !== 0 ? (typeFilter.map((item)=>{
    
                  return <Card item={item} />
    
                })) : (
                  
                   <h3>No Cards for the Search</h3>
    
                )
                
              }
          </div>
        )


      }

      return (
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
  
            { nameFilter.length !== 0 ? (nameFilter.map((item)=>{
  
                return <Card item={item} />
  
              })) : (
                
                 <h3>No Cards for the Search</h3>
  
              )
              
            }
        </div>
      )
    }
    if(filterBy.burner !== filterBy.subscription){
      
      const typeFilter = data.data.filter((item)=>{
        return ( filterBy.burner ? item.card_type === 'Burner' : item.card_type === 'Subscription' );
      })
      
      return (
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
  
            { typeFilter.length !== 0 ? (typeFilter.map((item)=>{
  
                return <Card item={item} />
  
              })) : (
                
                 <h3>No Cards for the Filter</h3>
  
              )
              
            }
        </div>
      )
      
    }

  }

  if(searchQuery !== '' ){
      const searchedData = data.data.filter((item)=>{
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    return (
      <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>

          { searchedData.length !== 0 ? (searchedData.map((item)=>{

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