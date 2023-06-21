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
    magicStates,
    handleMagicStates,
}) {
    // Load default values into settings on page load.
    useEffect(() => {
        if(magicStates.traditionState === 0) {
            handleMagicStates('traditionState', traditions[0])()
        }
        if(magicStates.magicLimitationState === 0) {
            handleMagicStates('magicLimitationState', magicLimitation[0])()
        }
    }, [])
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
                        {[0, 1, 2, 3, 4].map((index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton
                                    onClick={handleMagicStates('magicState', index)}
                                    divider
                                    sx={{
                                    height: 70,
                                    bgcolor: magicStates.magicState === index ? selectBackground : primaryBackground,
                                    '&:hover': {
                                        backgroundColor: magicStates.magicState === index ? selectHover : primaryHover
                                    }
                                    }}
                                    alignItems="center"
                                >
                                    <ListItemText
                                    primaryTypographyProps={{
                                        fontFamily: 'Segoe UI',
                                        fontSize: 20,
                                        fontWeight: 500
                                    }}
                                    primary={['Magician', 'Aspected Magician', 'Adept', 'Mystic Adept', 'Technomancer'][index]}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                </List>
                {(magicStates.magicState == 3) &&
                    <FormControl sx={{marginTop: 3}}  variant='filled' fullWidth>
                        <ButtonGroup>
                            <TextField label='Magician' value={magicStates.magicianPoints} inputProps={{readOnly: true}}/>
                        <Button onClick={handleMagicStates('mystic', 'left')}>
                            <KeyboardArrowLeft/>
                        </Button>
                        <Button onClick={handleMagicStates('mystic', 'right')}>
                            <KeyboardArrowRight/>
                        </Button>
                        <TextField label='Adept' value={magicStates.adeptPoints} inputProps={{readOnly: true}}/>
                        </ButtonGroup>
                    </FormControl>
                }
                {(magicStates.magicState == 1) &&
                    <FormControl sx={{marginTop: 3}}  variant='filled' fullWidth={true}>
                        <InputLabel>Magic Limitation</InputLabel>
                        <Select defaultValue={0} label='Magic Limitation' onChange={e => handleMagicStates('magicLimitationState', magicLimitation[e.target.value])()}>
                            {magicLimitation.map((magicLimitation, index) =>
                                <MenuItem value={index}>
                                    {magicLimitation}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                }
                {(magicStates.magicState == 0 || magicStates.magicState == 1 || magicStates.magicState == 3) &&
                    <FormControl sx={{marginTop: 3}}  variant='filled' fullWidth={true}>
                        <InputLabel>Magic Tradition</InputLabel>
                        <Select defaultValue={0} label='Magic Tradition' onChange={(e) => handleMagicStates('traditionState', traditions[e.target.value])()}>
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