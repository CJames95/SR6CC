import React, { useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FormControl from '@mui/material/FormControl';
import { IconButton, Button, ButtonGroup, TextField } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Select, MenuItem, InputLabel } from '@mui/material';
import { Table, TableBody, TableRow, TableCell } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { blue, grey, purple, blueGrey } from '@mui/material/colors';

const subHeaderBackground = grey[800];
const primaryIcon = blueGrey[600];
const selectIcon = blueGrey[700];
const primaryBackground = blue[500];
const primaryHover = blue[600];
const selectBackground = purple[500];
const selectHover = purple[600];

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

export default function QualitiesTaken({qualitiesTakenArray, handleUpdateQualityTakenArray, qualityTakenState, handleQualityTakenState}) {

    const mouseDown = e => {
        e.stopPropagation();
    }

    const listEntries = qualitiesTakenArray.sort(function(a, b) {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
    })
    .map((qualitiesTakenArray) => 
        <ListItem disablePadding={true}>
            <ListItemButton
                disableGutters
                onClick={handleQualityTakenState(qualitiesTakenArray.id)}
                divider={true}
                sx={{
                    height: 70,
                    bgcolor: (qualityTakenState == qualitiesTakenArray.id) ? selectBackground : primaryBackground,
                    '&:hover': {
                        backgroundColor: (qualityTakenState == qualitiesTakenArray.id) ? selectHover : primaryHover
                    }
                }}
                alignItems='center'
            >
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell align='left'>
                                <ListItemText 
                                    primaryTypographyProps={{
                                        fontFamily: 'Segoe UI',
                                        fontSize: 20,
                                        fontWeight: 500
                                    }}
                                    primary={qualitiesTakenArray.name}
                                />
                            </TableCell>
                            <TableCell align='right'>
                                <ListItemText 
                                    primaryTypographyProps={{
                                        fontFamily: 'Segoe UI',
                                        fontSize: 20,
                                        fontWeight: 500
                                    }}
                                    primary={qualitiesTakenArray.cost}
                                />
                            </TableCell>
                            <TableCell align='right'>
                                <IconButton 
                                    color=''
                                    onMouseDown={mouseDown} 
                                    onClick={handleUpdateQualityTakenArray(qualitiesTakenArray.id)} 
                                    sx={{
                                        marginRight: 1,
                                        bgcolor: primaryIcon,
                                        '&:hover': {
                                            backgroundColor: selectIcon
                                        }
                                    }}
                                >
                                    <RemoveCircleIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
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
                        align='right' 
                        sx={{
                            height: 55,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', 
                            bgcolor: subHeaderBackground, 
                            color: 'white',
                            fontFamily: 'Segoe UI',
                            fontSize: 20,
                            fontWeight: 500
                        }}
                    >
                        Net Bonus Karma:
                    </ListSubheader>
                    {listEntries}
                </List>
            </Item>
        </Grid>
    );
}