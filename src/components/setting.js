import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, ButtonGroup } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { Select, MenuItem, InputLabel } from '@mui/material';
import { grey, deepPurple } from '@mui/material/colors';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme, styled } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Priority from './priority.js';
import Metatype from './metatype.js';
import MetatypeDescription from './metatype_desc.js';

const headerBackground = grey[800];
const subHeaderBackground = grey[400];
const selectionBackground = grey[300];
const pointColor = deepPurple['A700'];  
const pointColors = deepPurple[700];  

const Item = styled(Paper)(({ theme }) => ({
    height: '100%',
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

export default function Setting() {
    const progressTheme = useTheme();

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

    {/* This section handles the power level system value for passing later.
        This section also handles immediate updating for the select menu. */}
    const [powerState, setPowerState] = React.useState(1);
    useEffect(() => {
        console.log({
            powerState
        })
    }, [powerState])
    const handlePowerState = (value) => {
        setPowerState(value)
    }
    {/* end section */}

    {/* This section handles the character creation system value for passing later.
        This section also handles immediate updating for the buttons. */}
    const [buttonState, setButtonState] = React.useState(0);
    useEffect(() => {
        handleButtonColor(buttonState)
        console.log({
            buttonState,
            buttonColor1,
            buttonColor2,
            buttonColor3,
            buttonColor4,
        })
    }, [buttonState])
    const handleButtonState = (value) => {
        setButtonState(value)
    }
    {/* end section */}

    {/* This section handles the selection color of the system buttons*/}
    const [buttonColor1, setButtonColor1] = React.useState(true);
    const [buttonColor2, setButtonColor2] = React.useState(false);
    const [buttonColor3, setButtonColor3] = React.useState(false);
    const [buttonColor4, setButtonColor4] = React.useState(false);
    function handleButtonColor(bState) {
        if (bState == 0) {
            setButtonColor1(true)
            setButtonColor2(false)
            setButtonColor3(false)
            setButtonColor4(false)
        }
        else if (bState == 1) {
            setButtonColor1(false)
            setButtonColor2(true)
            setButtonColor3(false)
            setButtonColor4(false)
        }
        else if (bState == 2) {
            setButtonColor1(false)
            setButtonColor2(false)
            setButtonColor3(true)
            setButtonColor4(false)
        }
        else if (bState == 3) {
            setButtonColor1(false)
            setButtonColor2(false)
            setButtonColor3(false)
            setButtonColor4(true)
        }
        else {
            setButtonColor1(false)
            setButtonColor2(false)
            setButtonColor3(false)
            setButtonColor4(false)
        }

    }
    {/* end section */}

    const [activeStep, setActiveStep] = React.useState(0);
    useEffect(() => {
        console.log({
            activeStep
        })
    }, [activeStep])
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

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
        handlePriorityButtonSelections(powerState, buttonState, metatypeButton, attributeButton, skillButton, magicButton, resourceButton, value, 0)
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
        handlePriorityButtonSelections(powerState, buttonState, metatypeButton, attributeButton, skillButton, magicButton, resourceButton, value, 1)
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
        handlePriorityButtonSelections(powerState, buttonState, metatypeButton, attributeButton, skillButton, magicButton, resourceButton, value, 2)
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
        handlePriorityButtonSelections(powerState, buttonState, metatypeButton, attributeButton, skillButton, magicButton, resourceButton, value, 3)
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
        handlePriorityButtonSelections(powerState, buttonState, metatypeButton, attributeButton, skillButton, magicButton, resourceButton, value, 4)
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
                            if(metatype != 4) {
                                setMagicRestrictions(true)
                            }
                            else {
                                setMagicRestrictions(false)
                            }
                        }
                        if(val == resource) {
                            setResourceButton(metatype)
                        }
                        break;
                    case 1:
                        //console.log('val:', val, ' metatype', metatype)
                        if(val == metatype) {
                            setMetatypeButton(attribute)
                            if(attribute != 2 && attribute != 3) {
                                setRestrictionsDisplay(true)
                            }
                            else {
                                setRestrictionsDisplay(false)
                            }
                        }
                        if(val == skill) {
                            setSkillButton(attribute)
                        }
                        if(val == magic) {
                            setMagicButton(attribute)
                            if(attribute != 4) {
                                setMagicRestrictions(true)
                            }
                            else {
                                setMagicRestrictions(false)
                            }
                        }
                        if(val == resource) {
                            setResourceButton(attribute)
                        }
                        break;
                    case 2:
                        //console.log('val:', val, ' skill', skill)
                        if(val == metatype) {
                            setMetatypeButton(skill)
                            if(skill != 2 && skill != 3) {
                                setRestrictionsDisplay(true)
                            }
                            else {
                                setRestrictionsDisplay(false)
                            }
                        }
                        if(val == attribute) {
                            setAttributeButton(skill)
                        }
                        if(val == magic) {
                            setMagicButton(skill)
                            if(skill != 4) {
                                setMagicRestrictions(true)
                            }
                            else {
                                setMagicRestrictions(false)
                            }
                        }
                        if(val == resource) {
                            setResourceButton(skill)
                        }
                        break;
                    case 3:
                        //console.log('val:', val, ' magic', magic)
                        if(val == metatype) {
                            setMetatypeButton(magic)
                            if(magic != 2 && magic != 3) {
                                setRestrictionsDisplay(true)
                            }
                            else {
                                setRestrictionsDisplay(false)
                            }
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
                            if(resource != 2 && resource != 3) {
                                setRestrictionsDisplay(true)
                            }
                            else {
                                setRestrictionsDisplay(false)
                            }
                        }
                        if(val == attribute) {
                            setAttributeButton(resource)
                        }
                        if(val == skill) {
                            setSkillButton(resource)
                        }
                        if(val == magic) {
                            setMagicButton(resource)
                            if(resource != 4) {
                                setMagicRestrictions(true)
                            }
                            else {
                                setMagicRestrictions(false)
                            }
                        }
                        break;
                }
            }
        }
        else if (ruleset == 1) {

        }
    }
    
    const [showMagicRestrictions, setMagicRestrictions] = React.useState(true);
    const [showRestrictions, setRestrictionsDisplay] = React.useState(true);

    const [metatypeState, setMetatypeState] = React.useState('Troll');
    useEffect(() => {
        console.log(
            'metatype chosen:',
            metatypeState
        )
    }, [metatypeState])
    const handleMetatypeState = (value) => () => {
        setMetatypeState(value)
    }

    return (
        <Box sx={{flexGrow: 1, margin: 'auto', maxWidth: 1350, bgcolor: subHeaderBackground, padding: 1}}>
            <Grid container spacing={2}>
                {activeStep == 0 && 
                    <Grid xs={5} sm={3} md={2.5} lg={2.5} xl={2.5} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
                        <Item>
                            <ButtonGroup orientation='vertical' variant='contained' fullWidth={true} sx={{bgcolor: selectionBackground}}> 
                                    <FormControl variant='filled' fullWidth={true}>
                                        <InputLabel>Power Level</InputLabel>
                                    <Select sx={{marginBottom: 1}} defaultValue={1} label='Power Level' onChange={e => handlePowerState(e.target.value)}>
                                        <MenuItem value={0}>
                                            {powerLevel[0]}
                                        </MenuItem>
                                        <MenuItem value={1}>
                                            {powerLevel[1]}
                                        </MenuItem>
                                        <MenuItem value={2}>
                                            {powerLevel[2]}
                                        </MenuItem>
                                    </Select>
                                    </FormControl>
                                    <Button value={0} onClick={e => handleButtonState(e.target.value)} variant='contained' sx={{height: 80}} color={buttonColor1 ? 'secondary' : 'primary'}>
                                        {creatorType[0]}
                                    </Button>
                                    <Button value={1} onClick={e => handleButtonState(e.target.value)} variant='contained' sx={{height: 80}} color={buttonColor2 ? 'secondary' : 'primary'}>
                                        {creatorType[1][powerState]}
                                    </Button>
                                    <Button value={2} onClick={e => handleButtonState(e.target.value)} variant='contained' sx={{height: 80}} color={buttonColor3 ? 'secondary' : 'primary'}>
                                        {creatorType[2]}
                                    </Button>
                                    <Button value={3} onClick={e => handleButtonState(e.target.value)} variant='contained' sx={{height: 80}} color={buttonColor4 ? 'secondary' : 'primary'}>
                                        {creatorType[3]}
                                    </Button>                                
                            </ButtonGroup>
                        </Item>
                    </Grid>
                }
                {activeStep == 0 && 
                    <Grid xs={7} sm={9} md={9.5} lg={9.5} xl={9.5} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
                        <Item>
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
                }
                {(activeStep == 1 && buttonState == 0) &&
                    <Priority 
                    handleMetatypeButton={handleMetatypeButton}
                    metatypeButton={metatypeButton}
                    handleAttributeButton={handleAttributeButton}
                    attributeButton={attributeButton}
                    handleSkillButton={handleSkillButton}
                    skillButton={skillButton}
                    handleMagicButton={handleMagicButton}
                    magicButton={magicButton}
                    handleResourceButton={handleResourceButton}
                    resourceButton={resourceButton}
                    showRestrictions={showRestrictions}
                    showMagicRestrictions={showMagicRestrictions}/>
                }
                {(activeStep == 2 && buttonState == 0) &&
                    <Metatype 
                        handleMetatypeState={handleMetatypeState}
                        metatypeState={metatypeState}
                        metatypeButton={metatypeButton}/>
                }
                {(activeStep == 2 && buttonState == 0) &&
                    <MetatypeDescription metatypeState={metatypeState}/>
                }
                {/* This section handles the progress bar at the bottom */}
                <Grid xs={12} sx={{display: 'flex', flexDirection: 'column'}}>
                    <Item>
                        <MobileStepper
                            variant='progress'
                            steps={6}
                            position='static'
                            activeStep={activeStep}
                            sx={{flexGrow: 1, bgcolor: ''}}
                            fullWidth={true}
                            nextButton={
                                <Button size='small' onClick={handleNext} disabled={activeStep === 5}>
                                    Next
                                    {progressTheme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
                                    {progressTheme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    Back
                                </Button>
                            }
                        />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}