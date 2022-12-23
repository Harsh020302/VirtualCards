import React,{useEffect,useState} from 'react';
import Card from '../Card/Card';

import {Box,CircularProgress} from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
const page_num = 1;
const styles = {
  display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'
}
const CardsLayout = () => {

  const [finaldata , setFinalData ] = useState([]);
  const [page, setPage] = useState(page_num);
  const [loading, setLoading] = useState(false);
  const { cardCategory,searchQuery,filterBy } = useSelector((state)=>state.currentQuery);
  
  useEffect(()=>{
    setTimeout(async () => {
      const response = await axios.get(
          `https://65041edd-15a4-45fb-b002-c1f4b53422d9.mock.pstmn.io/${cardCategory}?page=${page}`
      );
      console.log(response);
      setFinalData((prev) =>[...response.data.data]);
      setLoading(false);
    }, 100);
  },[cardCategory])

  useEffect(()=>{
    setTimeout(async () => {
      const response = await axios.get(
          `https://65041edd-15a4-45fb-b002-c1f4b53422d9.mock.pstmn.io/${cardCategory}?page=${page}`
      );
      console.log(response);
      setFinalData((prev) =>[...prev, ...response.data.data]);
      setLoading(false);
    }, 100);
  },[page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
      if (
          window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
      ) {
          setLoading(true);
          setPage((prev) => prev + 1);
      }
  };
  
  //Filter Feature

  if(Object.keys(filterBy).length !== 0){

    if(filterBy.cardHolderName !== ''){
      const nameFilter = finaldata.filter((item)=>{
        return ( item.owner_name.toLowerCase().includes(filterBy.cardHolderName.toLowerCase()) );
      })

      if(filterBy.burner !== filterBy.subscription){
        
        
        const typeFilter = nameFilter.filter((item)=>{
          
          return ( filterBy.burner ? item.card_type === 'burner' : item.card_type === 'Subscription' );
        })

        return (
          <div style={styles}>
    
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
        <div style={styles}>
  
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
      
      const typeFilter = finaldata.filter((item)=>{
         return ( filterBy.burner ? item.card_type === 'burner' : item.card_type === 'Subscription' );
      })
      
      return (
        <div style={styles}>
  
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

  //Search Feature

  if(searchQuery !== '' ){
      const searchedData = finaldata.filter((item)=>{
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    return (
      <div style={styles}>

          { searchedData.length !== 0 ? (searchedData.map((item)=>{

              return <Card item={item} />

            })) : (
              
               <h3>No Cards for the Search</h3>

            )
            
          }
      </div>
    )
  }

  //display without Filter or Search

  return (
    
    <div style={styles}>

        { finaldata.length !== 0 ? (finaldata.map((item)=>{
            return <Card item={item} />

          })) : (
            
             <CircularProgress sx={{margin:'50px'}}/>

          )
        }
    </div>
     
  )
  
}

export default CardsLayout