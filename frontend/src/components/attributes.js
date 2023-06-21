import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { ButtonGroup, Button } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Icon from '@mui/material/Icon';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@mui/material';
import { Select, MenuItem, InputLabel } from '@mui/material';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import max from '../json/metatype_max_attrib.json';

const headerBackground = grey[800];
const subHeaderBackground = grey[900];

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

const header = [
    'Attribute Name',
    'Adjustment Points',
    'Attribute Points',
    'Karma Points',
    'Karma Cost',
    'Value',
    'Max Value'
]



export default function Attributes({priorityButtons, chosenMetatype, attributePoints, handleAttributePoints, attributes}) {
    const attributeRows = [
        {
            name: 'Body',
            attrName: 'bod',
            adjust: attributes.adjustPointsBod,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsBod,
            karma: attributes.karmaPointsBod,
            cost: (attributes['bod'] + 1) * 5,
            value: attributes.bod,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxbod : 0
        },
        {
            name: 'Agility',
            attrName: 'agi',
            adjust: attributes.adjustPointsAgi,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsAgi,
            karma: attributes.karmaPointsAgi,
            cost: (attributes['agi'] + 1) * 5,
            value: attributes.agi,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxagi : 0
        },
        {
            name: 'Reaction',
            attrName: 'rea',
            adjust: attributes.adjustPointsRea,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsRea,
            karma: attributes.karmaPointsRea,
            cost: (attributes['rea'] + 1) * 5,
            value: attributes.rea,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxrea : 0
        },
        {
            name: 'Strength',
            attrName: 'str',
            adjust: attributes.adjustPointsStr,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsStr,
            karma: attributes.karmaPointsStr,
            cost: (attributes['str'] + 1) * 5,
            value: attributes.str,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxstr : 0
        },
        {
            name: 'Willpower',
            attrName: 'wil',
            adjust: attributes.adjustPointsWil,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsWil,
            karma: attributes.karmaPointsWil,
            cost: (attributes['wil'] + 1) * 5,
            value: attributes.wil,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxwil : 0
        },
        {
            name: 'Logic',
            attrName: 'log',
            adjust: attributes.adjustPointsLog,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsLog,
            karma: attributes.karmaPointsLog,
            cost: (attributes['log'] + 1) * 5,
            value: attributes.log,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxlog : 0
        },
        {
            name: 'Intuition',
            attrName: 'int',
            adjust: attributes.adjustPointsInt,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsInt,
            karma: attributes.karmaPointsInt,
            cost: (attributes['int'] + 1) * 5,
            value: attributes.int,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxint : 0
        },
        {
            name: 'Charisma',
            attrName: 'cha',
            adjust: attributes.adjustPointsCha,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsCha,
            karma: attributes.karmaPointsCha,
            cost: (attributes['cha'] + 1) * 5,
            value: attributes.cha,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxcha : 0
        },
        {
            name: 'Edge',
            attrName: 'edg',
            adjust: attributes.adjustPointsEdg,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsEdg,
            karma: attributes.karmaPointsEdg,
            cost: (attributes['edg'] + 1) * 5,
            value: attributes.edg,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxedg : 0
        },
        {
            name: 'Magic',
            attrName: 'mag',
            adjust: attributes.adjustPointsMag,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsMag,
            karma: attributes.karmaPointsMag,
            cost: (attributes['mag'] + 1) * 5,
            value: 0,
            max: null
        },
        {
            name: 'Resonance',
            attrName: 'res',
            adjust: attributes.adjustPointsRes,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsRes,
            karma: attributes.karmaPointsRes,
            cost: (attributes['res'] + 1) * 5,
            value: 0,
            max: null
        },
    ]
    const headerCells = header.map((header, index) => {
        return index == 0 ?
        <HeaderCell align='left'>
            {header}
        </HeaderCell>
        :
        <HeaderCell align='center'>
            {header}
        </HeaderCell>
    })

    const rows = attributeRows.map((attributeRows) =>
        <TableRow sx={{height: 75}} hover>
            <NameCell align='left'>
                {attributeRows.name}
            </NameCell>
            <TableCell align='center'>
                {(attributeRows.max > 6 || attributeRows.name === 'Edge' || attributeRows.name === 'Magic' && priorityButtons.magic !== 4 || attributeRows.name === 'Resonance' && priorityButtons.magic !== 4 ) &&
                <ButtonGroup variant='filled'>
                    <Button sx={{width: 45}} onClick={e => attributeRows.handlePoints('adjust', 1, attributeRows.attrName)}>
                        <RemoveCircleIcon/>
                    </Button>
                    <TextField value={attributeRows.adjust} inputProps={{readOnly: true, style: {textAlign: 'center'}}} sx={{width: 50}} size='small'/>
                    <Button sx={{width: 45}} onClick={e => attributeRows.handlePoints('adjust', -1, attributeRows.attrName)}>
                        <AddCircleIcon/>
                    </Button>
                </ButtonGroup>
                }
            </TableCell>
            <TableCell align='center'>
                {(attributeRows.name === 'Magic' && priorityButtons.magic !== 4 || attributeRows.name === 'Resonance' && priorityButtons.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') &&
                <ButtonGroup variant='filled'>
                    <Button sx={{width: 45}} onClick={e => attributeRows.handlePoints('attrib', 1, attributeRows.attrName)}>
                        <RemoveCircleIcon/>
                    </Button>
                    <TextField value={attributeRows.attr} inputProps={{readOnly: true, style: {textAlign: 'center'}}} sx={{width: 50}} size='small'/>
                    <Button sx={{width: 45}} onClick={e => attributeRows.handlePoints('attrib', -1, attributeRows.attrName)}>
                        <AddCircleIcon/>
                    </Button>
                </ButtonGroup>
                }
            </TableCell>
            <TableCell align='center'>
                {(attributeRows.name === 'Magic' && priorityButtons.magic !== 4 || attributeRows.name === 'Resonance' && priorityButtons.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') &&
                <ButtonGroup variant='filled'>
                    <Button sx={{width: 45}} onClick={e => attributeRows.handlePoints('karma', 1, attributeRows.attrName)}>
                        <RemoveCircleIcon/>
                    </Button>
                    <TextField value={attributeRows.karma} inputProps={{readOnly: true, style: {textAlign: 'center'}}} sx={{width: 50}} size='small'/>
                    <Button sx={{width: 45}} onClick={e => attributeRows.handlePoints('karma', -1, attributeRows.attrName)}>
                        <AddCircleIcon/>
                    </Button>
                </ButtonGroup>
                }
            </TableCell>
            <TableCell align='center'>
                {(attributeRows.name === 'Magic' && priorityButtons.magic !== 4 || attributeRows.name === 'Resonance' && priorityButtons.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') ? attributeRows.cost : 0}
            </TableCell>
            <TableCell align='center'>
                {(attributeRows.name === 'Magic' && priorityButtons.magic !== 4 || attributeRows.name === 'Resonance' && priorityButtons.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') ? attributeRows.value : 0}
            </TableCell>
            <TableCell align='center'>
                {(attributeRows.name === 'Magic' && priorityButtons.magic !== 4 || attributeRows.name === 'Resonance' && priorityButtons.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') ? attributeRows.max : 0}
            </TableCell>
        </TableRow>
    )

    return (
        <Grid xl={9} lg={9} md={9} sm={9} xs={9} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
            <Item>
                <Table>
                    <TableHead>
                        <TableRow sx={{height: 55}}>
                            {headerCells}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </Item>
        </Grid>
    );
}