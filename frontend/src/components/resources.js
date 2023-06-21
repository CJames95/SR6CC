import React, { useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import ButtonGroup from '@mui/material/ButtonGroup';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Weapons from '../json/weapons_data.json';
import { Expand, ExpandMore } from '@mui/icons-material';

const headerBackground = grey[800];
const subHeaderBackground = grey[400];

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
    backgroundColor: headerBackground,
    color: 'white',
    fontFamily: 'Segoe UI',
    fontSize: 17,
    fontWeight: 500
}));

const NameCell = styled(TableCell)(({ theme }) => ({
    fontFamily: 'Segoe UI',
    fontSize: 18,
    fontWeight: 500,
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
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth='sm'>
            <DialogTitle>Modification for the Weapon</DialogTitle>
            <Table>
                <TableRow>
                    <TableCell>
                        A bunch of modification options
                        <br/>
                        <Button variant='contained' onClick={handleClose} sx={{ height: 55 }}>Buy</Button>
                    </TableCell>
                </TableRow>
            </Table>
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
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <>
            <Grid xl={3} lg={3} md={3} sm={3} xs={3} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
                <Item>
                    <Accordion disableGutters expanded={expanded1 === 'panel0'} onChange={handleChange1('panel0')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls='panel0bh-content'
                            id='panel0bh-header'
                        >
                            Weapons
                        </AccordionSummary>
                        <Accordion disableGutters expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls='panel1bh-content'
                                id='panel1bh-header'
                            >
                                Close Combat Weapons
                            </AccordionSummary>
                            <AccordionDetails sx={{background: 'gray'}}>
                                <ButtonGroup orientation='vertical' fullWidth>
                                    <Button variant='contained' fullWidth onClick={() => handleBlades()}>
                                        Blades
                                    </Button>
                                    <Button variant='contained' fullWidth onClick={() => handleBlades()}>
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
                    </Accordion>
                </Item>
            </Grid>
            <Grid xl={9} lg={9} md={9} sm={9} xs={9} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
                <Item>
                {blades === true &&
                    <>
                        <Button onClick={(e) => handleOpen(e)}>
                            Sword
                        </Button>
                        <Modification
                            open={open}
                            onClose={handleClose}
                        />
                    </>
                }
                {blades === false &&
                    <>
                        <Button onClick={(e) => handleOpen(e)}>
                            Mace
                        </Button>
                        <Modification
                            open={open}
                            onClose={handleClose}
                        />
                    </>
                }
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