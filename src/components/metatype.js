import react from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const headerBackground = grey[800];
const subHeaderBackground = grey[400];

const metatypes = [
    {
        meta: 'Troll',
        numb: 0,
    },
    { 
        meta: 'Ork',
        numb: 1,
    },
    {
        meta: 'Dwarf',
        numb: 2,
    },
    {
        meta: 'Elf',
        numb: 3,
    },
    {
        meta: 'Human',
        numb: 4,
    }
]

const Item = styled(Paper)(({ theme }) => ({
    display: 'table',
    tableLayout: 'fixed',
    height: '100%',
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

export default function Metatype({handleMetatypeState, metatypeButton}) {

    function checkAllowed(metatypeButton) {
        if(metatypeButton == 0) {
            return metatypes.numb < 3
        }
        else if (metatypeButton == 1) {

        }
        else if (metatypeButton == 4) {

        }
        else {
            return
        }
    }

    const rows = metatypes.map((metatypes) => 
        <ListItem>
            <ListItemButton>
                {metatypes.meta}
            </ListItemButton>
        </ListItem>
    );

    return (
        <Grid xs={4} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
            <Item>
                <List>
                    {rows}
                </List>
            </Item>
        </Grid>
    );
}