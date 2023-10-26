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
import Name from './name.jsx';
import Settings from './settings.jsx';
import Priorities from './priorities.jsx';
import Metatype from './metatype.jsx';
import Overview from './overview.jsx';
import max from '../json/metatype_max_attrib.json';
import Qualities from './qualities.jsx';
import Abilities from './abilities.jsx';
import Skills from './skills.jsx';
import Knowledge from './knowledge.jsx';

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
    // General Default Initializing Variables and Functions
    const [karma, setKarma] = React.useState(50);
    useEffect(() => {
        console.log(
            'karma:', karma
        )
    }, [karma])
    const adjustmentValues = {
        0: 13,
        1: 11,
        2: 9,
        3: 4,
        4: 1
    };
    const attributeValues = {
        0: 24,
        1: 16,
        2: 12,
        3: 8,
        4: 2
    };
    const [attributePoints, setAttributePoints] = React.useState({
        maxAdjustment: 0,
        adjustment: 0,
        maxAttribute: 0,
        attribute: 0
    });
    const handleDefaultAttributePoints = () => {
        let adjustmentValue = adjustmentValues[priorityButtons.metatype] || 0;
        let attributeValue = attributeValues[priorityButtons.attribute] || 0;
            
        setAttributePoints(prevPoints => ({
            ...prevPoints,
            maxAdjustment: adjustmentValue,
            adjustment: adjustmentValue,
            maxAttribute: attributeValue,
            attribute: attributeValue
        }));
    };
    const [skillPoints, setSkillPoints] = React.useState({
        skill: 0,
        maxSkill: 0
    })   
    const skillValues = {
        0: 32,
        1: 24,
        2: 20,
        3: 16,
        4: 10
    };
    const handleDefaultSkillPoints = () => {
        const skillValue = skillValues[priorityButtons.skill] || 0;
    
        setSkillPoints(prevPoints => ({
            ...prevPoints,
            skill: skillValue,
            maxSkill: skillValue,
        }))
    };
    const attributeKeys = ['Bod', 'Agi', 'Rea', 'Str', 'Wil', 'Log', 'Int', 'Cha', 'Edg', 'Mag', 'Res'];
    function createAttributeState(key) {
        return {
            [`adjustPoints${key}`]: 0,
            [`attribPoints${key}`]: 0,
            [`karmaPoints${key}`]: 0,
            [key.toLowerCase()]: 1
        };
    }
    const initialAttributes = attributeKeys.reduce((acc, key) => ({
        ...acc,
        ...createAttributeState(key)
    }), {});
    const [attributes, setAttributes] = React.useState(initialAttributes);
    useEffect(() => {
        console.log(
            'attributes: ', attributes
        )
    }, [])
    const [knowledgePoints, setKnowledgePoints] = React.useState({
        maxKnowledge: attributes.log,
        knowledge: attributes.log
    })
    useEffect(() => {
        console.log(attributePoints)
    }, [attributePoints])
    const [resourcePoints, setResourcePoints] = React.useState({ 
        resources: 0, 
        maxResources: 0 
    });
    useEffect(() => {
        console.log(resourcePoints);
    }, [resourcePoints]);
    const resourcesByPriority = {
        0: 450000,
        1: 275000,
        2: 150000,
        3: 50000,
        4: 8000
    };
    const handleDefaultResourcePoints = () => {
        const resourceValue = resourcesByPriority[priorityButtons.resource] || 0;

        setResourcePoints(prevResourcePoints => ({
            ...prevResourcePoints,
            maxResources: resourceValue,
            resources: resourceValue
        }));
    };

    
     

    // Character.jsx Variables and Functions
    const [page, setPage] = React.useState(0);
    const handleSetPage = (value) => {
        setPage(value)
    }

    // Settings.jsx Variables and Functions
    const [settings, setSettings] = React.useState({
        powerState: 1,
        creatorState: 0
    });
    useEffect(() => {
        console.log(
            'Power Level: ',
            settings.powerState,
            'Creator Type: ',
            settings.creatorState
        )
    })
    const handleSettings = (state, value) => {
        switch(state) {
            case 0:
                setSettings({
                    ...settings,
                    powerState: value
                })
                break;
            case 1:
                setSettings({
                    ...settings,
                    creatorState: value
                })
                break;
            default:
                break;
        }
    }

    // Priorities.jsx Variables and Functions
    const [priorityButtons, setPriorityButtons] = React.useState({
        metatype: 0,
        attribute: 1,
        skill: 2,
        magic: 4,
        resource: 3
    })
    useEffect(() => {
        handleDefaultAttributePoints()
        handleDefaultSkillPoints()
        handleDefaultResourcePoints()
        //handleDefaultMysticAdept()
        console.log(
            'Chosen Priorities: ', priorityButtons,
            'Attribute Points: ', attributePoints
        )
    }, [priorityButtons])
    const handlePriorityButtons = (name, value) => {
        const parsedValue = parseInt(value);
    
        if (settings.creatorState === 0 && settings.powerState === 1) {
            const buttons = ['metatype', 'attribute', 'skill', 'magic', 'resource'];
            buttons.forEach(button => {
                if (button !== name && priorityButtons[button] === parsedValue) {
                    setPriorityButtons(prevButtons => ({
                        ...prevButtons,
                        [button]: priorityButtons[name],
                    }));
                }
            });
        }
    
        setPriorityButtons(prevButtons => ({
            ...prevButtons,
            [name]: parsedValue,
        }));
    }

    // Metatype.jsx Variables and Functions
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
    // ---------------------------------------------------------

    // Qualities (Parent)
    const qualitiesList = [
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
    // ------------------------------------

    // Attributes (Parent)
    const [karmaSpent, setKarmaSpent] = useState({  // this handles the karma spent on attributes to avoid duplicating karma during attribute point adjustments
        bod: [],
        agi: [],
        rea: [],
        str: [],
        wil: [],
        log: [],
        int: [],
        cha: [],
        edg: [],
        mag: [],
        res: []
    });
    // as far as I know, this function handles all potential cases regarding attribute point adjustments. Any irregularities should be resolved here.
    // future me, if you find a bug, I'm sorry about the karma points. It is confusing and I used ChatGPT for it. Mostly know that it involves setting an array
    // of karmaspent and pushing/popping on and off of it to ensure no duplicating of karma.
    const handleAttributePoints = (name, value, attributeName) => {
        console.log(attributeName)
        const adjustPointsName = `adjustPoints${attributeName.charAt(0).toUpperCase()}${attributeName.slice(1)}`
        const attribPointsName = `attribPoints${attributeName.charAt(0).toUpperCase()}${attributeName.slice(1)}`
        const karmaPointsName = `karmaPoints${attributeName.charAt(0).toUpperCase()}${attributeName.slice(1)}`
        const maxAttributeValue = max[chosenMetatype.race][`max${attributeName}`];

        if ((attributePoints[name] === 0 && value === -1) ||                                                    // Avoid going below zero
            (name === 'adjustment' && attributePoints[name] === attributePoints.maxAdjust && value === 1) ||    // Avoid going above Ajustment Point max
            (name === 'adjustment' && attributes[adjustPointsName] === 0 && value === 1) ||                     // Avoid going below zero for Adjustment Points
            (name === 'attribute' && attributePoints[name] === attributePoints.maxAttrib && value === 1) ||     // Avoid going above Attribute Point max
            (name === 'attribute' && attributes[attribPointsName] === 0 && value === 1) ||                      // Avoid going below zero for Attribute Points
            (attributes[attributeName] === 1 && value === 1) ||
            (attributes[attributeName] === maxAttributeValue && value === -1) ||
            (name === 'karma' && karma - ((attributes[attributeName] + 1) * 5) < 0 && value === -1) ||          // Avoid going above maximum Karma
            (name === 'karma' && attributes[karmaPointsName] === 0 && value === 1)) {                           // Avoid going below zero for Karma Points
            console.log('name: ', name, '; value', value, '; attributeName: ', attributeName)
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
                [name === 'adjustment' ? adjustPointsName : attribPointsName]: attributes[name === 'adjustment' ? adjustPointsName : attribPointsName] - value
            }));
        }
        else {
            setAttributes(prevAttributes => ({
                ...prevAttributes,
                [attributeName]: attributes[attributeName] - value,
                [karmaPointsName]: attributes[karmaPointsName] - value
            }));
            if(value === -1) {
                setKarmaSpent(prevKarmaSpent => ({
                    ...prevKarmaSpent,
                    [attributeName]: [...prevKarmaSpent[attributeName], ((attributes[attributeName] + 1) * 5)]
                }))
                setKarma(karma - ((attributes[attributeName] + 1) * 5))
            }
            else {
                const lastKarmaSpent = karmaSpent[attributeName].length > 0 ? karmaSpent[attributeName][karmaSpent[attributeName].length - 1] : 0;

                setKarmaSpent(prevKarmaSpent => {
                    const updatedAttributeArray = [...prevKarmaSpent[attributeName]];
                    if (updatedAttributeArray.length > 0) {
                        updatedAttributeArray.pop();
                    }
                    return {
                        ...prevKarmaSpent,
                        [attributeName]: updatedAttributeArray
                    };
                });

                setKarma(karma + lastKarmaSpent)
            }
        }
    }
    //------------------------------------------

    // Knowledge/Skills (Parent)
    const [skillsTaken, setSkillsTaken] = React.useState([]);
    useEffect(() => {
        console.log(skillsTaken);
    }, [skillsTaken]);
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

    // This block handles all the information needed for knowledge.js, language.js
    // This block holds the hooks that handle what knowledge and languages are taken versus available

    const [knowledgeTaken, setKnowledgeTaken] = React.useState([]);
    useEffect(() => {
        console.log(knowledgeTaken)
    }, [knowledgeTaken])
    const [languageTaken, setLanguageTaken] = React.useState([]);
    useEffect(() => {
        console.log(languageTaken)
    }, [languageTaken])
    const handleKnowledgeTaken = (value, option) => {
        switch(option) {
            case 'add':
                if( knowledgePoints.knowledge === 0 ) {
                    return;
                }
                setKnowledgePoints(prevPoints => ({
                    ...prevPoints,
                    know: prevPoints.know - 1
                }))
                setKnowledgeTaken((prevKnowledgeTaken) => [...prevKnowledgeTaken, value])
                break;
            case 'sub':
                console.log(value, ':', option)
                if( knowledgePoints.knowledge === knowledgePoints.maxKnowledge ) {
                    console.log(knowledgePoints.knowledge, ':', knowledgePoints.maxKnowledge)
                    return;
                }
                setKnowledgePoints(prevPoints => ({
                    ...prevPoints,
                    know: prevPoints.know + 1
                }))
                setKnowledgeTaken(prevKnowledgeTaken => prevKnowledgeTaken.filter(item => item !== value))
                break;
            default:
                break;
        }
    }
    const handleLanguageTaken = (value, option) => {
        switch(option) {
            case 'add':
                if( knowledgePoints.knowledge === 0 ) {
                    return;
                }
                setKnowledgePoints(prevPoints => ({
                    ...prevPoints,
                    know: prevPoints.know - 1
                }))
                setLanguageTaken((prevLanguageTaken) => [...prevLanguageTaken, value])
                break;
            case 'sub':
                if( knowledgePoints.knowledge === knowledgePoints.maxKnowledge ) {
                    return;
                }
                setKnowledgePoints(prevPoints => ({
                    ...prevPoints,
                    know: prevPoints.know + 1
                }))
                setLanguageTaken(prevLanguageTaken => prevLanguageTaken.filter(item => item !== value))
                break;
            default:
                break;
        }
    }
    // ----------------------- 

    return (
        <>
            <div className='relative h-screen'>
                <Name 
                    karma={karma}
                    attributePoints={attributePoints}
                    skillPoints={skillPoints}
                    knowledgePoints={skillPoints}
                    resourcePoints={resourcePoints}
                    page={page}
                    handleSetPage={handleSetPage}
                />
                {page === 0 && 
                    <Settings
                        settings={settings}
                        handleSettings={handleSettings}
                    />
                }
                {page === 1 &&
                    <Priorities
                        Item={Item}
                        priorityButtons={priorityButtons} 
                        handlePriorityButtons={handlePriorityButtons}
                    />
                }
                {page === 2 &&
                    <Metatype
                        Item={Item}
                        handleChosenMetatype={handleChosenMetatype}
                        chosenMetatype={chosenMetatype}
                        priorityButtons={priorityButtons}
                        karma={karma}
                    />
                }
                {page === 3 &&
                    <Qualities
                        Item={Item}
                        qualitiesArray={qualitiesArray}
                        handleUpdateQualitiesArray={handleUpdateQualitiesArray}
                        qualityState={qualityState}
                        handleQualityState={handleQualityState}
                        qualityTakenState={qualityTakenState}
                        handleQualityTakenState={handleQualityTakenState}
                        qualitiesTakenArray={qualitiesTakenArray}
                        handleUpdateQualityTakenArray={handleUpdateQualityTakenArray}
                        karma={karma}
                    />
                }
                {page === 4 &&
                    <Abilities
                        priorityButtons={priorityButtons}
                        attributes={attributes}
                        handleAttributePoints={handleAttributePoints}
                        chosenMetatype={chosenMetatype}
                        karma={karma}
                        attributePoints={attributePoints}
                    />
                }
                {page === 5 &&
                    <Skills
                        priorityButtons={priorityButtons}
                        skillPoints={skillPoints}
                        skillsTaken={skillsTaken}
                        handleUpdateSkillsTaken={handleUpdateSkillsTaken}
                        karma={karma}
                    />
                }
                {page === 6 &&
                    <Knowledge
                        knowledgePoints={knowledgePoints}
                        knowledgeTaken={knowledgeTaken}
                        handleKnowledgeTaken={handleKnowledgeTaken}
                        languageTaken={languageTaken}
                        handleLanguageTaken={handleLanguageTaken}
                        karma={karma}
                    />
                }
            </div>
        </>
    );
}
{/*<Grid container columns={100} sx={{ flexGrow: 1, padding: 0 }}>
            This section handles the sidebar navigation of the various components. 
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
                    <Divider />
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
                    <Grid xs={100} columns={100} sx={{ flexGrow: 1, height: "10vh", padding: 0 }}>
                        <Name 
                            Item={Item} 
                            karma={karma}
                            attributePoints={attributePoints}
                            skillPoints={skillPoints}
                            knowledgePoints={knowledgePoints}
                            resourcePoints={resourcePoints}
                        />
                    </Grid>
                    <Grid container columns={100} sx={{ flexGrow: 1, height: "90vh"}}>
                        {(page === 0) &&
                            <Settings
                                Item={Item}
                                settings={settings}
                                handleSettings={handleSettings}
                            />
                        }
                        {(page === 1) &&
                            <Priorities
                                Item={Item}
                                priorityButtons={priorityButtons} 
                                handlePriorityButtons={handlePriorityButtons}
                            />
                        }
                        {(page === 2) &&
                            <Metatype
                                Item={Item}
                                handleChosenMetatype={handleChosenMetatype}
                                chosenMetatype={chosenMetatype}
                                priorityButtons={priorityButtons}
                                karma={karma}
                            />
                        }
                        {(page === 3) &&
                            <Overview 
                                Item={Item}
                                qualitiesArray={qualitiesArray}
                                handleUpdateQualitiesArray={handleUpdateQualitiesArray}
                                qualityState={qualityState}
                                handleQualityState={handleQualityState}
                                priorityButtons={priorityButtons}
                                attributes={attributes}
                                handleAttributePoints={handleAttributePoints}
                                chosenMetatype={chosenMetatype}
                            />
                        }
                        {(page === 4) &&
                            <div>
                                Hello, Tailwind!
                            </div>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>*/}
