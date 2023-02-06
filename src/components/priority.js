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
const RestrictedRaces = [
    'Elf, Dalakitnon, Dryad, Nocturna, Wakyambi, Xaipiri Thëpë, Human, Nartaki, Valkyrie',
    'Human, Nartaki',
    'No restrictions',
    'No restrictions',
    'Menehune, Wakyambi, Nartaki, Valkyrie, Satyr, Fomorian, Centaurs, Merrow, Naga, Pixie, Sasquatch'
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
const Magic = [
    'Not Mundane',
    'Not Mundane',
    'Not Mundane',
    'Not Mundane',
    'Mundane'
]
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

export default function Priority({powerLevelSetting, ruleSetSetting}) {

    const [openMetatypes, setMetatypesOpen] = React.useState(false);
    const [openAttributes, setAttributesOpen] = React.useState(false);
    const [openSkills, setSkillsOpen] = React.useState(false);
    const [openMagic, setMagicOpen] = React.useState(false);
    const [openResources, setResourcesOpen] = React.useState(false);
    const [showMagicRestrictions, setMagicRestrictions] = React.useState(true);
    const [showRestrictions, setRestrictionsDisplay] = React.useState(true);

    const [metatypeButton, setMetatypeButton] = React.useState(0);
    useEffect(() => {
        console.log(
            'metatype:',
            metatypeButton
        )
    }, [metatypeButton])
    const handleMetatypeButton = (value) => {
        if(value == 2 || value == 3) {
            setRestrictionsDisplay(false)
        }
        else {
            setRestrictionsDisplay(true)
        }
        handlePriorityButtonSelections(powerLevelSetting, ruleSetSetting, metatypeButton, attributeButton, skillButton, magicButton, resourceButton, value, 0)
        setMetatypeButton(value)
    }

    const [attributeButton, setAttributeButton] = React.useState(1);
    useEffect(() => {
        console.log(
            'attribute:',
            attributeButton
        )
    }, [attributeButton])
    const handleAttributeButton = (value) => {
        handlePriorityButtonSelections(powerLevelSetting, ruleSetSetting, metatypeButton, attributeButton, skillButton, magicButton, resourceButton, value, 1)
        setAttributeButton(value)
    }

    const [skillButton, setSkillButton] = React.useState(2);
    useEffect(() => {
        console.log(
            'skill:',
            skillButton
        )
    }, [skillButton])
    const handleSkillButton = (value) => {
        handlePriorityButtonSelections(powerLevelSetting, ruleSetSetting, metatypeButton, attributeButton, skillButton, magicButton, resourceButton, value, 2)
        setSkillButton(value)
    }

    const [magicButton, setMagicButton] = React.useState(3);
    useEffect(() => {
        console.log(
            'magic:',
            magicButton
        )
    }, [magicButton])
    const handleMagicButton = (value) => {
        if(value == 4) {
            setMagicRestrictions(false)
        }
        else {
            setMagicRestrictions(true)
        }
        handlePriorityButtonSelections(powerLevelSetting, ruleSetSetting, metatypeButton, attributeButton, skillButton, magicButton, resourceButton, value, 3)
        setMagicButton(value)
    }

    const [resourceButton, setResourceButton] = React.useState(4);
    useEffect(() => {
        console.log(
            'resource:',
            resourceButton
        )
    }, [resourceButton])
    const handleResourceButton = (value) => {
        handlePriorityButtonSelections(powerLevelSetting, ruleSetSetting, metatypeButton, attributeButton, skillButton, magicButton, resourceButton, value, 4)
        setResourceButton(value)
    }

    function handlePriorityButtonSelections(powerLevel, ruleset, metatype, attribute, skill, magic, resource, val, functionFlag) {
        /*console.log(
            'handlePriorityButtonSelections',
            powerLevel, 
            ruleset, 
            metatype, 
            attribute,
            val,
            functionFlag
        )*/
        if(ruleset == 0) {
            if(powerLevel == 1) {
                //console.log('val:', val, ' funcFlag', functionFlag)
                switch(functionFlag) {
                    case 0:
                        //console.log('val:', val, ' attribute', attribute)
                        if(val == attribute) {
                            setAttributeButton(metatype)
                        }
                        if(val == skill) {
                            setSkillButton(metatype)
                        }
                        if(val == magic) {
                            setMagicButton(metatype)
                        }
                        if(val == resource) {
                            setResourceButton(metatype)
                        }
                        break;
                    case 1:
                        //console.log('val:', val, ' metatype', metatype)
                        if(val == metatype) {
                            setMetatypeButton(attribute)
                        }
                        if(val == skill) {
                            setSkillButton(attribute)
                        }
                        if(val == magic) {
                            setMagicButton(attribute)
                        }
                        if(val == resource) {
                            setResourceButton(attribute)
                        }
                        break;
                    case 2:
                        //console.log('val:', val, ' skill', skill)
                        if(val == metatype) {
                            setMetatypeButton(skill)
                        }
                        if(val == attribute) {
                            setAttributeButton(skill)
                        }
                        if(val == magic) {
                            setMagicButton(skill)
                        }
                        if(val == resource) {
                            setResourceButton(skill)
                        }
                        break;
                    case 3:
                        //console.log('val:', val, ' magic', magic)
                        if(val == metatype) {
                            setMetatypeButton(magic)
                        }
                        if(val == attribute) {
                            setAttributeButton(magic)
                        }
                        if(val == skill) {
                            setSkillButton(magic)
                        }
                        if(val == resource) {
                            setResourceButton(magic)
                        }
                        break;
                    case 4:
                        //console.log('val:', val, ' resource', resource)
                        if(val == metatype) {
                            setMetatypeButton(resource)
                        }
                        if(val == attribute) {
                            setAttributeButton(resource)
                        }
                        if(val == skill) {
                            setSkillButton(resource)
                        }
                        if(val == magic) {
                            setMagicButton(resource)
                        }
                        break;
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
                                sx={{height: 80}}
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
                                sx={{height: 80}}
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
                                sx={{height: 80}}
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
                                sx={{height: 80}}
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
                                sx={{height: 80}}
                            >
                                {Metatype[4]}
                            </Button>
                        </BodyCell>
                    </TableRow>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'}}} hover>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                            <Collapse in={showRestrictions} orientation='vertical' timeout={{enter: 500, exit: 1000}} unmountOnExit>       
                                <Box sx={{ margin: 1 }}>
                                    <WarningHeader align='center' sx={{marginBottom: 1}}>
                                        Restricted From the Following Metatypes                                        
                                    </WarningHeader>
                                    <WarningBody align='center'>
                                        {RestrictedRaces[metatypeButton]}
                                    </WarningBody>
                                </Box>
                            </Collapse>
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
                                sx={{height: 80}}
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
                                sx={{height: 80}}
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
                                sx={{height: 80}}
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
                                sx={{height: 80}}
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
                                sx={{height: 80}}
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
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'}}} hover>
                        <TableCell sx={{minWidth: 35}}>
                            <IconButton aria-label='expand row' size='small' onClick={() => setSkillsOpen(!openSkills)}>
                                {openSkills ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </TableCell>
                        <PriorityCell align='center'>
                            Skills
                        </PriorityCell>
                        <BodyCell>
                            <Button 
                                value={0} 
                                onClick={e => handleSkillButton(e.target.value)} 
                                color={(skillButton == 0) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                                sx={{height: 80}}
                            >
                                {Skills[0]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={1} 
                                onClick={e => handleSkillButton(e.target.value)} 
                                color={(skillButton == 1) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                                sx={{height: 80}}
                            >
                                {Skills[1]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={2} 
                                onClick={e => handleSkillButton(e.target.value)} 
                                color={(skillButton == 2) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                                sx={{height: 80}}
                            >
                                {Skills[2]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={3} 
                                onClick={e => handleSkillButton(e.target.value)} 
                                color={(skillButton == 3) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                                sx={{height: 80}}
                            >
                                {Skills[3]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={4} 
                                onClick={e => handleSkillButton(e.target.value)} 
                                color={(skillButton == 4) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                                sx={{height: 80}}
                            >
                                {Skills[4]}
                            </Button>
                        </BodyCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                            <Collapse in={openSkills} timeout='auto' unmountOnExit>
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
                            <IconButton aria-label='expand row' size='small' onClick={() => setMagicOpen(!openMagic)}>
                                {openMagic ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </TableCell>
                        <PriorityCell align='center'>
                            Metatype
                        </PriorityCell>
                        <BodyCell>
                            <Button 
                                value={0} 
                                onClick={e => handleMagicButton(e.target.value)} 
                                color={(magicButton == 0) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                                sx={{height: 80}}
                            >
                                {Magic[0]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={1} 
                                onClick={e => handleMagicButton(e.target.value)} 
                                color={(magicButton == 1) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                                sx={{height: 80}}
                            >
                                {Magic[1]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={2} 
                                onClick={e => handleMagicButton(e.target.value)} 
                                color={(magicButton == 2) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                                sx={{height: 80}}
                            >
                                {Magic[2]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={3} 
                                onClick={e => handleMagicButton(e.target.value)} 
                                color={(magicButton == 3) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                                sx={{height: 80}}
                            >
                                {Magic[3]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={4} 
                                onClick={e => handleMagicButton(e.target.value)} 
                                color={(magicButton == 4) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                                sx={{height: 80}}
                            >
                                {Magic[4]}
                            </Button>
                        </BodyCell>
                    </TableRow>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'}}} hover>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                            <Collapse in={showMagicRestrictions} orientation='vertical' timeout={{enter: 500, exit: 1000}} unmountOnExit>       
                                <Box container align='center' sx={{ margin: 1 }}>
                                    <WarningHeader sx={{marginBottom: 1}}>
                                        Magic or Resonance
                                    </WarningHeader>
                                    <WarningBody>
                                        <WarningBodyHeader display='inline'>{AwakenedOrEmerged[magicButton][0]}</WarningBodyHeader>{AwakenedOrEmerged[magicButton][1]}
                                        <br/>
                                        <WarningBodyHeader display='inline'>{AwakenedOrEmerged[magicButton][2]}</WarningBodyHeader>{AwakenedOrEmerged[magicButton][3]}
                                        <br/>
                                        <WarningBodyHeader display='inline'>{AwakenedOrEmerged[magicButton][4]}</WarningBodyHeader>{AwakenedOrEmerged[magicButton][5]}
                                    </WarningBody>
                                </Box>
                            </Collapse>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                            <Collapse in={openMagic} timeout='auto' unmountOnExit>
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
                            <IconButton aria-label='expand row' size='small' onClick={() => setResourcesOpen(!openResources)}>
                                {openResources ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </TableCell>
                        <PriorityCell align='center'>
                            Resources
                        </PriorityCell>
                        <BodyCell>
                            <Button 
                                value={0} 
                                onClick={e => handleResourceButton(e.target.value)} 
                                color={(resourceButton == 0) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                                sx={{marginTop: .1, height: 80}}
                            >
                                {Resources[0]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={1} 
                                onClick={e => handleResourceButton(e.target.value)} 
                                color={(resourceButton == 1) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                                sx={{marginTop: .1, height: 80}}
                            >
                                {Resources[1]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={2} 
                                onClick={e => handleResourceButton(e.target.value)} 
                                color={(resourceButton == 2) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                                sx={{marginTop: .1, height: 80}}
                            >
                                {Resources[2]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={3} 
                                onClick={e => handleResourceButton(e.target.value)} 
                                color={(resourceButton == 3) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                                sx={{marginTop: .1, height: 80}}
                            >
                                {Resources[3]}
                            </Button>
                        </BodyCell>
                        <BodyCell>
                            <Button 
                                value={4} 
                                onClick={e => handleResourceButton(e.target.value)} 
                                color={(resourceButton == 4) ? 'secondary' : 'primary'} 
                                fullWidth 
                                variant='contained'
                                sx={{marginTop: .1, height: 80}}
                            >
                                {Resources[4]}
                            </Button>
                        </BodyCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                            <Collapse in={openResources} timeout='auto' unmountOnExit>
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