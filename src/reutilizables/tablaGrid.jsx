import Grid from '@mui/material/Grid';
import Tabla from '../reutilizables/tabla'
import Box from '@mui/material/Box';

const TablaGrid = (props) => {
    return(
        <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Box mt={15}>
                        <Tabla rows={props.rows} columns={props.columns} titulo={props.titulo}/>
                    </Box>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
    );
};

export default TablaGrid