import React, { useEffect, useState } from 'react';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import Divider from '@mui/joy/Divider';
import {
    List ,
    ListItem,
    ListItemDecorator,
    ListItemButton
} from '@mui/joy/';
import {
    Button,
    ButtonGroup,
    Select,
    FormControl,
    Typography,
    Option,
    Table,
    Box,
    IconButton
} from '@mui/joy/'
import { styled } from '@mui/joy/styles';
import 'material-symbols';
import axios from 'axios';
import { TrackChangesRounded } from '@mui/icons-material';

axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

const headerBackgroundColor = '#393939';
const headerFontColor = '#ffffff';
const bodyBackgroundColor = '#e1e1da'
const collapseBackgroundColor = '#ecebe6'

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
}));

//Priorities (Child Component)
const headerBackground = '#424242'

const TableGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto'
}));
/*const HeaderCell = styled(TableCell)(({ theme }) => ({
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
}));*/

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

export default function Character() {

    const [page, setPage] = React.useState(0);
    const handleSetPage = (value) => {
        setPage(value)
    }

    // Settings (Parent Component)
    const powerLevel = [
        'Street-Level Runner', 'Standard Runner', 'Elite Runner'
    ]    
    const creatorType = [
        'Priority System', ['Sum-to-Eight System', 'Sum-to-Ten System', 'Sum-to-Twelve System'], 'Point Buy System', 'Life Path System'
    ]
    const powerLevelDescription = [
            'This Power Level covers characters like gangers, wage slaves, rent-a-cops, and other low level members of society. \
            These are people who are at the bottom, or have recently fallen from the top echelons of society. \
            Alternatively, this Power Level might represent younger characterse that have less experience and fewer resources.',

            'This Power Level covers standard runners that are fairly new to shadowrunning. \
            These are shadowrunners that might have already done a few shadowruns or are looking to start their first shadowrun. \
            They have already met a few decent contacts and acrued enough resources to ensure they can fund the lifestyle and equipment they need for shadowrunning.',

            'This Power Level covers characters like high-level corporate operatives, high-level celebrities, powerful executives, and other high level members of society. \
            These people have experience, power, wealth, and the opportunities to put them to use.'
    ]
    const creatorTypeDescription = [
        [
            <body>
            <p>
            The Street-Level Priority System is a modified version of the Standard Runner Priority System.
            You will select a letter for each of the five priorities, which are Adjustment Points, Attributes, Skills, Magic, and Resources.
            Each letter will offer you a different amount of points in the assigned priority for character creation.
            The letter A offers you the most amount of points, whereas the letter E offers the least amount of points.
            Some priorities will restrict you from performing magic or selecting certain metatypes if they are assigned a certain letter.
            </p>
            <li>One priority may be assigned the letter B</li>
            <li>Two priorities may be assigned the letter C</li>
            <li>One priority may be assigned the letter D</li>
            <li>One priority may be assigned the letter E</li>
            <br />
            <br />
            </body>,
            <body>
            <p>
            The Standard Priority System is the standard system for character creation in Shadowrun.
            In this system you will select a letter for each of the five priorities, which are Adjustment Points, Attributes, Skills, Magic, and Resources.
            Each letter will offer you a different amount of points in the assigned priority for character creation.
            The letter A offers you the most amount of points, whereas the letter E offers the least amount of points.
            Some priorities will restrict you from performing magic or selecting certain metatypes if they are assigned a certain letter.
            </p>
            <li>One priority may be assigned the letter A</li>
            <li>One priority may be assigned the letter B</li>
            <li>One priority may be assigned the letter C</li>
            <li>One priority may be assigned the letter D</li>
            <li>One priority may be assigned the letter E</li>
            <br />
            </body>,
            <body>
            <p>
            The Elite Priority System is a modified version of the Standard Runner Priority System.
            In this system you will select a letter for each of the five priorities, which are Adjustment Points, Attributes, Skills, Magic, and Resources.
            Each letter will offer you a different amount of points in the assigned priority for character creation.
            The letter A offers you the most amount of points, whereas the letter E offers the least amount of points.
            Some priorities will restrict you from performing magic or selecting certain metatypes if they are assigned a certain letter.
            </p>
            <li>One priority may be assigned the letter A</li>
            <li>Two priority may be assigned the letter B</li>
            <li>One priorities may be assigned the letter C</li>
            <li>One priority may be assigned the letter D</li>
            <br />
            <br />
            </body>,
        ],
        ['hey', 'yo', 'bub'],
        ['bye', 'cya', 'brb'],
        ['goodbye', 'gotta get some milk', 'lemme get some cigs']
    ]
    const [powerState, setPowerState] = React.useState(1); //handlePowerState
    const [buttonState, setButtonState] = React.useState(0); //handleButtonState
    useEffect(() => {
        console.log({
            powerState
        })
    }, [powerState])
    const handlePowerState = (event, value) => {
        setPowerState(value);
    };
    const handleButtonState = (value) => setButtonState(value);
    // --------------------------------

    //Priorities (Parent Component)
    // This block handles the information needed for priority.js
    // This block handles storing the state of the priority table to be
    // used by other child components later to ensure adherence to the character creation rules
    // This also contains hooks that handle displaying warnings to the user during the priority table step
    const [priorityButtons, setPriorityButtons] = React.useState({
        metatype: 0,
        attribute: 1,
        skill: 2,
        magic: 3,
        resource: 4
    })
    const [showRestrictions, setRestrictionsDisplay] = React.useState(true);
    const [showMagicRestrictions, setMagicRestrictions] = React.useState(true);
    useEffect(() => {
        //handleDefaultAttributePoints()
        //handleDefaultSkillPoints()
        //handleDefaultResourcePoints()
        //handleDefaultMysticAdept()
        console.log(
            priorityButtons,
            showRestrictions,
            showMagicRestrictions
        )
    }, [priorityButtons])

    const handlePriorityButtons = (name, value) => {
        switch(name) {
            case 'metatype': 
                setRestrictionsDisplay(!(value === 2 || value === 3));
                break;
            case 'magic':
                if(value == 4) {
                    setMagicRestrictions(false)
                }
                else {
                    setMagicRestrictions(true)
                }
                break;
            default:
                break;
        }
        handlePriorityButtonSelections(value, name)
        setPriorityButtons(prevButtons => ({
            ...prevButtons,
            [name]: parseInt(value)
        }))
    }
    function handlePriorityButtonSelections(val, name) {
        const updateButtons = (buttonName, buttonValue) => {
            if (val === buttonValue) {
                switch(buttonName) {
                    case 'metatype':
                        setRestrictionsDisplay(!(priorityButtons[name] === 2 || priorityButtons[name] === 3));
                        console.log(showRestrictions)
                        break;
                    case 'magic':
                        setMagicRestrictions(priorityButtons[name] !== 4);
                        console.log(showMagicRestrictions)
                        break;
                    default:
                        break;
                }
                setPriorityButtons(prevButtons => ({
                    ...prevButtons,
                    [buttonName]: priorityButtons[name]
                }));
            }
        };
        
        if (buttonState === 0 && powerState === 1) {
            switch (name) {
                case 'metatype':
                    updateButtons('attribute', priorityButtons.attribute);
                    updateButtons('skill', priorityButtons.skill);
                    updateButtons('magic', priorityButtons.magic);
                    updateButtons('resource', priorityButtons.resource);
                    break;
                case 'attribute':
                    updateButtons('metatype', priorityButtons.metatype);
                    updateButtons('skill', priorityButtons.skill);
                    updateButtons('magic', priorityButtons.magic);
                    updateButtons('resource', priorityButtons.resource);
                    break;
                case 'skill':
                    updateButtons('metatype', priorityButtons.metatype);
                    updateButtons('attribute', priorityButtons.attribute);
                    updateButtons('magic', priorityButtons.magic);
                    updateButtons('resource', priorityButtons.resource);
                    break;
                case 'magic':
                    updateButtons('metatype', priorityButtons.metatype);
                    updateButtons('attribute', priorityButtons.attribute);
                    updateButtons('skill', priorityButtons.skill);
                    updateButtons('resource', priorityButtons.resource);
                    break;
                case 'resource':
                    updateButtons('metatype', priorityButtons.metatype);
                    updateButtons('attribute', priorityButtons.attribute);
                    updateButtons('skill', priorityButtons.skill);
                    updateButtons('magic', priorityButtons.magic);
                    break;
            }
        } 
        else if (buttonState === 1) {
            // Handle rules
        }
    }
    //---------------------------------------------------------

    //Priorities (Child Component)
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
        return (priorities.name !== -1 && priorities.name !== -2 && priorities.name !== -3 ?
            // This section handles rows with buttons for each category which has no numbered name ID
            <tr>
                <td style={{textAlign: 'center', width: '20%'}}>
                    {priorities.name}
                </td>
                <td style={{ width: '16%' }}>
                    <Button 
                        value={priorities.idA} 
                        onClick={e => priorities.change(e.target.value)} 
                        color={(priorities.state == 0) ? 'info' : 'primary'} 
                        fullWidth 
                        variant='solid'
                        sx={{height: 80}}
                    >
                        {priorities.A}
                    </Button>
                </td>
                <td style={{ width: '16%' }}>
                    <Button 
                        value={priorities.idB} 
                        onClick={e => priorities.change(e.target.value)} 
                        color={(priorities.state == 1) ? 'info' : 'primary'} 
                        fullWidth 
                        variant='solid'
                        sx={{height: 80}}
                    >
                        {priorities.B}
                    </Button>
                </td>
                <td style={{ width: '16%' }}>
                    <Button 
                        value={priorities.idC} 
                        onClick={e => priorities.change(e.target.value)} 
                        color={(priorities.state == 2) ? 'info' : 'primary'} 
                        fullWidth 
                        variant='solid'
                        sx={{height: 80}}
                    >
                        {priorities.C}
                    </Button>
                </td>
                <td style={{ width: '16%' }}>
                    <Button 
                        value={priorities.idD} 
                        onClick={e => priorities.change(e.target.value)} 
                        color={(priorities.state == 3) ? 'info' : 'primary'} 
                        fullWidth 
                        variant='solid'
                        sx={{height: 80}}
                    >
                        {priorities.D}
                    </Button>
                </td>
                <td style={{ width: '16%' }}>
                    <Button 
                        value={priorities.idE} 
                        onClick={e => priorities.change(e.target.value)} 
                        color={(priorities.state == 4) ? 'info' : 'primary'} 
                        fullWidth 
                        variant='solid'
                        sx={{height: 80}}
                    >
                        {priorities.E}
                    </Button>
                </td>
            </tr>
        :
            null
        );
    });
