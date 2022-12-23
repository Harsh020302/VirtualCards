import React,{useState} from 'react'
import { Box,Divider,Typography,FormControl,FormGroup,FormControlLabel,Checkbox,Select,MenuItem,InputLabel,Button} from '@mui/material';
import { useDispatch } from 'react-redux';
import { selectfilterBy } from '../../App/Toolslice';

const Filtercomp = ({ closeFilter }) => {
    const dispatch = useDispatch();
    const [state,setState] = useState({
        burner: false,
        subscription: false,
        cardHolderName: ''
    })
    const { burner , subscription , cardHolderName } = state
    const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.name ==='cardHolderName' ? event.target.value : event.target.checked ,
        });
      };
    const handleClearClick = () => {
        setState({
            burner: false,
            subscription: false,
            cardHolderName: ''
        })
    }
    const handleApplyClick = () =>{
        dispatch(selectfilterBy(state));
        setState({
            burner: false,
            subscription: false,
            cardHolderName: ''
        })
        closeFilter((prev)=>{
            return !prev;
        })
    }
    
  return (
    <div>
        <Box sx={{padding:'10px',backgroundColor:'white',position:'absolute',right:'50px',top:'230px',borderStyle:'solid',borderColor:'#BDBBBA',borderRadius:'5px',borderWidth:'2px',boxShadow:'1px 2px 9px #b8bab9'}}>
            <Typography sx={{textAlign:'left',margin:'5px',fontSize:'15px'}}>Filters</Typography>
            <Divider sx={{marginBottom:'5px'}}/>
            <FormControl component="fieldset" variant="standard">
            
                <InputLabel  id="select">Card Holder</InputLabel>

                <Select
                labelId="select"
                id="select"
                value={cardHolderName}
                label="cardHolderName"
                name='cardHolderName'
                onChange={handleChange}
                sx={{width:'250px'}}>

                    <MenuItem value='Harsha'>Harsha</MenuItem>
                    <MenuItem value='Rakesh'>Rakesh</MenuItem>
                    <MenuItem value='Naveen'>Naveen</MenuItem>
                    <MenuItem value='Chetan'>Chetan</MenuItem>

                </Select>

                <Box sx={{marginTop:'15px'}}>
                    <Typography sx={{textAlign:'left',color:'#BDBBBA'}}>Type</Typography>
                </Box>

                <FormGroup sx={{margin:'5px',display:'flex',flexDirection:'row'}} id='type'>

                    <FormControlLabel sx={{marginRight:'30px'}}
                        control={
                        <Checkbox checked={burner} onChange={handleChange} name="burner" />
                        }
                        label="Burner"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={subscription} onChange={handleChange} name="subscription" />
                        }
                        label="Subscription"
                    />

                </FormGroup>

            </FormControl>

            <Box>
                <Button sx={{margin:'10px',backgroundColor:'#FF4973'}} variant='contained' size='small' onClick={handleApplyClick}>Apply Changes</Button>
                <Button sx={{margin:'10px',boxShadow:'1px 2px 6px #b8bab9'}} variant='text' size='small' onClick={handleClearClick}>Clear</Button>
            </Box>

        </Box>
    </div>
  )
}

export default Filtercomp
