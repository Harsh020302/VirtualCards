import React from 'react';
import { Box } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
const Card = ({item}) => {
    const widthSpent = 500*(item.spent.value/item.available_to_spend.value);
    const widthAvailable = 500-widthSpent;
    const isSubscriptionCard = item.card_type;
  return (
    
    <div style={{boxShadow:'1px 2px 9px #b8bab9',padding:'20px',margin:'30px'}}>

        <Box sx={{display:'flex',flexDirection:'row'}}>

            <Box sx={{}}>

                <span style={{display:'block',fontWeight:'Bold',fontSize:'22px',textAlign:'left'}}>{item.name}</span>
                
                <span style={{color:'#BDBBBA',fontSize:'15px'}}>Owner Name</span>

                <FiberManualRecordIcon style={{color:'#BDBBBA',fontSize:'10px',marginLeft:'10px',marginRight:'10px'}}/>

                <span style={{color:'#BDBBBA',fontSize:'15px'}}>{item.budget_name}</span>

            </Box>

            <Box sx={{backgroundColor:'#FEF1F4' ,borderStyle:'solid',borderColor:'black',borderRadius:'50%',borderWidth:'0px',width:'40px',padding:'5px',boxShadow:'1px 2px 9px #b8bab9',marginLeft:'auto'}}>
                {
                    isSubscriptionCard === 'Subscription' ? <LocalFireDepartmentIcon style={{color:'#FF4973',fontSize:'40px'}}/> : <WifiProtectedSetupIcon style={{color:'#FF4973',fontSize:'40px'}}/>
                }
    
            </Box>

        </Box>

        <Box sx={{display:'flex',flexDirection:'row',marginTop:'15px'}}>

            <Box sx={{padding:'2px', borderColor:'#BDBBBA',borderStyle:'solid',borderWidth:'2px',borderRadius:'3px',color:'#BDBBBA'}}>
                {item.card_type}
            </Box>

            <span style={{color:'#BDBBBA',marginLeft:'auto'}}>Expires: {item.expiry} </span>

        </Box>

        <Box sx={{display:'flex',flexDirection:'row',marginTop:'10px'}}>

            <Box sx={{backgroundColor:'#FF4973',width:`${widthSpent}px`,height:'10px',borderStyle:'solid',borderColor:'black',borderRadius:'5px 0px 0px 5px',borderWidth:'0px'}}>
                .
            </Box>

            <Box sx={{backgroundColor:'green',width:`${widthAvailable}px`,height:'10px',borderStyle:'solid',borderColor:'black',borderRadius:'0px 5px 5px 0px',borderWidth:'0px'}}>
                
            </Box>

            </Box>

        <Box>

            <Box sx={{display:'flex',flexDirection:'row',marginTop:'10px'}}>

                <FiberManualRecordIcon style={{color:'#FF4973',fontSize:'20px',marginRight:'10px',marginTop:'2.5px'}}/>

                <span>Spent</span>

                <span style={{marginLeft:'auto'}}>{item.spent.value} SGD</span>

            </Box>

            <Box sx={{display:'flex',flexDirection:'row',marginTop:'10px'}}>

                <FiberManualRecordIcon style={{color:'green',fontSize:'20px',marginRight:'10px',marginTop:'2.5px'}}/>

                <span>Available to Spend</span>

                <span style={{marginLeft:'auto'}}>{item.available_to_spend.value} SGD</span>

            </Box>
        </Box>

    </div>
  )
}

export default Card