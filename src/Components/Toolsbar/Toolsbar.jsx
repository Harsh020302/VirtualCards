import React,{useState} from 'react'
import {Tabs,Tab,Box,Toolbar,Button,Divider} from '@mui/material';
import {Link } from 'react-router-dom';
import WidgetsIcon from '@mui/icons-material/Widgets';
import FilterListIcon from '@mui/icons-material/FilterList';
import MenuIcon from '@mui/icons-material/Menu';
import Search from '../Search/Search';
import {selectCardCategory} from '../../App/Toolslice.js';
import Filtercomp from '../FilterComp/Filtercomp';
import { useDispatch } from 'react-redux';

const Toolsbar = () => {
  const [value,setValue] = useState(1);
  const dispatch = useDispatch();
  const [showFilterComp,setShowFilterComp] = useState(false);
  const handleChange = (event, newValue) => {
    dispatch(selectCardCategory(newValue));
    setValue(newValue);
  };
  const handleClick = () => {
    console.log(showFilterComp);
    setShowFilterComp((prev)=>{
      return !prev;
    })
  };
  return (
    <div >
      <Toolbar >
      <Box sx={{}}>
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
          <Tab component={Link} label="Your" to="/your" />
          <Tab component={Link} label="ALL" to="/all" />
          <Tab component={Link} label="BLocked" to="/blocked" />
        </Tabs>
      </Box>
      <WidgetsIcon sx={{marginTop:'5px',marginLeft:'auto',marginRight:'10px'}}/>
      <MenuIcon sx={{marginTop:'5px',marginLeft:'10px',marginRight:'10px'}}/>
      
      </Toolbar>
      <Divider sx={{width:'95%',margin:'auto',position:'relative',bottom:'8px'}}/>
      <Box sx={{display:'flex',flexDirection:'row-reverse'}} >
        <Button onClick={handleClick} sx={{height:'30px',marginTop:'18px',marginRight:'25px',marginLeft:'20px',color:'GrayText',backgroundColor:'#f7f4f3',borderWidth:'0px'}} variant='outlined' startIcon={<FilterListIcon />} size='small' >
          Filter
        </Button>
        <Search />
        { showFilterComp && <Filtercomp /> }
      </Box>
    </div>
  )
}

export default Toolsbar