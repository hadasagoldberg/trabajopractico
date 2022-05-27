import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { StayCurrentLandscapeOutlined } from '@mui/icons-material';

const Select_depo = () => {
    const[depo, setDepo] = React.useState('');

    const handleChange = (event) => {
        StayCurrentLandscapeOutlined(event.target.value)
    }
    return (
        <FormControl sx={{ margin: 1, minWidth: 400}}>
            <InputLabel id="depo" required  >Depósito</InputLabel>
            <Select 
                label="Depósito"
                margin="normal"
                fullWidth
                name="depo"
                type="text"
                id="depo"
                onChange={handleChange}
                value={depo}
            >
                <MenuItem value={1}>DEPO 1</MenuItem>
                <MenuItem value={2}>DEPO 2</MenuItem>
                <MenuItem value={3}>DEPO 3</MenuItem>
            </Select>
            
            </FormControl>
    )
    
}



export default Select_depo