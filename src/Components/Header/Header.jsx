import React from 'react';
import { Box,Button,Typography } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const Header = () => {
  return (
    <Box style={{display:'flex',flexDirection:'row',margin:'30px'}}>
        <Typography variant='h4' style={{fontFamily:'fantasy',width:'200px'}}>
            Virtual Cards
        </Typography>
        <Button disabled startIcon={<InfoOutlinedIcon/>} style={{color:'#5e6cff',paddingTop:'15px'}}>
          Learn more
        </Button>
        <Button variant='outlined' style={{borderRadius:'0px',borderWidth:'0px',color:'black',boxShadow:'1px 2px 9px #b8bab9',marginLeft:'65%'}} startIcon={<AddOutlinedIcon/>}>
          Virtual Card
        </Button>
    </Box>
  )
}

export default Header