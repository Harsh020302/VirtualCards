import React,{useState} from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const Search = () => {
    
    const [query,setQuery] = useState('');
    const handleKeyPress = (e)=>{
        if(e.key === 'Enter'){
            console.log(query);
        }
    };
  return (
    <div>
        <TextField
            onKeyPress={handleKeyPress}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            variant="standard"
            placeholder='Card Name'
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon/>
                    </InputAdornment>
                ),
            }}
            sx={{width:'130px',margin:'15px'}}
        />
    </div>
  )
}

export default Search