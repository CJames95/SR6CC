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
import { Button, ButtonGroup, TextField } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Select, MenuItem, InputLabel } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { blue, grey, purple } from '@mui/material/colors';

const subHeaderBackground = grey[800];
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

const traditions = [
    'Aztec',
    'Druidic',
]
const magicLimitation = [
    'Sorcery',
    'Conjuring',
    'Enchanting',
]

export default function Magic({
    karma, 
    handleMagicState, 
    magicState, 
    handleTraditionState, 
    handleMagicLimitationState, 
    handleMagicianAdeptPoints, 
    magicianPoints, 
    adeptPoints
}) {
    return (
        <Grid xl={4} lg={4} md={4} sm={4} xs={4} spacing={2} sx={{display: 'flex', flexDirection: 'column', maxHeight: 800}}>
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
                        }}>
                            Karma:
                        </ListSubheader>
                    <ListItem disablePadding={true}>
                        <ListItemButton
                            onClick={handleMagicState(0)}
                            divider={true}
                            sx={{
                                height: 70,
                                bgcolor: (magicState == 0) ? selectBackground : primaryBackground,
                                '&:hover': {
                                    backgroundColor: (magicState == 0) ? selectHover : primaryHover
                                }
                            }}
                            alignItems='center'
                        >
                            <ListItemText 
                                primaryTypographyProps={{
                                    fontFamily: 'Segoe UI',
                                    fontSize: 20,
                                    fontWeight: 500
                                }}
                                primary='Magician'
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding={true}>
                        <ListItemButton
                            onClick={handleMagicState(1)}
                            divider={true}
                            sx={{
                                height: 70,
                                bgcolor: (magicState == 1) ? selectBackground : primaryBackground,
                                '&:hover': {
                                    backgroundColor: (magicState == 1) ? selectHover : primaryHover
                                }
                            }}
                            alignItems='center'
                        >
                            <ListItemText 
                                primaryTypographyProps={{
                                    fontFamily: 'Segoe UI',
                                    fontSize: 20,
                                    fontWeight: 500
                                }}
                                primary='Aspected Magician'
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding={true}>
                        <ListItemButton
                            onClick={handleMagicState(2)}
                            divider={true}
                            sx={{
                                height: 70,
                                bgcolor: (magicState == 2) ? selectBackground : primaryBackground,
                                '&:hover': {
                                    backgroundColor: (magicState == 2) ? selectHover : primaryHover
                                }
                            }}
                            alignItems='center'
                        >
                            <ListItemText 
                                primaryTypographyProps={{
                                    fontFamily: 'Segoe UI',
                                    fontSize: 20,
                                    fontWeight: 500
                                }}
                                primary='Adept'
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding={true}>
                        <ListItemButton
                            onClick={handleMagicState(3)}
                            divider={true}
                            sx={{
                                height: 70,
                                bgcolor: (magicState == 3) ? selectBackground : primaryBackground,
                                '&:hover': {
                                    backgroundColor: (magicState == 3) ? selectHover : primaryHover
                                }
                            }}
                            alignItems='center'
                        >
                            <ListItemText 
                                primaryTypographyProps={{
                                    fontFamily: 'Segoe UI',
                                    fontSize: 20,
                                    fontWeight: 500
                                }}
                                primary='Mystic Adept'
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding={true}>
                        <ListItemButton
                            onClick={handleMagicState(4)}
                            divider={true}
                            sx={{
                                height: 70,
                                bgcolor: (magicState == 4) ? selectBackground : primaryBackground,
                                '&:hover': {
                                    backgroundColor: (magicState == 4) ? selectHover : primaryHover
                                }
                            }}
                            alignItems='center'
                        >
                            <ListItemText 
                                primaryTypographyProps={{
                                    fontFamily: 'Segoe UI',
                                    fontSize: 20,
                                    fontWeight: 500
                                }}
                                primary='Technomancer'
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
                {(magicState == 3) &&
                    <FormControl sx={{marginTop: 3}}  variant='filled' fullWidth>
                        <ButtonGroup>
                            <TextField label='Magician' defaultValue={magicianPoints}/>
                        <Button value='left' onClick={e => handleMagicianAdeptPoints(e.target.value)}>
                            <KeyboardArrowLeft/>
                        </Button>
                        <Button value='right' onClick={e => handleMagicianAdeptPoints(e.target.value)}>
                            <KeyboardArrowRight/>
                        </Button>
                        <TextField label='Adept' defaultValue={adeptPoints}/>
                        </ButtonGroup>
                    </FormControl>
                }
                {(magicState == 1) &&
                    <FormControl sx={{marginTop: 3}}  variant='filled' fullWidth={true}>
                        <InputLabel>Magic Limitation</InputLabel>
                        <Select defaultValue={0} label='Magic Limitation' onChange={e => handleMagicLimitationState(e.target.value)}>
                            {magicLimitation.map((magicLimitation, index) =>
                                <MenuItem value={index}>
                                    {magicLimitation}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                }
                {(magicState == 0 || magicState == 1 || magicState == 3) &&
                    <FormControl sx={{marginTop: 3}}  variant='filled' fullWidth={true}>
                        <InputLabel>Magic Tradition</InputLabel>
                        <Select defaultValue={0} label='Magic Tradition' onChange={e => handleTraditionState(e.target.value)}>
                            {traditions.map((traditions, index) =>
                                <MenuItem value={index}>
                                    {traditions}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                }
            </Item>
        </Grid>
    );
}