import React,{useState} from 'react';
import { useDispatch } from 'react-redux';

import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

import { selectSearchQuery } from '../../App/Toolslice';

const Search = () => {

    const dispatch = useDispatch();
    const [query,setQuery] = useState('');

    const handleKeyPress = (e)=>{
        if(e.key === 'Enter'){
            dispatch(selectSearchQuery(query));
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