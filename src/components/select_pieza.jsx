import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const Select_pieza = () => {
    const[pieza, setPieza] = React.useState('');

    const handleChange = (event) => {
        setPieza(event.target.value)
    }
    return (
        <FormControl sx={{ margin: 1, minWidth: 400}}>
            <InputLabel id="pieza" required  >Pieza</InputLabel>
            <Select 
                label="Pieza"
                margin="normal"
                fullWidth
                name="pieza"
                type="text"
                id="pieza"
                onChange={handleChange}
                value={pieza}
            >
                <MenuItem value={1}>A1</MenuItem>
                <MenuItem value={2}>B2</MenuItem>
                <MenuItem value={3}>B3</MenuItem>
            </Select>
            
            </FormControl>
    )
    
}



export default Select_pieza