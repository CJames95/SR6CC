import React, { useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
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

const headerBackground = grey[800];
const subHeaderBackground = grey[400];

const Metatype = [
    13,
    11,
    9,
    4,
    1
]
const Attributes = [
    24,
    16,
    12,
    8,
    2
]
const Skills = [
    32,
    24,
    20,
    16,
    10
]
const Resources = [
    '450,000 ¥',
    '275,000 ¥',
    '150,000 ¥',
    '50,000 ¥',
    '8,000 ¥'
]

const TableGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto'
}));

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
    fontSize: 18,
    fontWeight: 500,
}));

const BodyCell = styled(TableCell)(({ theme }) => ({
    fontFamily: 'Segoe UI',
    fontSize: 12,
    fontWeight: 500,
    ...theme.typography.button,
}));

const PriorityCell = styled(TableCell)(({ theme }) => ({
    fontFamily: 'Segoe UI',
    fontSize: 18,
    fontWeight: 500,
}));

export default function Priority({powerLevelSetting, ruleSetSetting}) {

    const [openMetatypes, setMetatypesOpen] = React.useState(false);
    const [openAttributes, setAttributesOpen] = React.useState(false);
    const [openSkills, setSkillsOpen] = React.useState(false);
    const [openMagic, setMagicOpen] = React.useState(false);
    const [openResources, setResourcesOpen] = React.useState(false);

    const [metatypeButton, setMetatypeButton] = React.useState(0);
    const [prevMetatypeButton, setPrevMetatypeButton] = React.useState(0);
    const [metatypeUsedLast, setMetatypeUsedLast] = React.useState(false);
    useEffect(() => {
    }, [prevMetatypeButton])
    useEffect(() => {
        handlePriorityButtonSelections(
            powerLevelSetting, 
            ruleSetSetting, 
            metatypeButton,
            prevMetatypeButton,
            attributeButton,
            prevAttributeButton)
        lastClick(metatypeButton, -1)
        console.log(
            'metatype const log',
            metatypeButton,
            prevMetatypeButton
        )
    }, [metatypeButton])
    useEffect(() => {
        console.log(
            'metatype used last log',
            metatypeUsedLast
        )
    }, [metatypeUsedLast])
    const handleMetatypeButton = (value) => {
        setPrevMetatypeButton(metatypeButton)
        setMetatypeButton(value)
    }

    const [attributeButton, setAttributeButton] = React.useState(1);
    const [prevAttributeButton, setPrevAttributeButton] = React.useState(1);
    const [attributeUsedLast, setAttributeUsedLast] = React.useState(false);
    useEffect(() => {
    }, [prevAttributeButton])
    useEffect(() => {
        handlePriorityButtonSelections(
            powerLevelSetting, 
            ruleSetSetting, 
            metatypeButton,
            prevMetatypeButton,
            attributeButton,
            prevAttributeButton)
        lastClick(-1, attributeButton)
        console.log(
            'attribute const log',
            attributeButton,
            prevAttributeButton
        )
    }, [attributeButton])
    useEffect(() => {
        console.log(
            'attribute used last log',
            attributeUsedLast
        )
    }, [attributeUsedLast])
    const handleAttributeButton = (value) => {
        setPrevAttributeButton(attributeButton)
        setAttributeButton(value)
    }

    function lastClick(met, att) {
        if(met != -1) {
            setMetatypeUsedLast(true)
            setAttributeUsedLast(false)
        }
        else if(att != -1) {
            setMetatypeUsedLast(false)
            setAttributeUsedLast(true)
        }
    }

    function handlePriorityButtonSelections(powerLevel, ruleset, metatype, prevMetatype, attribute, prevAttribute) {
        console.log(
            'handlePriorityButtonSelections',
            powerLevel, 
            ruleset, 
            metatype, 
            prevMetatype, 
            attribute, 
            prevAttribute
        )
        if(ruleset == 0) {
            if(powerLevel == 1) {
                if(metatype == attribute) {
                    console.log(
                        'metatype: ',
                        metatype,
                        ' = ',
                        'attribute: ',
                        attribute
                    )
                    if(metatypeUsedLast == true) {
                        setAttributeButton(prevMetatype)
                        setAttributeUsedLast(true)
                        setMetatypeUsedLast(false)
                    }
                    else {
                        setMetatypeButton(prevAttribute)
                        setMetatypeUsedLast(true)
                        setAttributeUsedLast(false)
                    }
                }
            }
        }
        else if (ruleset == 1) {

        }
    }

    return (
    <TableGrid xs={12} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
        <Item>
            <Table>
                <TableHead>
                    <TableRow sx={{height: 55}}>
                        <HeaderCell />
                        <HeaderCell align='center'>
                            Priority
                        </HeaderCell>
                        <HeaderCell align='center'>
                            A
                        </HeaderCell>
                        <HeaderCell align='center'>
                            B
                        </HeaderCell>
                        <HeaderCell align='center'>
                            C
                        </HeaderCell>
                        <HeaderCell align='center'>
                            D
                        </HeaderCell>
                        <HeaderCell align='center'>
                            E
                        </HeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'}}} hover>
                        <TableCell sx={{minWidth: 35}}>
                            <IconButton aria-label='expand row' size='small' onClick={() => setMetatypesOpen(!openMetatypes)}>
                                {openMetatypes ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </TableCell>
                        <PriorityCell align='center'>
                            Metatype
                        </PriorityCell>
                        <BodyCell>
                            <Button 
                                value={0} 
                                onClick={e => handleMetatypeButton(e.target.value)} 
                                color={(metatypeButton == 0) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                            >
                                {Metatype[0]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={1} 
                                onClick={e => handleMetatypeButton(e.target.value)} 
                                color={(metatypeButton == 1) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                            >
                                {Metatype[1]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={2} 
                                onClick={e => handleMetatypeButton(e.target.value)} 
                                color={(metatypeButton == 2) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                            >
                                {Metatype[2]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={3} 
                                onClick={e => handleMetatypeButton(e.target.value)} 
                                color={(metatypeButton == 3) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                            >
                                {Metatype[3]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={4} 
                                onClick={e => handleMetatypeButton(e.target.value)} 
                                color={(metatypeButton == 4) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                            >
                                {Metatype[4]}
                            </Button>
                        </BodyCell>
                    </TableRow>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'}}} hover>
                        <TableCell colSpan={7}>
                            hi
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                            <Collapse in={openMetatypes} timeout='auto' unmountOnExit>
                                <Box sx={{ margin: 1 }}>
                                    <Typography variant='h6' gutterBottom component='div'>
                                        History
                                    </Typography>
                                </Box>
                            </Collapse>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'}}} hover>
                        <TableCell sx={{minWidth: 35}}>
                            <IconButton aria-label='expand row' size='small' onClick={() => setAttributesOpen(!openAttributes)}>
                                {openAttributes ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </TableCell>
                        <PriorityCell align='center'>
                            Attributes
                        </PriorityCell>
                        <BodyCell>
                            <Button 
                                value={0} 
                                onClick={e => handleAttributeButton(e.target.value)} 
                                color={(attributeButton == 0) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                            >
                                {Attributes[0]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={1} 
                                onClick={e => handleAttributeButton(e.target.value)} 
                                color={(attributeButton == 1) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                            >
                                {Attributes[1]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={2} 
                                onClick={e => handleAttributeButton(e.target.value)} 
                                color={(attributeButton == 2) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                            >
                                {Attributes[2]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={3} 
                                onClick={e => handleAttributeButton(e.target.value)} 
                                color={(attributeButton == 3) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                            >
                                {Attributes[3]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={4} 
                                onClick={e => handleAttributeButton(e.target.value)} 
                                color={(attributeButton == 4) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                            >
                                {Attributes[4]}
                            </Button>
                        </BodyCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                            <Collapse in={openAttributes} timeout='auto' unmountOnExit>
                                <Box sx={{ margin: 1 }}>
                                    <Typography variant='h6' gutterBottom component='div'>
                                        History
                                    </Typography>
                                </Box>
                            </Collapse>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Item>
    </TableGrid>
    );
}