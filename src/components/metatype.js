import React, { useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { blue, grey, purple } from '@mui/material/colors';

const subHeaderBackground = grey[800];
const primaryBackground = blue[500];
const primaryHover = blue[600];
const selectBackground = purple[500];
const selectHover = purple[600];

const metatypes = [
    [
        {metatypeName: 'Troll', karma: 0},
        {metatypeName: 'Cyclops', karma: 5},
        {metatypeName: 'Fomorian', karma: 10},
        {metatypeName: 'Giant', karma: 5},
        {metatypeName: 'Minotaur', karma: 5},

        {metatypeName: 'Ork', karma: 0},
        {metatypeName: 'Hobgoblin', karma: 5},
        {metatypeName: 'Ogre', karma: 5},
        {metatypeName: 'Oni', karma: 5},
        {metatypeName: 'Satyr', karma: 10},

        {metatypeName: 'Dwarf', karma: 0},
        {metatypeName: 'Duende (The Dour)', karma: 10},
        {metatypeName: 'Gnome', karma: 5},
        {metatypeName: 'Hanuman', karma: 5},
        {metatypeName: 'Koborokuru', karma: 5},
        {metatypeName: 'Menehune', karma: 5},

        {metatypeName: 'Centaurs', karma: 15},
        {metatypeName: 'Merrow', karma: 15},
        {metatypeName: 'Naga', karma: 15},
        {metatypeName: 'Pixie', karma: 10},
        {metatypeName: 'Sasquatch', karma: 10},
    ],
    [
        {metatypeName: 'Troll', karma: 0},
        {metatypeName: 'Cyclops', karma: 5},
        {metatypeName: 'Fomorian', karma: 10},
        {metatypeName: 'Giant', karma: 5},
        {metatypeName: 'Minotaur', karma: 5},

        {metatypeName: 'Ork', karma: 0},
        {metatypeName: 'Hobgoblin', karma: 5},
        {metatypeName: 'Ogre', karma: 5},
        {metatypeName: 'Oni', karma: 5},
        {metatypeName: 'Satyr', karma: 10},

        {metatypeName: 'Dwarf', karma: 0},
        {metatypeName: 'Duende (The Dour)', karma: 10},
        {metatypeName: 'Gnome', karma: 5},
        {metatypeName: 'Hanuman', karma: 5},
        {metatypeName: 'Koborokuru', karma: 5},
        {metatypeName: 'Menehune', karma: 5},
        
        {metatypeName: 'Elf', karma: 0},
        {metatypeName: 'Dalakitnon', karma: 5},
        {metatypeName: 'Dryad', karma: 5},
        {metatypeName: 'Nocturna', karma: 5},
        {metatypeName: 'Wakyambi', karma: 10},
        {metatypeName: 'Xapiri Thepe', karma: 5},

        {metatypeName: 'Valkyrie', karma: 15},

        {metatypeName: 'Centaurs', karma: 15},
        {metatypeName: 'Merrow', karma: 15},
        {metatypeName: 'Naga', karma: 15},
        {metatypeName: 'Pixie', karma: 10},
        {metatypeName: 'Sasquatch', karma: 10},
    ],
    [
        {metatypeName: 'Troll', karma: 0},
        {metatypeName: 'Cyclops', karma: 5},
        {metatypeName: 'Fomorian', karma: 10},
        {metatypeName: 'Giant', karma: 5},
        {metatypeName: 'Minotaur', karma: 5},

        {metatypeName: 'Ork', karma: 0},
        {metatypeName: 'Hobgoblin', karma: 5},
        {metatypeName: 'Ogre', karma: 5},
        {metatypeName: 'Oni', karma: 5},
        {metatypeName: 'Satyr', karma: 10},

        {metatypeName: 'Dwarf', karma: 0},
        {metatypeName: 'Duende (The Dour)', karma: 10},
        {metatypeName: 'Gnome', karma: 5},
        {metatypeName: 'Hanuman', karma: 5},
        {metatypeName: 'Koborokuru', karma: 5},
        {metatypeName: 'Menehune', karma: 5},
        
        {metatypeName: 'Elf', karma: 0},
        {metatypeName: 'Dalakitnon', karma: 5},
        {metatypeName: 'Dryad', karma: 5},
        {metatypeName: 'Nocturna', karma: 5},
        {metatypeName: 'Wakyambi', karma: 10},
        {metatypeName: 'Xapiri Thepe', karma: 5},

        {metatypeName: 'Human', karma: 0},
        {metatypeName: 'Nartaki', karma: 5},
        {metatypeName: 'Valkyrie', karma: 15},

        {metatypeName: 'Centaurs', karma: 15},
        {metatypeName: 'Merrow', karma: 15},
        {metatypeName: 'Naga', karma: 15},
        {metatypeName: 'Pixie', karma: 10},
        {metatypeName: 'Sasquatch', karma: 10},
    ],
    [
        {metatypeName: 'Troll', karma: 0},
        {metatypeName: 'Cyclops', karma: 5},
        {metatypeName: 'Fomorian', karma: 10},
        {metatypeName: 'Giant', karma: 5},
        {metatypeName: 'Minotaur', karma: 5},

        {metatypeName: 'Ork', karma: 0},
        {metatypeName: 'Hobgoblin', karma: 5},
        {metatypeName: 'Ogre', karma: 5},
        {metatypeName: 'Oni', karma: 5},
        {metatypeName: 'Satyr', karma: 10},

        {metatypeName: 'Dwarf', karma: 0},
        {metatypeName: 'Duende (The Dour)', karma: 10},
        {metatypeName: 'Gnome', karma: 5},
        {metatypeName: 'Hanuman', karma: 5},
        {metatypeName: 'Koborokuru', karma: 5},
        {metatypeName: 'Menehune', karma: 5},
        
        {metatypeName: 'Elf', karma: 0},
        {metatypeName: 'Dalakitnon', karma: 5},
        {metatypeName: 'Dryad', karma: 5},
        {metatypeName: 'Nocturna', karma: 5},
        {metatypeName: 'Wakyambi', karma: 10},
        {metatypeName: 'Xapiri Thepe', karma: 5},

        {metatypeName: 'Human', karma: 0},
        {metatypeName: 'Nartaki', karma: 5},
        {metatypeName: 'Valkyrie', karma: 15},

        {metatypeName: 'Centaurs', karma: 15},
        {metatypeName: 'Merrow', karma: 15},
        {metatypeName: 'Naga', karma: 15},
        {metatypeName: 'Pixie', karma: 10},
        {metatypeName: 'Sasquatch', karma: 10},
    ],
    [
        {metatypeName: 'Troll', karma: 0},
        {metatypeName: 'Cyclops', karma: 5},
        {metatypeName: 'Giant', karma: 5},
        {metatypeName: 'Minotaur', karma: 5},

        {metatypeName: 'Ork', karma: 0},
        {metatypeName: 'Hobgoblin', karma: 5},
        {metatypeName: 'Ogre', karma: 5},
        {metatypeName: 'Oni', karma: 5},

        {metatypeName: 'Dwarf', karma: 0},
        {metatypeName: 'Duende (The Dour)', karma: 10},
        {metatypeName: 'Gnome', karma: 5},
        {metatypeName: 'Hanuman', karma: 5},
        {metatypeName: 'Koborokuru', karma: 5},
        
        {metatypeName: 'Elf', karma: 0},
        {metatypeName: 'Dalakitnon', karma: 5},
        {metatypeName: 'Dryad', karma: 5},
        {metatypeName: 'Nocturna', karma: 5},
        {metatypeName: 'Xapiri Thepe', karma: 5},

        {metatypeName: 'Human', karma: 0},
    ],
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

export default function Metatype({handleMetatypeState, metatypeState, metatypeButton}) {

    const rows = metatypes[metatypeButton].map((metatypes) => 
        <ListItem key={metatypes.metatypeName} disablePadding={true}>
            <ListItemButton 
                onClick={handleMetatypeState(metatypes.metatypeName)}
                divider={true}
                sx={{
                    height: 70,
                    bgcolor: (metatypeState === metatypes.metatypeName) ? selectBackground : primaryBackground,
                    '&:hover': {
                        backgroundColor: (metatypeState === metatypes.metatypeName) ? selectHover : primaryHover
                    }
                }}
                alignItems='center'
            >
                <ListItemText primary={metatypes.metatypeName}/>
            </ListItemButton>
        </ListItem>
    );

    return (
        <Grid xl={4} lg={4} md={4} sm={4} xs={4} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
            <Item>
                <List
                    sx={{
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 800,
                        padding: 0
                    }}
                >
                    <ListSubheader 
                        align='left' 
                        sx={{
                            height: 55,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', 
                            bgcolor: subHeaderBackground, 
                            color: 'white',
                        }}>
                            Karma: 0
                        </ListSubheader>
                    {rows}
                </List>
            </Item>
        </Grid>
    );
}