/*      :
            priorities.name !== -2 && priorities.name !== -3 ?
                // This section handles the collapsed rows for each category and has a numbered name ID of -1
                <tr>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                        <Collapse in={priorities.collapse} timeout='auto' unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant='h6' gutterBottom component='div'>
                                    {priorities.desc}
                                </Typography>
                            </Box>
                        </Collapse>
                    </TableCell>
                </tr>
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
                    </TableRow>*/

    return (
        <Grid container columns={100} sx={{ flexGrow: 1 }}>
            {/* This section handles the sidebar navigation of the various components. */}
            <Grid xs={13} sx={{ bgcolor: "#ecebe6", padding: 1, height: "100vh", borderRight: 1, borderRightColor: '#9EA4A9' }}>
                <List>
                    <ListItem>
                        <ListItemButton disabled>
                            <ListItemDecorator>
                                <span class="material-symbols-sharp">arrow_back</span>
                            </ListItemDecorator>
                            Back
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemButton selected={page === 0 ? true : false} onClick={() => handleSetPage(0)}>
                            <ListItemDecorator>
                                <span class="material-symbols-sharp">settings</span>
                            </ListItemDecorator>
                            Settings
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected={page === 1 ? true : false} onClick={() => handleSetPage(1)}>
                            <ListItemDecorator>
                                <span class="material-symbols-sharp">priority</span>
                            </ListItemDecorator>
                            Priorities
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected={page === 2 ? true : false} onClick={() => handleSetPage(2)}>
                            <ListItemDecorator>
                                <span class="material-symbols-sharp">face_5</span>
                            </ListItemDecorator>
                            Metatype
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemButton selected={page === 3 ? true : false} onClick={() => handleSetPage(3)}>
                            <ListItemDecorator>
                                <span class="material-symbols-sharp">vital_signs</span>
                            </ListItemDecorator>
                            Overview
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected={page === 4 ? true : false} onClick={() => handleSetPage(4)}>
                            <ListItemDecorator>
                                <span class="material-symbols-sharp">school</span>
                            </ListItemDecorator>
                            Skills
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemButton selected={page === 5 ? true : false} onClick={() => handleSetPage(5)}>
                            <ListItemDecorator>
                                <span class="material-symbols-sharp">person</span>
                            </ListItemDecorator>
                            Augmentation
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected={page === 6 ? true : false} onClick={() => handleSetPage(6)}>
                            <ListItemDecorator>
                                <span class="material-symbols-sharp">swords</span>
                            </ListItemDecorator>
                            Combat
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected={page === 7 ? true : false} onClick={() => handleSetPage(7)}>
                            <ListItemDecorator>
                                <span class="material-symbols-sharp">home_repair_service</span>
                            </ListItemDecorator>
                            Equipment
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected={page === 8 ? true : false} onClick={() => handleSetPage(8)}>
                            <ListItemDecorator>
                                <span class="material-symbols-sharp">directions_car</span>
                            </ListItemDecorator>
                            Drones & Vehicles
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected={page === 9 ? true : false} onClick={() => handleSetPage(9)}>
                            <ListItemDecorator>
                                <span class="material-symbols-sharp">home</span>
                            </ListItemDecorator>
                            Living & Contacts
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemButton disabled selected={page === 10 ? true : false} onClick={() => handleSetPage(10)}>
                            <ListItemDecorator>
                                <span class="material-symbols-sharp">save</span>
                            </ListItemDecorator>
                            Save
                        </ListItemButton>
                    </ListItem>
                </List>
            </Grid>
            <Grid xs={87} sx={{ height: "100vh" }}>
                <Grid container columns={100} sx={{ flexGrow: 1, height: "100%" }}>
                    <Grid xs={100} sx={{ bgcolor: "#ecebe6", padding: 1, height: "10vh", borderBottom: 1, borderBottomColor: '#9EA4A9' }}>
                        name
                    </Grid>
                    <Grid container columns={100} sx={{ flexGrow: 1, height: "90vh"}}>
                        {(page === 0) &&
                            <>
                                <Grid xs={40} sx={{ bgcolor: "#e1e1da", padding: 1, height: '100%' }}>
                                    <Item sx={{ height: '100%', boxSizing: 'border-box' }}>
                                        <ButtonGroup orientation='vertical' variant='solid'> 
                                                <FormControl variant='filled' fullWidth={true}>
                                                <Select sx={{marginBottom: 1}} defaultValue={1} label='Power Level' onChange={handlePowerState}>
                                                    <Option value={0}>
                                                        {powerLevel[0]}
                                                    </Option>
                                                    <Option value={1}>
                                                        {powerLevel[1]}
                                                    </Option>
                                                    <Option value={2}>
                                                        {powerLevel[2]}
                                                    </Option>
                                                </Select>
                                                </FormControl>
                                                <Button value={0} onClick={e => handleButtonState(0)} sx={{height: 80}}>
                                                    {creatorType[0]}
                                                </Button>
                                                <Button value={1} onClick={e => handleButtonState(1)} sx={{height: 80}}>
                                                    {creatorType[1][powerState]}
                                                </Button>
                                                <Button value={2} onClick={e => handleButtonState(2)} sx={{height: 80}}>
                                                    {creatorType[2]}
                                                </Button>
                                                <Button value={3} onClick={e => handleButtonState(3)} sx={{height: 80}}>
                                                    {creatorType[3]}
                                                </Button>                                
                                        </ButtonGroup>
                                    </Item>
                                </Grid>
                                <Grid xs={60} sx={{ bgcolor: "#e1e1da", padding: 1, height: '100%' }}>
                                    <Item sx={{ height: '100%', boxSizing: 'border-box' }}>
                                        <Typography
                                            variant='h1'
                                            style={{
                                                fontSize: 36,
                                                fontFamily: 'Segoe UI',
                                                fontWeight: 500
                                            }}
                                            sx={{
                                                paddingLeft: 2,
                                                paddingTop: 2
                                            }}
                                        >
                                            {powerLevel[powerState]}
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            style={{
                                                fontSize: 18,
                                                fontFamily: 'Segoe UI',
                                                fontWeight: 400
                                            }}
                                            sx={{
                                                paddingLeft: 2, 
                                                paddingTop: 2
                                            }}
                                        >
                                            {powerLevelDescription[powerState]}
                                        </Typography>
                                        <Typography
                                            variant='h1'
                                            style={{
                                                fontSize: 36,
                                                fontFamily: 'Segoe UI',
                                                fontWeight: 500
                                            }}
                                            sx={{
                                                paddingLeft: 2,
                                                paddingTop: 4
                                            }}
                                        >
                                            {buttonState == 1 ? creatorType[buttonState][powerState] : creatorType[buttonState]}
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            style={{
                                                fontSize: 18,
                                                fontFamily: 'Segoe UI',
                                                fontWeight: 400
                                            }}
                                            sx={{
                                                paddingLeft: 2, 
                                                paddingTop: 0
                                            }}
                                        >
                                            {creatorTypeDescription[buttonState][powerState]}
                                        </Typography>
                                    </Item>
                                </Grid>
                            </>
                        }
                        {(page === 1) &&
                            <>
                                <Grid xs={80} sx={{ bgcolor: '#e1e1da', padding: 1, height: "100%" }}>
                                    <Item sx={{ boxSizing: 'border-box', height: '100%' }}>
                                        <Table>
                                            <thead>
                                                <tr sx={{height: 55}}>
                                                    <th style={{textAlign: 'center', width: '20%'}}>
                                                        Priority
                                                    </th>
                                                    <th style={{textAlign: 'center', width: '16%'}}>
                                                        A
                                                    </th>
                                                    <th style={{textAlign: 'center', width: '16%'}}>
                                                        B
                                                    </th>
                                                    <th style={{textAlign: 'center', width: '16%'}}>
                                                        C
                                                    </th>
                                                    <th style={{textAlign: 'center', width: '16%'}}>
                                                        D
                                                    </th>
                                                    <th style={{textAlign: 'center', width: '16%'}}>
                                                        E
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {priorityRows}
                                            </tbody>
                                        </Table>
                                    </Item>
                                </Grid>
                                <Grid xs={20} sx={{ bgcolor: '#e1e1da', padding: 1, height: "100%" }}>
                                    <Item sx={{ boxSizing: 'border-box', height: '100%' }}>
                                        Info
                                    </Item>
                                </Grid>
                            </>
                        }
                        {(page === 3) &&
                        <>
                            <Grid xs={80} sx={{ bgcolor: "#e1e1da", padding: 1, height: "100%" }}>
                                <Grid container columns={100} spacing={2} sx={{ flexGrow: 1 }}>
                                    <Grid xs={100}>
                                        <Item>
                                            char
                                        </Item>
                                    </Grid>
                                    <Grid xs={65}>
                                        <Item>
                                            abil
                                        </Item>
                                    </Grid>
                                    <Grid xs={35}>
                                        <Item>
                                            qual
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid xs={20} sx={{ bgcolor: "#ecebe6", padding: 1, height: "100%", borderLeft: 1, borderLeftColor: '#9EA4A9' }}>
                                desc
                            </Grid>
                        </>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
