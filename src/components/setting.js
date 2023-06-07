import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button, ButtonGroup } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { Select, MenuItem, InputLabel } from '@mui/material';
import { grey, deepPurple } from '@mui/material/colors';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme, styled } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@mui/material';
import Priority from './priority.js';
import Metatype from './metatype.js';
import MetatypeDescription from './metatype_desc.js';
import Magic from './magic.js';
import MagicDescription from './magic_desc.js';
import Qualities from './qualities.js';
import QualitiesTaken from './qualities_taken.js';
import QualitiesDescription from './qualities_desc.js';
import Attributes from './attributes.js';
import DerivedAttributes from './derived_attributes.js';
import Skills from './skills.js';
import SkillDescription from './skill_desc.js';
import Knowledge from './knowledge.js';
import max from '../json/metatype_max_attrib.json';

const subHeaderBackground = grey[400];
const selectionBackground = grey[300];

const Item = styled(Paper)(({ theme }) => ({
    height: '100%',
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

export default function Setting() {

    // This section contains hooks that are needed in many different components
    // This is here because they do not fit cleanly into a single block for generation,
    // but rather are updated throughout the creation process
    const [karma, setKarma] = React.useState(50);
    useEffect(() => {
        console.log(
            'karma:',
            karma
        )
    }, [karma])

    // This section handles the information used for setting.js
    // This exists to get the power level of the runner and to get
    // the character creation ruleset for the runner.
    // This also exists to keep track of overall steps until completion
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
    const [powerState, setPowerState] = React.useState(1); //handlePowerState
    const [buttonState, setButtonState] = React.useState(0); //handleButtonState
    const [buttonColors, setButtonColors] = React.useState([true, false, false, false]) //handleButtonColor
    const [totalSteps, setTotalSteps] = React.useState(11);
    const [activeStep, setActiveStep] = React.useState(0); //handleNext and handleBack
    useEffect(() => {
        console.log({
            powerState
        })
    }, [powerState])
    useEffect(() => {
        handleButtonColor(buttonState)
        console.log({
            buttonState,
            buttonColors
        })
    }, [buttonState])
    useEffect(() => {
        console.log({
            totalSteps
        })
    }, [totalSteps])
    useEffect(() => {
        console.log({
            activeStep
        })
    }, [activeStep])
    const handlePowerState = (value) => setPowerState(value);
    const handleButtonState = (value) => setButtonState(value);
    function handleButtonColor(bState) {
        const colors = [false, false, false, false]
        if(bState >= 0 && bState < 4) {
            colors[bState] = true;
        }
        setButtonColors(colors);
    }
    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

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
        handleDefaultAttributePoints()
        handleDefaultSkillPoints()
        handleDefaultMysticAdept()
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
                    setTotalSteps(8)
                }
                else {
                    setMagicRestrictions(true)
                    setTotalSteps(10)
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

    // This block handles the information needed for metatype.js as well as metatype_desc.js
    // This block stores the metatype chosen as well as the cost of that metatype and deducts that from 
    // the karma hook
    const [chosenMetatype, setChosenMetatype] = React.useState({
        race: 'Troll',
        cost: 0
    });
    useEffect(() => {
        console.log(
            chosenMetatype,
            max[chosenMetatype.race].maxagi
        )
    }, [chosenMetatype])
    const handleChosenMetatype = (value, karmaValue) => () => {
        setKarma((karma + chosenMetatype.cost) - karmaValue)
        setChosenMetatype(prevMetatype => ({
            ...prevMetatype,
            race: value,
            cost: karmaValue
        }))        
    }

    // This block handles the information needed for attributes.js as well as derived_attributes.js
    // This block stores each attribute based on the priorities and metatype the user chose

    const [attributePoints, setAttributePoints] = React.useState({
        maxAdjust: 0,
        adjust: 0,
        maxAttrib: 0,
        attrib: 0
    })
    const [attributes, setAttributes] = React.useState({
        adjustPointsBod: 0,
        attribPointsBod: 0,
        karmaPointsBod: 0,
        bod: 1,

        adjustPointsAgi: 0,
        attribPointsAgi: 0,
        karmaPointsAgi: 0,
        agi: 1,

        adjustPointsRea: 0,
        attribPointsRea: 0,
        karmaPointsRea: 0,
        rea: 1,

        adjustPointsStr: 0,
        attribPointsStr: 0,
        karmaPointsStr: 0,
        str: 1,

        adjustPointsWil: 0,
        attribPointsWil: 0,
        karmaPointsWil: 0,
        wil: 1,

        adjustPointsLog: 0,
        attribPointsLog: 0,
        karmaPointsLog: 0,
        log: 1,

        adjustPointsInt: 0,
        attribPointsInt: 0,
        karmaPointsInt: 0,
        int: 1,

        adjustPointsCha: 0,
        attribPointsCha: 0,
        karmaPointsCha: 0,
        cha: 1,

        adjustPointsEdg: 0,
        attribPointsEdg: 0,
        karmaPointsEdg: 0,
        edg: 1,

        adjustPointsMag: 0,
        attribPointsMag: 0,
        karmaPointsMag: 0,
        mag: 1,

        adjustPointsRes: 0,
        attribPointsRes: 0,
        karmaPointsRes: 0,
        res: 1
    })
    useEffect(() => {
        console.log(attributePoints)
    }, [attributePoints])
    const handleDefaultAttributePoints = () => {
        let adjustValue = 0
        let attribValue = 0

        switch(priorityButtons.metatype) {
            case 0:
                adjustValue = 13
                break;
            case 1:
                adjustValue = 11
                break;
            case 2:
                adjustValue = 9
                break;
            case 3:
                adjustValue = 4
                break;
            case 4:
                adjustValue = 1
                break;
            default:
                break;
        }
        switch(priorityButtons.attribute) {
            case 0:
                attribValue = 24
                break;
            case 1:
                attribValue = 16
                break;
            case 2:
                attribValue = 12
                break;
            case 3:
                attribValue = 8
                break;
            case 4:
                attribValue = 2
                break;
            default:
                break;
        }
        setAttributePoints(prevPoints => ({
            ...prevPoints,
            maxAdjust: adjustValue,
            adjust: adjustValue,
            maxAttrib: attribValue,
            attrib: attribValue
        }))
    }
    const handleAttributePoints = (name, value, attributeName) => {
        const adjustPointsName = `adjustPoints${attributeName.charAt(0).toUpperCase()}${attributeName.slice(1)}`
        const attribPointsName = `attribPoints${attributeName.charAt(0).toUpperCase()}${attributeName.slice(1)}`
        const karmaPointsName = `karmaPoints${attributeName.charAt(0).toUpperCase()}${attributeName.slice(1)}`
        const maxAttributeValue = max[chosenMetatype.race][`max${attributeName}`];

        if ((attributePoints[name] === 0 && value === -1) || // Avoid going below zero
            (name === 'adjust' && attributePoints[name] === attributePoints.maxAdjust && value === 1) || // Avoid going above Ajustment Point max
            (name === 'attrib' && attributePoints[name] === attributePoints.maxAttrib && value === 1) || // Avoid going above Attribute Point max
            (attributes[attributeName] === 1 && value === 1) ||
            (attributes[attributeName] === maxAttributeValue && value === -1) ||
            (karma - ((attributes[attributeName] + 1) * 5) < 0 && value === -1)) {
            return;
        }
        if(name !== 'karma') {
            setAttributePoints(prevPoints => ({
                ...prevPoints,
                [name]: (attributePoints[name] + value)
            }))
            setAttributes(prevAttributes => ({
                ...prevAttributes,
                [attributeName]: attributes[attributeName] - value,
                [name === 'adjust' ? adjustPointsName : attribPointsName]: attributes[name === 'adjust' ? adjustPointsName : attribPointsName] - value
            }));
        }
        else {
            setAttributes(prevAttributes => ({
                ...prevAttributes,
                [attributeName]: attributes[attributeName] - value,
                [karmaPointsName]: attributes[karmaPointsName] - value
            }));
            if(value === -1) {
                setKarma(karma - ((attributes[attributeName] + 1) * 5))
            }
            else {
                setKarma(karma + (attributes[attributeName] * 5))
            }
        }
    }

    // This block handles all the information needed for qualities.js, qualities_desc.js, and qualities_taken.js
    // This block holds the hooks that handle what qualities are taken versus available. 
    const qualitiesList = [
        {
            id: 0,
            cost: 5,
            name: 'Test Quality I',
        },
        {
            id: 1,
            cost: 10,
            name: 'Test Quality II',
        },
    ]
    const [qualityState, setQualityState] = React.useState(0); //handleQualityState
    const [qualityTakenState, setQualityTakenState] = React.useState(null); //handleQualityTakenState
    const [qualitiesArray, updateQualitiesArray] = React.useState(qualitiesList); //handleUpdateQualityArray
    const [qualitiesTakenArray, updateQualitiesTakenArray] = React.useState([]); //handleUpdateQualityTakenArray
    useEffect(() => {
        console.log(
            'qualities',
            qualityState
        )
    }, [qualityState])
    useEffect(() => {
        console.log(
            'qualities taken',
            qualityTakenState
        )
    }, [qualityTakenState])
    useEffect(() => {
        console.log(
            'qualities array',
            qualitiesArray
        )
    }, [qualitiesArray])
    useEffect(() => {
        console.log(
            'qualities taken array',
            qualitiesTakenArray
        )
    }, [qualitiesTakenArray])
    const handleQualityState = (value) => () => {
        setQualityState(value)
        setQualityTakenState(value)
    }
    const handleQualityTakenState = (value) => () => {
        setQualityTakenState(value)
        setQualityState(value)
    }
    const handleUpdateQualitiesArray = (value) => () => {
        const valueResult = qualitiesArray.find(qualitiesArray => qualitiesArray.id == value)
        updateQualitiesArray(qualitiesArray.filter(qualitiesArray => qualitiesArray.id !== value))
        updateQualitiesTakenArray([...qualitiesTakenArray, valueResult])
    }
    const handleUpdateQualityTakenArray = (value) => () => {
        const valueResult = qualitiesTakenArray.find(qualitiesTakenArray => qualitiesTakenArray.id == value)
        updateQualitiesTakenArray(qualitiesTakenArray.filter(qualitiesTakenArray => qualitiesTakenArray.id !== value))
        updateQualitiesArray([...qualitiesArray, valueResult])
    }

    // This block handles all the information needed for skills.js, skill_desc.js, and knowledge.js
    // This block holds the hooks that handle what skills and knowledge are taken versus available
    const [skillPoints, setSkillPoints] = React.useState({
        skill: 0,
        maxSkill: 0
    })
    const [skillsTaken, setSkillsTaken] = React.useState([]);

    useEffect(() => {
    console.log(skillsTaken);
    }, [skillsTaken]);

    const handleDefaultSkillPoints = () => {
        let skillValue = 0

        switch(priorityButtons.skill) {
            case 0:
                skillValue = 32
                break;
            case 1:
                skillValue = 24
                break;
            case 2:
                skillValue = 20
                break;
            case 3:
                skillValue = 16
                break;
            case 4:
                skillValue = 10
                break;
            default:
                skillValue = 0
                break;
        }
        setSkillPoints(prevPoints => ({
            ...prevPoints,
            skill: skillValue,
            maxSkill: skillValue,
        }))
    };
    const handleUpdateSkillsTaken = (identifier, event, value) => {
        switch(identifier) {
            case 'checkbox':
                if(event.target.checked) {
                    if(skillPoints.skill === 0) {
                        return;
                    }
                    else {
                        setSkillPoints(prevSkillPoints => ({
                            ...prevSkillPoints,
                            skill: prevSkillPoints.skill - 1
                        }));
                        setSkillsTaken(prevSkills => [
                            ...prevSkills,
                            {
                                name: value,
                                rating: 1,
                                spec: 'No Selection'
                            }
                        ]);
                    }
                }
                else if(!event.target.checked) {
                    if(skillPoints.skill === skillPoints.maxSkill) {
                        return;
                    }
                    else {
                        setSkillPoints(prevSkillPoints => ({
                            ...prevSkillPoints,
                            skill: prevSkillPoints.skill + 1
                        }));
                        setSkillsTaken(prevSkills => prevSkills.filter(skillsTaken => skillsTaken.name !== value));
                    }
                }
                break;
            case 'add':
                if( skillPoints.skill === 0 ||
                    skillsTaken.find(skill => skill.name === value)?.rating === 6) {
                    return;
                }
                else {
                    setSkillPoints(prevSkillPoints => ({
                        ...prevSkillPoints,
                        skill: prevSkillPoints.skill - 1
                    }));
                    setSkillsTaken(prevSkills =>
                        prevSkills.map(skill =>
                            skill.name === value
                            ? {
                                ...skill,
                                rating: skill.rating + 1
                            }
                            : skill
                        )
                    );
                }
                break;
            case 'sub':
                if( skillPoints.skill === skillPoints.maxSkill ||
                    skillsTaken.find(skill => skill.name === value)?.rating === 1) {
                    return;
                }
                else {
                    if(skillsTaken.find(skill => skill.name === value)?.rating-1 < 5 && skillsTaken.find(skill => skill.name === value)?.spec !== 'No Selection') {
                        setSkillPoints(prevSkillPoints => ({
                            ...prevSkillPoints,
                            skill: prevSkillPoints.skill + 2
                        }));
                        setSkillsTaken(prevSkills =>
                            prevSkills.map(skill =>
                                skill.name === value
                                ? {
                                    ...skill,
                                    rating: skill.rating - 1,
                                    spec: 'No Selection'
                                }
                                : skill
                            )
                        );
                    }
                    else {
                        setSkillPoints(prevSkillPoints => ({
                            ...prevSkillPoints,
                            skill: prevSkillPoints.skill + 1
                        }));
                        setSkillsTaken(prevSkills =>
                            prevSkills.map(skill =>
                                skill.name === value
                                ? {
                                    ...skill,
                                    rating: skill.rating - 1
                                }
                                : skill
                            )
                        );
                    }
                }
                break;
            case 'spec':
                if(skillsTaken.find(skill => skill.name === value)?.spec === 'No Selection' && event.target.value !== 'No Selection') {
                    if( skillPoints.skill === 0 ||
                        skillsTaken.find(skill => skill.name === value)?.rating < 5) {
                        return;
                    }
                    setSkillPoints(prevSkillPoints => ({
                        ...prevSkillPoints,
                        skill: prevSkillPoints.skill - 1
                    }));
                }
                else if(event.target.value === 'No Selection') {
                    if( skillPoints.skill === skillPoints.maxSkill ) {
                        return;
                    }
                    setSkillPoints(prevSkillPoints => ({
                        ...prevSkillPoints,
                        skill: prevSkillPoints.skill + 1
                    }));
                }
                setSkillsTaken(prevSkills =>
                    prevSkills.map(skill =>
                        skill.name === value
                        ? {
                            ...skill,
                            spec: event.target.value
                        }
                        : skill
                    )
                );
                break;
            default:
                break;
        }
    };

    // This section handles all the hooks needed for magic.js and magic_desc.js
    // These hooks are used to determine what magical subtype the runner will have
    // as well as allocate infromation required for certain subtypes
    const [magicStates, setMagicStates] = React.useState({
        magicState: 0,
        traditionState: 0,
        magicLimitationState: 0,
        magicianPoints: 0,
        adeptPoints: 0,
    });
    useEffect(() => {
        console.log(
            'magic state:',
            magicStates
        )
    }, [magicStates])
    const handleMagicStates = (name, value) => () => {
        console.log(name, value)
        if(name == 'mystic') {
            switch(value) {
                case 'left':
                    if(magicStates.adeptPoints !== 0) {
                        setMagicStates((prevMagicStates) => ({
                            ...prevMagicStates,
                            magicianPoints: magicStates.magicianPoints + 1,
                            adeptPoints: magicStates.adeptPoints - 1,
                        }));
                    }
                    break;
                case 'right':
                    if(magicStates.magicianPoints !== 0) {
                        setMagicStates((prevMagicStates) => ({
                            ...prevMagicStates,
                            magicianPoints: magicStates.magicianPoints - 1,
                            adeptPoints: magicStates.adeptPoints + 1,
                        }));
                    }
                    break;
                default:
                    break;
            }
        }
        else {
            setMagicStates((prevMagicStates) => ({
                ...prevMagicStates,
                [name]: value,
            }));
        }
    }
    const handleDefaultMysticAdept = () => {
        switch(priorityButtons.magic) {
            case 0:
                setMagicStates((prevMagicStates) => ({
                    ...prevMagicStates,
                    magicianPoints: 4
                }));
                break;
            case 1:
                setMagicStates((prevMagicStates) => ({
                    ...prevMagicStates,
                    magicianPoints: 3
                }));
                break;
            case 2:
                setMagicStates((prevMagicStates) => ({
                    ...prevMagicStates,
                    magicianPoints: 2
                }));
                break;
            case 3:
                setMagicStates((prevMagicStates) => ({
                    ...prevMagicStates,
                    magicianPoints: 1
                }));
                break;
            default:
                setMagicStates((prevMagicStates) => ({
                    ...prevMagicStates,
                    magicianPoints: 0,
                    adeptPoints: 0
                }));
                break;
        }
    }

    return (
        <Box sx={{flexGrow: 1, margin: 'auto', maxWidth: 1350, bgcolor: subHeaderBackground, padding: 1}}>
            <Grid container spacing={2}>
                {/* This section handles the progress bar at the top */}
                <Grid xs={12} sx={{display: 'flex', flexDirection: 'column'}}>
                    <Item>
                        <MobileStepper
                            variant='progress'
                            steps={totalSteps}
                            position='static'
                            activeStep={activeStep}
                            sx={{flexGrow: 1, bgcolor: ''}}
                            fullWidth={true}
                            nextButton={
                                <Button size='small' onClick={handleNext} disabled={activeStep === (totalSteps - 1)}>
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
                <Grid xs={12} sx={{display: 'flex', flexDirection: 'column', height: 80}}>
                    <Item>
                        <Table>
                            <TableRow>
                                <TableCell><Typography variant='h1' style={{ fontSize: 16, fontFamily: 'Segoe UI', fontWeight: 500 }}>Karma: {karma}</Typography></TableCell>
                                <TableCell><Typography variant='h1' style={{ fontSize: 16, fontFamily: 'Segoe UI', fontWeight: 500 }}>Adjustment Points: {attributePoints.adjust}</Typography></TableCell>
                                <TableCell><Typography variant='h1' style={{ fontSize: 16, fontFamily: 'Segoe UI', fontWeight: 500 }}>Attribute Points: {attributePoints.attrib}</Typography></TableCell>
                                <TableCell><Typography variant='h1' style={{ fontSize: 16, fontFamily: 'Segoe UI', fontWeight: 500 }}>Skill Points: {skillPoints.skill}</Typography></TableCell>
                            </TableRow>
                        </Table>
                    </Item>
                </Grid>
                {activeStep == 0 && 
                    <Grid xs={5} sm={3} md={2.5} lg={2.5} xl={2.5} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
                        <Item>
                            <ButtonGroup orientation='vertical' variant='contained' fullWidth={true} sx={{bgcolor: selectionBackground}}> 
                                    <FormControl variant='filled' fullWidth={true}>
                                        <InputLabel>Power Level</InputLabel>
                                    <Select sx={{marginBottom: 1}} defaultValue={1} label='Power Level' onChange={e => handlePowerState(e.target.value)}>
                                        <MenuItem value={0} disabled>
                                            {powerLevel[0]}
                                        </MenuItem>
                                        <MenuItem value={1}>
                                            {powerLevel[1]}
                                        </MenuItem>
                                        <MenuItem value={2} disabled>
                                            {powerLevel[2]}
                                        </MenuItem>
                                    </Select>
                                    </FormControl>
                                    <Button value={0} onClick={e => handleButtonState(e.target.value)} variant='contained' sx={{height: 80}} color={buttonColors[0] ? 'secondary' : 'primary'}>
                                        {creatorType[0]}
                                    </Button>
                                    <Button value={1} onClick={e => handleButtonState(e.target.value)} variant='contained' sx={{height: 80}} color={buttonColors[1] ? 'secondary' : 'primary'} disabled>
                                        {creatorType[1][powerState]}
                                    </Button>
                                    <Button value={2} onClick={e => handleButtonState(e.target.value)} variant='contained' sx={{height: 80}} color={buttonColors[2] ? 'secondary' : 'primary'} disabled>
                                        {creatorType[2]}
                                    </Button>
                                    <Button value={3} onClick={e => handleButtonState(e.target.value)} variant='contained' sx={{height: 80}} color={buttonColors[3] ? 'secondary' : 'primary'} disabled>
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
                {(activeStep == 1 && buttonState == 0) && // Always display on step 1
                    <Priority 
                    priorityButtons={priorityButtons}
                    handlePriorityButtons={handlePriorityButtons}
                    showRestrictions={showRestrictions}
                    showMagicRestrictions={showMagicRestrictions}/>
                }
                {(activeStep == 2 && buttonState == 0) && // Always display on step 2
                    <>
                        <Metatype 
                            handleChosenMetatype={handleChosenMetatype}
                            chosenMetatype={chosenMetatype}
                            priorityButtons={priorityButtons}
                            karma={karma}/>
                        <MetatypeDescription chosenMetatype={chosenMetatype}/>
                    </>
                }
                {(activeStep == 3 && buttonState == 0 && priorityButtons.magic !== 4) && // Display on step 3 if magic != 4, otherwise never display
                    <>
                        <Magic 
                            magicStates={magicStates}
                            handleMagicStates={handleMagicStates}
                        />
                        <MagicDescription magicStates={magicStates}/>
                    </>
                }
                {((activeStep == 4 && buttonState == 0 && priorityButtons.magic != 4) ||  // Display on step 4 if magic != 4
                  (activeStep == 3 && buttonState == 0 && priorityButtons.magic == 4)) && // Display on step 3 if magic == 4
                    <>
                        <Qualities
                        qualitiesArray={qualitiesArray}
                        handleUpdateQualitiesArray={handleUpdateQualitiesArray}
                        qualityState={qualityState} 
                        handleQualityState={handleQualityState} 
                        />
                        <QualitiesTaken 
                        qualitiesTakenArray={qualitiesTakenArray} 
                        handleUpdateQualityTakenArray={handleUpdateQualityTakenArray}
                        handleQualityTakenState={handleQualityTakenState}
                        qualityTakenState={qualityTakenState}
                        />
                        <QualitiesDescription/>
                    </>
                }
                {((activeStep == 5 && buttonState == 0 && priorityButtons.magic != 4) ||  // Display on step 5 if magic != 4
                  (activeStep == 4 && buttonState == 0 && priorityButtons.magic == 4)) && // Display on step 4 if magic == 4
                    <>
                        <Attributes
                        priorityButtons={priorityButtons}
                        chosenMetatype={chosenMetatype}
                        attributePoints={attributePoints}
                        handleAttributePoints={handleAttributePoints}
                        attributes={attributes}
                        />
                        <DerivedAttributes/>
                    </>
                }
                {((activeStep == 6 && buttonState == 0 && priorityButtons.magic != 4) ||  // Display on step 5 if magic != 4
                  (activeStep == 5 && buttonState == 0 && priorityButtons.magic == 4)) && // Display on step 4 if magic == 4
                  <>
                    <Skills skillsTaken={skillsTaken} handleUpdateSkillsTaken={handleUpdateSkillsTaken} priorityButtons={priorityButtons}/>
                    <SkillDescription/>
                  </>
                }
                {((activeStep == 7 && buttonState == 0 && priorityButtons.magic != 4) ||  // Display on step 7 if magic != 4
                  (activeStep == 6 && buttonState == 0 && priorityButtons.magic == 4)) && // Display on step 6 if magic == 4
                  <>
                    <Knowledge/>
                  </>
                }
                {/* This section handles the progress bar at the bottom */}
                <Grid xs={12} sx={{display: 'flex', flexDirection: 'column'}}>
                    <Item>
                        <MobileStepper
                            variant='progress'
                            steps={totalSteps}
                            position='static'
                            activeStep={activeStep}
                            sx={{flexGrow: 1, bgcolor: ''}}
                            fullWidth={true}
                            nextButton={
                                <Button size='small' onClick={handleNext} disabled={activeStep === (totalSteps - 1)}>
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