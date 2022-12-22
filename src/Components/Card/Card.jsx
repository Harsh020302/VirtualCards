import React from 'react';
import { Typography,Box } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const Card = () => {
  return (
    <div style={{boxShadow:'1px 2px 9px #b8bab9',padding:'20px',margin:'30px'}}>
        <Box sx={{display:'flex',flexDirection:'row'}}>
            <Box sx={{}}>
                <span style={{display:'block',fontWeight:'Bold',fontSize:'22px',textAlign:'left'}}>Card Name</span>
                <span style={{color:'#BDBBBA',fontSize:'15px'}}>Owner Name</span>
                <FiberManualRecordIcon style={{color:'#BDBBBA',fontSize:'10px',marginLeft:'10px',marginRight:'10px'}}/>
                <span style={{color:'#BDBBBA',fontSize:'15px'}}>Budget Name</span>
            </Box>
            <Box sx={{backgroundColor:'#FEF1F4' ,borderStyle:'solid',borderColor:'black',borderRadius:'50%',borderWidth:'0px',width:'40px',padding:'5px',boxShadow:'1px 2px 9px #b8bab9',marginLeft:'auto'}}>
                <LocalFireDepartmentIcon style={{color:'#FF4973',fontSize:'40px'}}/>
            </Box>
        </Box>
        <Box sx={{display:'flex',flexDirection:'row',marginTop:'15px'}}>
            <Box sx={{padding:'2px', borderColor:'#BDBBBA',borderStyle:'solid',borderWidth:'2px',borderRadius:'3px',color:'#BDBBBA'}}>
                Card Type
            </Box>
            <span style={{color:'#BDBBBA',marginLeft:'auto'}}>Expire or Limit</span>
        </Box>
        <Box sx={{display:'flex',flexDirection:'row',marginTop:'10px'}}>
            <Box sx={{backgroundColor:'#FF4973',width:'400px',height:'10px',borderStyle:'solid',borderColor:'black',borderRadius:'5px 0px 0px 5px',borderWidth:'0px'}}>
                .
            </Box>
            <Box sx={{backgroundColor:'green',width:'100px',height:'10px',borderStyle:'solid',borderColor:'black',borderRadius:'0px 5px 5px 0px',borderWidth:'0px'}}>
                
            </Box>
            </Box>
        <Box>
            <Box sx={{display:'flex',flexDirection:'row',marginTop:'10px'}}>
                <FiberManualRecordIcon style={{color:'#FF4973',fontSize:'20px',marginRight:'10px',marginTop:'2.5px'}}/>
                <span>Spent</span>
                <span style={{marginLeft:'auto'}}>Variable SGD</span>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',marginTop:'10px'}}>
                <FiberManualRecordIcon style={{color:'green',fontSize:'20px',marginRight:'10px',marginTop:'2.5px'}}/>
                <span>Available to Spend</span>
                <span style={{marginLeft:'auto'}}>Variable SGD</span>
            </Box>
        </Box>

    </div>
  )
}

export default Card