import React, { useEffect } from 'react';
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
const attributeRows = [
    {
        name: 'Body',
        adjust: 0,
        attr: 0,
        karma: 0,
        cost: 0,
        value: 0,
        max: 0
    },
    {
        name: 'Agility',
        adjust: 0,
        attr: 0,
        karma: 0,
        cost: 0,
        value: 0,
        max: 0
    },
    {
        name: 'Reaction',
        adjust: 0,
        attr: 0,
        karma: 0,
        cost: 0,
        value: 0,
        max: 0
    },
    {
        name: 'Strength',
        adjust: 0,
        attr: 0,
        karma: 0,
        cost: 0,
        value: 0,
        max: 0
    },
    {
        name: 'Willpower',
        adjust: 0,
        attr: 0,
        karma: 0,
        cost: 0,
        value: 0,
        max: 0
    },
    {
        name: 'Logic',
        adjust: 0,
        attr: 0,
        karma: 0,
        cost: 0,
        value: 0,
        max: 0
    },
    {
        name: 'Intuition',
        adjust: 0,
        attr: 0,
        karma: 0,
        cost: 0,
        value: 0,
        max: 0
    },
    {
        name: 'Charisma',
        adjust: 0,
        attr: 0,
        karma: 0,
        cost: 0,
        value: 0,
        max: 0
    },
    {
        name: 'Edge',
        adjust: 0,
        attr: 0,
        karma: 0,
        cost: 0,
        value: 0,
        max: 0
    },
    {
        name: 'Magic',
        adjust: 0,
        attr: 0,
        karma: 0,
        cost: 0,
        value: 0,
        max: 0
    },
    {
        name: 'Resonance',
        adjust: 0,
        attr: 0,
        karma: 0,
        cost: 0,
        value: 0,
        max: 0
    },
]

export default function Attributes() {

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
                <ButtonGroup variant='filled'>
                    <Button sx={{width: 45}}>
                        <RemoveCircleIcon/>
                    </Button>
                    <TextField value={attributeRows.adjust} inputProps={{readOnly: true, style: {textAlign: 'center'}}} sx={{width: 50}} size='small'/>
                    <Button sx={{width: 45}}>
                        <AddCircleIcon/>
                    </Button>
                </ButtonGroup>
            </TableCell>
            <TableCell align='center'>
                <ButtonGroup variant='filled'>
                    <Button sx={{width: 45}}>
                        <RemoveCircleIcon/>
                    </Button>
                    <TextField value={attributeRows.attr} inputProps={{readOnly: true, style: {textAlign: 'center'}}} sx={{width: 50}} size='small'/>
                    <Button sx={{width: 45}}>
                        <AddCircleIcon/>
                    </Button>
                </ButtonGroup>
            </TableCell>
            <TableCell align='center'>
                <ButtonGroup variant='filled'>
                    <Button sx={{width: 45}}>
                        <RemoveCircleIcon/>
                    </Button>
                    <TextField value={attributeRows.karma} inputProps={{readOnly: true, style: {textAlign: 'center'}}} sx={{width: 50}} size='small'/>
                    <Button sx={{width: 45}}>
                        <AddCircleIcon/>
                    </Button>
                </ButtonGroup>
            </TableCell>
            <TableCell align='center'>
                {attributeRows.cost}
            </TableCell>
            <TableCell align='center'>
                {attributeRows.value}
            </TableCell>
            <TableCell align='center'>
                {attributeRows.max}
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