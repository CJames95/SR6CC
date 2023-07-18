import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import ButtonGroup from '@mui/material/ButtonGroup';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    ListSubheader
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Weapons from '../json/weapons_data.json';
import { Expand, ExpandMore } from '@mui/icons-material';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

const headerBackgroundColor = '#393939';
const headerFontColor = '#ffffff';
const bodyBackgroundColor = '#e1e1da'
const collapseBackgroundColor = '#ecebe6'

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

const HeaderCell = styled(TableCell)(({ theme }) => ({
    background: headerBackgroundColor,
    color: headerFontColor,
    fontFamily: 'Segoe UI',
    fontSize: 17,
    fontWeight: 500
}));

const BodyRow = styled(TableRow)(({ theme }) => ({
    background: bodyBackgroundColor,
}));

const BodyCell = styled(TableCell)(({ theme }) => ({
    fontFamily: 'Segoe UI',
    fontSize: 15,
    fontWeight: 500,
    borderBottom: 'none'
}));

const CollapseRow = styled(TableRow)(({ theme }) => ({
    background: collapseBackgroundColor,
}));

function Modification(props) {
    const { onClose, open } = props;
    const [tempValue, setTempValue] = React.useState('');
    useEffect(() => {
        console.log(tempValue)
    }, [tempValue])

    const handleClose = () => {
        onClose(tempValue);
    };
    const handleInputChange = (value) => {
        setTempValue(value)
    }
    const handleEnterKeyDown = (event) => {
        console.log(event.key)
        if(event.key === 'Enter') {
            event.preventDefault();
            handleClose();
        }
    }

    return (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth='sm' sx={{ flexGrow: 1, margin: 'auto', padding: 1}}>
            <DialogContent>
                {/*<Grid container columns={12} spacing={2}>
                    <Grid xs={4} spacing={2} sx={{ display: 'flex', flexDirection: 'column'}}>
                        <Item>
                            hi
                        </Item>
                    </Grid>
                    <Grid xs={8} spacing={2} sx={{ display: 'flex', flexDirection: 'column'}}>
                        <Item>
                            bye
                        </Item>
                    </Grid>
                </Grid>*/}
                <Grid container columns={12} spacing={2}>
                    <Grid xs={12} spacing={2} sx={{ display: 'flex', flexDirection: 'column'}}>
                        <Item>
                            Total: 
                        </Item>
                    </Grid>
                    <Grid xs={12} spacing={2} sx={{ display: 'flex', flexDirection: 'column'}}>
                        <Item sx={{ margin:'auto', width: '97%'}}>
                            <Table>
                                <TableHead>
                                    <HeaderCell align='center' sx={{ width: '30%' }}>
                                        Mod Position
                                    </HeaderCell>
                                    <HeaderCell align='center' sx={{ width: '30%' }}>
                                        Select Mod
                                    </HeaderCell>
                                    <HeaderCell align='center' sx={{ width: '40%' }}>
                                        Mod Description
                                    </HeaderCell>
                                </TableHead>
                                <TableBody>
                                    {['Top', 'Barrel', 'Under'].map((item, index) => (
                                        <BodyRow>
                                            <BodyCell align='center' sx={{ width: '30%' }}>
                                                {item}
                                            </BodyCell>
                                            <BodyCell align='center' sx={{ width: '30%' }}>
                                                <Select fullWidth size='small'>
                                                    <MenuItem>hi</MenuItem>
                                                </Select>
                                            </BodyCell>
                                            <BodyCell align='center' sx={{ width: '40%' }}>
                                                mod desc
                                            </BodyCell>
                                        </BodyRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Item>
                    </Grid>
                    <Grid xs={12} spacing={2} sx={{ display: 'flex', flexDirection: 'column'}}>
                        <Item>
                            <Table>
                                <TableBody>
                                    <TableCell align='left' sx={{ width: '50%' }}>
                                        <Button>
                                            Back
                                        </Button>
                                    </TableCell>
                                    <TableCell align='right' sx={{ width: '50%' }}>
                                        <Button>
                                            Add To Cart
                                        </Button>
                                    </TableCell>
                                </TableBody>
                            </Table>
                        </Item>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}

Modification.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

export default function Derived() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (event) => {
        event.currentTarget.blur()
        setOpen(true);
    }
    const handleClose = (value) => {
        setOpen(false);
    }

    const [blades, setBlades] = React.useState(true);
    const handleBlades = () => {
        setBlades(!blades)
        setClubs(!clubs)
    }
    const [clubs, setClubs] = React.useState(false); 
    const [expanded1, setExpanded1] = React.useState(false);
    const handleChange1 = (panel) => (event, isExpanded1) => {
        setExpanded1(isExpanded1 ? panel : false)
    }
    const [expanded, setExpanded] = React.useState({});

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [panel]: isExpanded,
        }));
    };
    React.useEffect(() => {
        const initialExpandedState = {};
        for (let i = 0; i < 3; i++) {
          initialExpandedState[`panel${i}`] = false;
        }  
        setExpanded(initialExpandedState);
        console.log(initialExpandedState)
      }, []);

    const [data, setData] = useState([])
    const [collapseState, setCollapseState] = useState({})

    const getWeaponsData = (type) => {
        axios
            .get(`http://localhost:8000/weapons/${type}/`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
            <Grid xl={3} lg={3} md={3} sm={3} xs={3} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
                <Item>
                    <div style={{ height: 800, maxHeight: 800, overflow: 'auto' }}>
                    <Accordion disableGutters expanded={expanded['panel0'] === true} onChange={handleChange('panel0')} sx={{ background: '#393939', color: '#ffffff' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls='panel0bh-content'
                            id='panel0bh-header'
                        >
                            Weapons
                        </AccordionSummary>
                        <AccordionDetails sx={{ background: '#ecebe6' }}>
                            <Accordion disableGutters expanded={expanded['panel1'] === true} onChange={handleChange('panel1')} sx={{ background: '#393939', color: '#ffffff' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls='panel1bh-content'
                                    id='panel1bh-header'
                                >
                                    Close Combat Weapons
                                </AccordionSummary>
                                <AccordionDetails sx={{ background: '#ecebe6' }}>
                                    <ButtonGroup orientation='vertical' fullWidth>
                                        <Button variant='contained' fullWidth onClick={() => handleBlades()}>
                                            Blades
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('TASERS')}>
                                            Clubs
                                        </Button>
                                    </ButtonGroup>
                                {/*<ListItem disablePadding={true}>
                                    <ListItemText 
                                        primaryTypographyProps={{
                                            fontFamily: 'Segoe UI',
                                            fontSize: 20,
                                            fontWeight: 500
                                        }}
                                        primary={
                                            <Button variant='contained' fullWidth onClick={() => handleBlades()}>
                                                Blades
                                            </Button>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding={true}>
                                    <ListItemText 
                                        primaryTypographyProps={{
                                            fontFamily: 'Segoe UI',
                                            fontSize: 20,
                                            fontWeight: 500
                                        }}
                                        primary={
                                            <Button variant='contained' fullWidth onClick={() => handleBlades()}>
                                                Clubs
                                            </Button>
                                        }
                                    />
                                </ListItem>*/}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion disableGutters expanded={expanded['panel2'] === true} onChange={handleChange('panel2')} sx={{ background: '#393939', color: '#ffffff' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls='panel1bh-content'
                                    id='panel1bh-header'
                                >
                                    Ranged Weapons
                                </AccordionSummary>
                                <AccordionDetails sx={{ background: '#ecebe6' }}>
                                    <ButtonGroup orientation='vertical' fullWidth>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('TASERS')}>
                                            Tasers
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('HOLDOUTS')}>
                                            Hold-Outs
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('PISTOLS_LIGHT')}>
                                            Light Pistols
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('MACHINE_PISTOLS')}>
                                            Machine Pistols
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('PISTOLS_HEAVY')}>
                                            Heavy Pistols
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('SUBMACHINE_GUNS')}>
                                            Submachine Guns
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('RIFLE_HUNTING')}>
                                            Hunting Rifle
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('RIFLE_ASSAULT')}>
                                            Assault Rifles
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('RIFLE_SNIPER')}>
                                            Sniper Rifles
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('SHOTGUNS')}>
                                            Shotguns
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('LMG')}>
                                            Light Machine Guns
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('MMG')}>
                                            Medium Machine Guns
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('HMG')}>
                                            Heavy Machine Guns
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('ASSAULT_CANNON')}>
                                            Assault Cannons
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('LAUNCHERS')}>
                                            Launchers
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('SPECIAL')}>
                                            Special Weapons
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('THROWERS')}>
                                            Throwers
                                        </Button>
                                        <Button variant='contained' fullWidth onClick={() => getWeaponsData('OTHER_SPECIAL')}>
                                            Misc
                                        </Button>
                                        
                                    </ButtonGroup>
                                </AccordionDetails>
                            </Accordion>
                        </AccordionDetails>
                    </Accordion>
                    </div>
                </Item>
            </Grid>
            <Grid xl={9} lg={9} md={9} sm={9} xs={9} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
                <Item>
                    <div style={{ height: 800, maxHeight: 800, overflow: 'auto' }}>
                        <Table stickyHeader>
                            <TableHead>
                                    <HeaderCell align='center' sx={{ width: '10%' }}>
                                        Buy
                                    </HeaderCell>
                                    <HeaderCell align='center' sx={{ width: '20%' }}>
                                        Weapon
                                    </HeaderCell>
                                    <HeaderCell align='center' sx={{ width: '10%' }}>
                                        DV
                                    </HeaderCell>
                                    <HeaderCell align='center' sx={{ width: '10%' }}>
                                        Mode
                                    </HeaderCell>
                                    <HeaderCell align='center' sx={{ width: '15%' }}>
                                        Attack Ratings
                                    </HeaderCell>
                                    <HeaderCell align='center' sx={{ width: '10%' }}>
                                        Ammo
                                    </HeaderCell>
                                    <HeaderCell align='center' sx={{ width: '10%' }}>
                                        Avail
                                    </HeaderCell>
                                    <HeaderCell align='center' sx={{ width: '10%' }}>
                                        Cost
                                    </HeaderCell>
                                    <HeaderCell align='center' sx={{ width: '5%' }}>
                                        More
                                    </HeaderCell>
                            </TableHead>
                        {data.map((item) => (
                            <TableBody>
                                <BodyRow>
                                    <BodyCell align='center' sx={{ width: '10%' }}>
                                        <Button variant='contained' onClick={(e) => handleOpen(e)} sx={{ height: 40 }}>
                                            Buy
                                        </Button>
                                    </BodyCell>
                                    <BodyCell align='center' sx={{ width: '20%' }}>
                                        {item.name}
                                    </BodyCell>
                                    <BodyCell align='center' sx={{ width: '10%' }}>
                                        {item.dv}
                                    </BodyCell>
                                    <BodyCell align='center' sx={{ width: '10%' }}>
                                        {item.weapon_mode}
                                    </BodyCell>
                                    <BodyCell align='center' sx={{ width: '15%' }}>
                                        {item.close}/{item.near}/{item.medium}/{item.far}/{item.extreme}
                                    </BodyCell>
                                    <BodyCell align='center' sx={{ width: '10%' }}>
                                        {item.weapon_ammo}
                                    </BodyCell>
                                    <BodyCell align='center' sx={{ width: '10%' }}>
                                        {item.availability}
                                    </BodyCell>
                                    <BodyCell align='center' sx={{ width: '10%' }}>
                                        {item.cost}
                                    </BodyCell>
                                    <BodyCell align='center' sx={{ width: '5%' }}>
                                        <IconButton 
                                            aria-label='expand row' 
                                            size='small' 
                                            onClick={() => {
                                                setCollapseState((prevState) => ({
                                                    ...prevState,
                                                    [item.name]: !prevState[item.name],
                                                }));
                                            }}
                                        >
                                            {collapseState[item.name] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </IconButton>
                                    </BodyCell>
                                </BodyRow>
                                <CollapseRow>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
                                        <Collapse in={collapseState[item.name]} timeout='auto' unmountOnExit>
                                            <Table>
                                                <TableBody>
                                                    <TableRow>
                                                        <BodyCell>
                                                            Description
                                                        </BodyCell>
                                                        <BodyCell>
                                                            {item.description}
                                                        </BodyCell>
                                                    </TableRow>
                                                    {item.wireless !== null && (
                                                        <TableRow>
                                                            <BodyCell>
                                                                Wireless
                                                            </BodyCell>
                                                            <BodyCell>
                                                                {item.wireless}
                                                            </BodyCell>
                                                        </TableRow>
                                                    )}
                                                    {item.note !== null && (
                                                        <TableRow>
                                                            <BodyCell>
                                                                Notes
                                                            </BodyCell>
                                                            <BodyCell>
                                                                {item.note}
                                                            </BodyCell>
                                                        </TableRow>
                                                    )}
                                                    {item.add_rules !== null && (
                                                        <TableRow>
                                                            <BodyCell>
                                                                Rules
                                                            </BodyCell>
                                                            <BodyCell>
                                                                {item.add_rules}
                                                            </BodyCell>
                                                        </TableRow>
                                                    )}
                                                    {item.standard_upgrades !== null && (
                                                        <TableRow>
                                                            <BodyCell>
                                                                Standard Upgrades
                                                            </BodyCell>
                                                            <BodyCell>
                                                                {item.standard_upgrades}
                                                            </BodyCell>
                                                        </TableRow>
                                                    )}
                                                </TableBody>
                                            </Table>
                                        </Collapse>
                                    </TableCell>
                                </CollapseRow>
                            </TableBody>
                        ))}
                        </Table>
                        <Modification onClose={handleClose} open={open}/>
                    </div>
                </Item>
            </Grid>
            <Grid xl={12} lg={12} md={12} sm={12} xs={12} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
                <Item>
                Items Bought
                </Item>
            </Grid>
        </>
    );
}