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
    'Derived Attribute',
    'Value'
]

const derivedAttributeRows = [
    {
        name: 'Initiative',
        value: 0
    },
    {
        name: 'Initiative (Matrix AR)',
        value: 0
    },
    {
        name: 'Initiative (Astral)',
        value: 0
    },
    {
        name: 'Defense',
        value: 0
    },
    {
        name: 'Composure',
        value: 0
    },
    {
        name: 'Judge Intentions',
        value: 0
    },
    {
        name: 'Memory',
        value: 0
    },
    {
        name: 'Lift/Carry',
        value: 0
    },
]

export default function Derived() {

    const headerCells = header.map((header, index) => {
        return index === 0 ?
        <HeaderCell align='left'>
            {header}
        </HeaderCell>
        :
        <HeaderCell align='center'>
            {header}
        </HeaderCell>
    })

    const rows = derivedAttributeRows.map((derivedAttributeRows) => 
        <TableRow sx={{height: 75}} hover>
            <NameCell align='left'>
                {derivedAttributeRows.name}
            </NameCell>
            <TableCell align='center'>
                {derivedAttributeRows.value}
            </TableCell>
        </TableRow>
    )

    return (
        <Grid xl={4} lg={4} md={4} sm={4} xs={4} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
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