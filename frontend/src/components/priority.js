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
    fontWeight: 500
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

const WarningHeader = styled(Typography)(({ theme }) => ({
    fontFamily: 'Segoe UI',
    fontSize: 20,
    fontWeight: 'bold'
}));

const WarningBodyHeader = styled(Typography)(({ theme }) => ({
    fontFamily: 'Helvetica',
    fontSize: 17,
    fontWeight: 'bold'
}));

const WarningBody = styled(Typography)(({ theme }) => ({
    fontFamily: 'Helvetica',
    fontSize: 17,
    fontWeight: 500
}));

export default function Priority(
    {
        priorityButtons,
        handlePriorityButtons,
        showRestrictions,
        showMagicRestrictions
        /*handleMetatypeButton,
        metatypeButton,
        handleAttributeButton, 
        attributeButton,
        handleSkillButton, 
        skillButton,
        handleMagicButton, 
        magicButton,
        handleResourceButton, 
        resourceButton,
        showRestrictions, 
        showMagicRestrictions*/}) 
{


    const [openMetatypes, setMetatypesOpen] = React.useState(false);
    const handleOpenMetatypes = (value) => {
        setMetatypesOpen(value)
    }
    const [openAttributes, setAttributesOpen] = React.useState(false);
    const handleOpenAttributes = (value) => {
        setAttributesOpen(value)
    }
    const [openSkills, setSkillsOpen] = React.useState(false);
    const handleOpenSkills = (value) => {
        setSkillsOpen(value)
    }
    const [openMagic, setMagicOpen] = React.useState(false);
    const handleOpenMagic = (value) => {
        setMagicOpen(value)
    }
    const [openResources, setResourcesOpen] = React.useState(false);
    const handleOpenResources = (value) => {
        setResourcesOpen(value)
    }

    // This section handles magic category warning text to simplify amount of code in priorityRows
    const AwakenedOrEmerged = [
        [
            'Magician, Mystic Adept, Adept: ',
            '4 Magic',
            'Aspected Magician: ',
            '5 Magic',
            'Technomancer: ',
            '4 Resonance'
        ],
        [
            'Magician, Mystic Adept, Adept: ',
            '3 Magic',
            'Aspected Magician: ',
            '4 Magic',
            'Technomancer: ',
            '3 Resonance'
        ],
        [
            'Magician, Mystic Adept, Adept: ',
            '2 Magic',
            'Aspected Magician: ',
            '3 Magic',
            'Technomancer: ',
            '2 Resonance'
        ],
        [
            'Magician, Mystic Adept, Adept: ',
            '1 Magic',
            'Aspected Magician: ',
            '2 Magic',
            'Technomancer: ',
            '1 Resonance'
        ],
        [
            '',
            'No Magic or Resonance',
            '',
            '',
            '',
            ''
        ]
    ]
    // This section handles all other mapped information in priorityRows
    const priorities = [
        {
            name: 'Metatype',
            idA: 0,
            A: 13,
            idB: 1,
            B: 11,
            idC: 2,
            C: 9,
            idD: 3,
            D: 4,
            idE: 4,
            E: 1,
            state: priorityButtons.metatype,
            change: value => handlePriorityButtons('metatype', parseInt(value)),
            collapse: openMetatypes,
            set: handleOpenMetatypes
        },
        {
            name: -2,
            title: 'Restricted From the Following Metatypes',
            A: 'Elf, Dalakitnon, Dryad, Nocturna, Wakyambi, Xaipiri Thëpë, Human, Nartaki, Valkyrie',
            B: 'Human, Nartaki',
            C: 'No restrictions',
            D: 'No restrictions',
            E: 'Menehune, Wakyambi, Nartaki, Valkyrie, Satyr, Fomorian, Centaurs, Merrow, Naga, Pixie, Sasquatch',
            state: priorityButtons.metatype,
            showState: showRestrictions
        },
        {
            name: -1,
            collapse: openMetatypes,
            desc: 'Metatypes',
        },
        {
            name: 'Attributes',
            idA: 0,
            A: 24,
            idB: 1,
            B: 16,
            idC: 2,
            C: 12,
            idD: 3,
            D: 8,
            idE: 4,
            E: 2,
            state: priorityButtons.attribute,
            change: value => handlePriorityButtons('attribute', parseInt(value)),
            collapse: openAttributes,
            set: handleOpenAttributes
        },
        {
            name: -1,
            collapse: openAttributes,
            desc: 'Attributes',
        },
        {
            name: 'Skills',
            idA: 0,
            A: 32,
            idB: 1,
            B: 24,
            idC: 2,
            C: 20,
            idD: 3,
            D: 16,
            idE: 4,
            E: 10,
            state: priorityButtons.skill,
            change: value => handlePriorityButtons('skill', parseInt(value)),
            collapse: openSkills,
            set: handleOpenSkills
        },
        {
            name: -1,
            collapse: openSkills,
            desc: 'Skills',
        },
        {
            name: 'Magic or Resonance',
            idA: 0,
            A: 'Not Mundane',
            idB: 1,
            B: 'Not Mundane',
            idC: 2,
            C: 'Not Mundane',
            idD: 3,
            D: 'Not Mundane',
            idE: 4,
            E: 'Mundane',
            state: priorityButtons.magic,
            change: value => handlePriorityButtons('magic', parseInt(value)),
            collapse: openMagic,
            set: handleOpenMagic
        },
        {
            name: -3,
            title: 'Magic or Resonance',
            showState: showMagicRestrictions
        },
        {
            name: -1,
            collapse: openMagic,
            desc: 'Magic or Resonance',
        },
        {
            name: 'Resources',
            idA: 0,
            A: '450,000 ¥',
            idB: 1,
            B: '275,000 ¥',
            idC: 2,
            C: '150,000 ¥',
            idD: 3,
            D: '50,000 ¥',
            idE: 4,
            E: '8,000 ¥',
            state: priorityButtons.resource,
            change: value => handlePriorityButtons('resource', parseInt(value)),
            collapse: openResources,
            set: handleOpenResources
        },
        {
            name: -1,
            collapse: openResources,
            desc: 'Resources',
        },       
    ]

    const priorityRows = priorities.map(priorities => {
        return priorities.name !== -1 && priorities.name !== -2 && priorities.name !== -3 ?
            // This section handles rows with buttons for each category which has no numbered name ID
            <TableRow sx={{ '& > *': { borderBottom: 'unset'}}} hover>
                <TableCell sx={{minWidth: 35}}>
                    <IconButton aria-label='expand row' size='small' onClick={() => priorities.set(!priorities.collapse)}>
                        {priorities.collapse ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <PriorityCell align='center'>
                    {priorities.name}
                </PriorityCell>
                <BodyCell>
                    <Button 
                        value={priorities.idA} 
                        onClick={e => priorities.change(e.target.value)} 
                        color={(priorities.state == 0) ? 'secondary' : 'primary'} 
                        fullWidth 
                        variant='contained'
                        sx={{height: 80}}
                    >
                        {priorities.A}
                    </Button>
                </BodyCell>
                <BodyCell>
                    <Button 
                        value={priorities.idB} 
                        onClick={e => priorities.change(e.target.value)} 
                        color={(priorities.state == 1) ? 'secondary' : 'primary'} 
                        fullWidth 
                        variant='contained'
                        sx={{height: 80}}
                    >
                        {priorities.B}
                    </Button>
                </BodyCell>
                <BodyCell>
                    <Button 
                        value={priorities.idC} 
                        onClick={e => priorities.change(e.target.value)} 
                        color={(priorities.state == 2) ? 'secondary' : 'primary'} 
                        fullWidth 
                        variant='contained'
                        sx={{height: 80}}
                    >
                        {priorities.C}
                    </Button>
                </BodyCell>
                <BodyCell>
                    <Button 
                        value={priorities.idD} 
                        onClick={e => priorities.change(e.target.value)} 
                        color={(priorities.state == 3) ? 'secondary' : 'primary'} 
                        fullWidth 
                        variant='contained'
                        sx={{height: 80}}
                    >
                        {priorities.D}
                    </Button>
                </BodyCell>
                <BodyCell>
                    <Button 
                        value={priorities.idE} 
                        onClick={e => priorities.change(e.target.value)} 
                        color={(priorities.state == 4) ? 'secondary' : 'primary'} 
                        fullWidth 
                        variant='contained'
                        sx={{height: 80}}
                    >
                        {priorities.E}
                    </Button>
                </BodyCell>
            </TableRow>
        :
            priorities.name !== -2 && priorities.name !== -3 ?
                // This section handles the collapsed rows for each category and has a numbered name ID of -1
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                        <Collapse in={priorities.collapse} timeout='auto' unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant='h6' gutterBottom component='div'>
                                    {priorities.desc}
                                </Typography>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            :
                priorities.name !== -3 ?
                    // This section handles the metatype category warning on what races are disabled and has a numbered name ID of -2
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'}}} hover>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                            <Collapse in={priorities.showState} orientation='vertical' timeout={{enter: 500, exit: 1000}} unmountOnExit>       
                                <Box sx={{ margin: 1 }}>
                                    <WarningHeader align='center' sx={{marginBottom: 1}}>
                                        {priorities.title}
                                    </WarningHeader>
                                    <WarningBody align='center'>
                                        {
                                            priorities.state == 0 ?
                                                priorities.A
                                            :
                                            priorities.state == 1 ?
                                                priorities.B
                                            :
                                            priorities.state == 2 ?
                                                priorities.C
                                            :
                                            priorities.state == 3 ?
                                                priorities.D
                                            :
                                                priorities.E
                                        }
                                    </WarningBody>
                                </Box>
                            </Collapse>
                        </TableCell>
                    </TableRow>
                :
                    // This section handles the magic category warning on what magic or resonance points will be available and has a numbered name ID of -3
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'}}} hover>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                            <Collapse in={priorities.showState} orientation='vertical' timeout={{enter: 500, exit: 1000}} unmountOnExit>       
                                <Box container align='center' sx={{ margin: 1 }}>
                                    <WarningHeader sx={{marginBottom: 1}}>
                                        {priorities.title}
                                    </WarningHeader>
                                    <WarningBody>
                                        <WarningBodyHeader display="inline">{AwakenedOrEmerged[priorityButtons.magic][0]}</WarningBodyHeader>{AwakenedOrEmerged[priorityButtons.magic][1]}
                                        <br />
                                        <WarningBodyHeader display="inline">{AwakenedOrEmerged[priorityButtons.magic][2]}</WarningBodyHeader>{AwakenedOrEmerged[priorityButtons.magic][3]}
                                        <br />
                                        <WarningBodyHeader display="inline">{AwakenedOrEmerged[priorityButtons.magic][4]}</WarningBodyHeader>{AwakenedOrEmerged[priorityButtons.magic][5]}
                                    </WarningBody>
                                </Box>
                            </Collapse>
                        </TableCell>
                    </TableRow>
    });

    return (
    <TableGrid xs={12} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
        <Item>
            <Table>
                <TableHead>
                    <TableRow sx={{height: 55}}>
                        <HeaderCell sx={{width: '5%'}}/>
                        <HeaderCell sx={{width: '20%'}} align='center'>
                            Priority
                        </HeaderCell>
                        <HeaderCell sx={{width: '15%'}} align='center'>
                            A
                        </HeaderCell>
                        <HeaderCell sx={{width: '15%'}} align='center'>
                            B
                        </HeaderCell>
                        <HeaderCell sx={{width: '15%'}} align='center'>
                            C
                        </HeaderCell>
                        <HeaderCell sx={{width: '15%'}} align='center'>
                            D
                        </HeaderCell>
                        <HeaderCell sx={{width: '15%'}} align='center'>
                            E
                        </HeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {priorityRows}
                </TableBody>
            </Table>
        </Item>
    </TableGrid>
    );
}