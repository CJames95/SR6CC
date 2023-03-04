import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, ButtonGroup } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { Select, MenuItem, InputLabel } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const headerBackground = grey[800];

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

const skills = [
    'Knowledge',
    'Language',
]

export default function Knowledge() {

    const MenuItemMap = skills.map((skills) => 
        <MenuItem>
            {skills}
        </MenuItem>
    );
    const SkillsSelectionForm = (
        <FormControl fullWidth sx={{ minWidth: 50 }} size='small'>
            <Select
                labelId='skills-label'
                id='skills'
                variant='outlined'
                sx={{
                    bgcolor: 'white'
                }}
            >
                {MenuItemMap}
            </Select>
        </FormControl>
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
                            bgcolor: headerBackground, 
                            color: 'white',
                            fontFamily: 'Segoe UI',
                            fontSize: 20,
                            fontWeight: 500,
                        }}
                    >
                        <Grid container spacing={2} direction='column' columns={12} sx={{height: '100%', padding: 0, justifyContent: 'center'}}>
                            <Grid item xs={7} sx={{height: '100%'}}>
                                {SkillsSelectionForm}
                            </Grid>
                            <Grid item xs={2.5}>
                                <Button fullWidth variant='contained'>
                                    <AddCircleIcon/>
                                </Button>
                            </Grid>
                            <Grid item xs={2.5}>
                                <Button fullWidth variant='contained'>
                                    <RemoveCircleIcon/>
                                </Button>
                            </Grid>
                        </Grid>
                    </ListSubheader>
                    hi
                </List>
            </Item>
        </Grid>
    );
}