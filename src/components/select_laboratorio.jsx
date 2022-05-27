import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const Select_labo = () => {
    const[labo, setLabo] = React.useState('');

    const handleChange = (event) => {
        setLabo(event.target.value)
    }
    return (
        <FormControl sx={{ margin: 1, minWidth: 400}}>
            <InputLabel id="labo" required  >Laboratorio</InputLabel>
            <Select 
                label="Laboratorio"
                margin="normal"
                fullWidth
                name="labo"
                type="text"
                id="labo"
                onChange={handleChange}
                value={labo}
            >
                <MenuItem value={1}>LABORATORIO 1</MenuItem>
                <MenuItem value={2}>LABORATORIO 2</MenuItem>
            </Select>
            
            </FormControl>
    )
    
}



export default Select_labo