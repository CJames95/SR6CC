import React, { useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { palette } from '@mui/system';
import { grey, deepPurple } from '@mui/material/colors';

function createData(row_name, A, B, C, D, E) {
    return {row_name, A, B, C, D, E}
}
const metatype = [
    createData(
        'Metatype',
        'Dwarf, Ork, Troll, (13)', 
        'Dwarf, Elf, Ork, Troll (11)', 
        'Dwarf, Elf, Human, Ork, Troll (9)', 
        'Dwarf, Elf, Human, Ork, Troll (4)', 
        'Dwarf, Elf, Human, Ork, Troll (1)'
    )
]
const attributes = [
    createData(
        'Attributes',
        24, 
        16, 
        12, 
        8, 
        2
    )
]
const skill = [
    createData(
        'Skills',
        32, 
        24, 
        20, 
        16, 
        10
    )
]
const magic_or_resonance = [
    createData(
        'Magic or Resonance',
        'Full: 4 Magic, Aspected: 5 Magic, Mystic Adept: 4 Magic, Adept: 4 Magic, Technomancer: 4 Resonance', 
        'Full: 3 Magic, Aspected: 4 Magic, Mystic Adept: 3 Magic, Adept: 3 Magic, Technomancer: 3 Resonance', 
        'Full: 2 Magic, Aspected: 3 Magic, Mystic Adept: 2 Magic, Adept: 2 Magic, Technomancer: 2 Resonance', 
        'Full: 1 Magic, Aspected: 2 Magic, Mystic Adept: 1 Magic, Adept: 1 Magic, Technomancer: 1 Resonance', 
        'Mundane'
    )
]
const resources = [
    createData(
        'Resources',
        '450,000', 
        '275,000', 
        '150,000', 
        '50,000', 
        '8,000'
    )
]

const headerBackground = grey[900];
const subHeaderBackground = grey[700];
const pointColor = deepPurple['A700'];

export default function Creator() {

    // This block handles the brains of disabling the buttons, updating the color, and immediately updating the state. 
    // Without this block, the entire table of buttons would break
    const [metatypeState, setMetatypeState] = React.useState()
    useEffect(() => {
        handleMetatypeColor(metatypeState)
        handleAState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleBState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleCState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleDState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleEState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleMetatypePoints(metatypeState)
        handleMetaDisable(metatypePoints)
        console.log({
            metatypeState
        })
    }, [metatypeState])
    const handleMetatypeState = (metatypeValue) => {
        if (metatypeState == metatypeValue) {
            setMetatypeState(null)
        }
        else {
            setMetatypeState(metatypeValue)
        }
    }

    const [attributeState, setAttributeState] = React.useState()
    useEffect(() => {
        handleAttributeColor(attributeState)
        handleAState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleBState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleCState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleDState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleEState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleAttributePoints(attributeState)
        console.log({
            attributeState
        })
    }, [attributeState])
    const handleAttributeState = (attributeValue) => {
        if (attributeState == attributeValue) {
            setAttributeState(null)
        }
        else {
            setAttributeState(attributeValue)
        }
    }

    const [skillState, setSkillState] = React.useState()
    useEffect(() => {
        handleSkillColor(skillState)
        handleAState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleBState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleCState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleDState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleEState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleSkillPoints(skillState)
        console.log({
            skillState
        })
    }, [skillState])
    const handleSkillState = (skillValue) => {
        if (skillState == skillValue) {
            setSkillState(null)
        }
        else {
            setSkillState(skillValue)
        }
    }

    const [magicState, setMagicState] = React.useState()
    useEffect(() => {
        handleMagicColor(magicState)
        handleAState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleBState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleCState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleDState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleEState(metatypeState, attributeState, skillState, magicState, resourceState)
        console.log({
            magicState
        })
    }, [magicState])
    const handleMagicState = (magicValue) => {
        if (magicState == magicValue) {
            setMagicState(null)
        }
        else {
            setMagicState(magicValue)
        }
    }

    const [resourceState, setRsrcState] = React.useState()
    useEffect(() => {
        handleResourceColor(resourceState)
        handleAState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleBState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleCState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleDState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleEState(metatypeState, attributeState, skillState, magicState, resourceState)
        handleResourcePoints(resourceState)
        console.log({
            resourceState
        })
    }, [resourceState])
    const handleRsrcState = (resourceValue) => {
        if (resourceState == resourceValue) {
            setRsrcState(null)
        }
        else {
            setRsrcState(resourceValue)
        }
    }
    // brain block ends

    // This block handles disabling the buttons in the rest of the column when a button in that column is selected
    const [disableMetaA, setDisabledMetaA] = React.useState(false)
    const [disableAttrA, setDisabledAttrA] = React.useState(false)
    const [disableSkillA, setDisabledSkillA] = React.useState(false)
    const [disableMagicA, setDisabledMagicA] = React.useState(false)
    const [disableRsrcA, setDisabledRsrcA] = React.useState(false)
    function handleAState(met, att, ski, mag, res) {
            if (met == 'A') {
                setDisabledAttrA(true)
                setDisabledSkillA(true)
                setDisabledMagicA(true)
                setDisabledRsrcA(true)
            }
            else if (att == 'A') {
                setDisabledMetaA(true)
                setDisabledSkillA(true)
                setDisabledMagicA(true)
                setDisabledRsrcA(true)
            }
            else if (ski == 'A') {
                setDisabledMetaA(true)
                setDisabledAttrA(true)
                setDisabledMagicA(true)
                setDisabledRsrcA(true)
            }
            else if (mag == 'A') {
                setDisabledMetaA(true)
                setDisabledAttrA(true)
                setDisabledSkillA(true)
                setDisabledRsrcA(true)
            }
            else if (res == 'A') {
                setDisabledMetaA(true)
                setDisabledAttrA(true)
                setDisabledSkillA(true)
                setDisabledMagicA(true)
            }
            else {
                setDisabledMetaA(false)
                setDisabledAttrA(false)
                setDisabledSkillA(false)
                setDisabledMagicA(false)
                setDisabledRsrcA(false)
            }
    }
    const [disableMetaB, setDisabledMetaB] = React.useState(false)
    const [disableAttrB, setDisabledAttrB] = React.useState(false)
    const [disableSkillB, setDisabledSkillB] = React.useState(false)
    const [disableMagicB, setDisabledMagicB] = React.useState(false)
    const [disableRsrcB, setDisabledRsrcB] = React.useState(false)
    function handleBState(met, att, ski, mag, res) {
            if (met == 'B') {
                setDisabledAttrB(true)
                setDisabledSkillB(true)
                setDisabledMagicB(true)
                setDisabledRsrcB(true)
            }
            else if (att == 'B') {
                setDisabledMetaB(true)
                setDisabledSkillB(true)
                setDisabledMagicB(true)
                setDisabledRsrcB(true)
            }
            else if (ski == 'B') {
                setDisabledMetaB(true)
                setDisabledAttrB(true)
                setDisabledMagicB(true)
                setDisabledRsrcB(true)
            }
            else if (mag == 'B') {
                setDisabledMetaB(true)
                setDisabledAttrB(true)
                setDisabledSkillB(true)
                setDisabledRsrcB(true)
            }
            else if (res == 'B') {
                setDisabledMetaB(true)
                setDisabledAttrB(true)
                setDisabledSkillB(true)
                setDisabledMagicB(true)
            }
            else {
                setDisabledMetaB(false)
                setDisabledAttrB(false)
                setDisabledSkillB(false)
                setDisabledMagicB(false)
                setDisabledRsrcB(false)
            }
    }
    const [disableMetaC, setDisabledMetaC] = React.useState(false)
    const [disableAttrC, setDisabledAttrC] = React.useState(false)
    const [disableSkillC, setDisabledSkillC] = React.useState(false)
    const [disableMagicC, setDisabledMagicC] = React.useState(false)
    const [disableRsrcC, setDisabledRsrcC] = React.useState(false)
    function handleCState(met, att, ski, mag, res) {
            if (met == 'C') {
                setDisabledAttrC(true)
                setDisabledSkillC(true)
                setDisabledMagicC(true)
                setDisabledRsrcC(true)
            }
            else if (att == 'C') {
                setDisabledMetaC(true)
                setDisabledSkillC(true)
                setDisabledMagicC(true)
                setDisabledRsrcC(true)
            }
            else if (ski == 'C') {
                setDisabledMetaC(true)
                setDisabledAttrC(true)
                setDisabledMagicC(true)
                setDisabledRsrcC(true)
            }
            else if (mag == 'C') {
                setDisabledMetaC(true)
                setDisabledAttrC(true)
                setDisabledSkillC(true)
                setDisabledRsrcC(true)
            }
            else if (res == 'C') {
                setDisabledMetaC(true)
                setDisabledAttrC(true)
                setDisabledSkillC(true)
                setDisabledMagicC(true)
            }
            else {
                setDisabledMetaC(false)
                setDisabledAttrC(false)
                setDisabledSkillC(false)
                setDisabledMagicC(false)
                setDisabledRsrcC(false)
            }
    }
    const [disableMetaD, setDisabledMetaD] = React.useState(false)
    const [disableAttrD, setDisabledAttrD] = React.useState(false)
    const [disableSkillD, setDisabledSkillD] = React.useState(false)
    const [disableMagicD, setDisabledMagicD] = React.useState(false)
    const [disableRsrcD, setDisabledRsrcD] = React.useState(false)
    function handleDState(met, att, ski, mag, res) {
            if (met == 'D') {
                setDisabledAttrD(true)
                setDisabledSkillD(true)
                setDisabledMagicD(true)
                setDisabledRsrcD(true)
            }
            else if (att == 'D') {
                setDisabledMetaD(true)
                setDisabledSkillD(true)
                setDisabledMagicD(true)
                setDisabledRsrcD(true)
            }
            else if (ski == 'D') {
                setDisabledMetaD(true)
                setDisabledAttrD(true)
                setDisabledMagicD(true)
                setDisabledRsrcD(true)
            }
            else if (mag == 'D') {
                setDisabledMetaD(true)
                setDisabledAttrD(true)
                setDisabledSkillD(true)
                setDisabledRsrcD(true)
            }
            else if (res == 'D') {
                setDisabledMetaD(true)
                setDisabledAttrD(true)
                setDisabledSkillD(true)
                setDisabledMagicD(true)
            }
            else {
                setDisabledMetaD(false)
                setDisabledAttrD(false)
                setDisabledSkillD(false)
                setDisabledMagicD(false)
                setDisabledRsrcD(false)
            }
    }
    const [disableMetaE, setDisabledMetaE] = React.useState(false)
    const [disableAttrE, setDisabledAttrE] = React.useState(false)
    const [disableSkillE, setDisabledSkillE] = React.useState(false)
    const [disableMagicE, setDisabledMagicE] = React.useState(false)
    const [disableRsrcE, setDisabledRsrcE] = React.useState(false)
    function handleEState(met, att, ski, mag, res) {
            if (met == 'E') {
                setDisabledAttrE(true)
                setDisabledSkillE(true)
                setDisabledMagicE(true)
                setDisabledRsrcE(true)
            }
            else if (att == 'E') {
                setDisabledMetaE(true)
                setDisabledSkillE(true)
                setDisabledMagicE(true)
                setDisabledRsrcE(true)
            }
            else if (ski == 'E') {
                setDisabledMetaE(true)
                setDisabledAttrE(true)
                setDisabledMagicE(true)
                setDisabledRsrcE(true)
            }
            else if (mag == 'E') {
                setDisabledMetaE(true)
                setDisabledAttrE(true)
                setDisabledSkillE(true)
                setDisabledRsrcE(true)
            }
            else if (res == 'E') {
                setDisabledMetaE(true)
                setDisabledAttrE(true)
                setDisabledSkillE(true)
                setDisabledMagicE(true)
            }
            else {
                setDisabledMetaE(false)
                setDisabledAttrE(false)
                setDisabledSkillE(false)
                setDisabledMagicE(false)
                setDisabledRsrcE(false)
            }
    }
    // disabled block ends

    // This block handles changing the button color to 'success' which is green in the respective rows
    const [metatypeButtonColorA, setMetatypeButtonColorA] = React.useState(false)
    const [metatypeButtonColorB, setMetatypeButtonColorB] = React.useState(false)
    const [metatypeButtonColorC, setMetatypeButtonColorC] = React.useState(false)
    const [metatypeButtonColorD, setMetatypeButtonColorD] = React.useState(false)
    const [metatypeButtonColorE, setMetatypeButtonColorE] = React.useState(false)
    function handleMetatypeColor(metatype) {
        if (metatype == 'A') {
            setMetatypeButtonColorA(true)
            setMetatypeButtonColorB(false)
            setMetatypeButtonColorC(false)
            setMetatypeButtonColorD(false)
            setMetatypeButtonColorE(false)
        }
        else if (metatype == 'B') {
            setMetatypeButtonColorA(false)
            setMetatypeButtonColorB(true)
            setMetatypeButtonColorC(false)
            setMetatypeButtonColorD(false)
            setMetatypeButtonColorE(false)
        }
        else if (metatype == 'C') {
            setMetatypeButtonColorA(false)
            setMetatypeButtonColorB(false)
            setMetatypeButtonColorC(true)
            setMetatypeButtonColorD(false)
            setMetatypeButtonColorE(false)
        }
        else if (metatype == 'D') {
            setMetatypeButtonColorA(false)
            setMetatypeButtonColorB(false)
            setMetatypeButtonColorC(false)
            setMetatypeButtonColorD(true)
            setMetatypeButtonColorE(false)
        }
        else if (metatype == 'E') {
            setMetatypeButtonColorA(false)
            setMetatypeButtonColorB(false)
            setMetatypeButtonColorC(false)
            setMetatypeButtonColorD(false)
            setMetatypeButtonColorE(true)
        }
        else {
            setMetatypeButtonColorA(false)
            setMetatypeButtonColorB(false)
            setMetatypeButtonColorC(false)
            setMetatypeButtonColorD(false)
            setMetatypeButtonColorE(false)
        }
    }
    const [attributeButtonColorA, setAttributeButtonColorA] = React.useState(false)
    const [attributeButtonColorB, setAttributeButtonColorB] = React.useState(false)
    const [attributeButtonColorC, setAttributeButtonColorC] = React.useState(false)
    const [attributeButtonColorD, setAttributeButtonColorD] = React.useState(false)
    const [attributeButtonColorE, setAttributeButtonColorE] = React.useState(false)
    function handleAttributeColor(attribute) {
        if (attribute == 'A') {
            setAttributeButtonColorA(true)
            setAttributeButtonColorB(false)
            setAttributeButtonColorC(false)
            setAttributeButtonColorD(false)
            setAttributeButtonColorE(false)
        }
        else if (attribute == 'B') {
            setAttributeButtonColorA(false)
            setAttributeButtonColorB(true)
            setAttributeButtonColorC(false)
            setAttributeButtonColorD(false)
            setAttributeButtonColorE(false)
        }
        else if (attribute == 'C') {
            setAttributeButtonColorA(false)
            setAttributeButtonColorB(false)
            setAttributeButtonColorC(true)
            setAttributeButtonColorD(false)
            setAttributeButtonColorE(false)
        }
        else if (attribute == 'D') {
            setAttributeButtonColorA(false)
            setAttributeButtonColorB(false)
            setAttributeButtonColorC(false)
            setAttributeButtonColorD(true)
            setAttributeButtonColorE(false)
        }
        else if (attribute == 'E') {
            setAttributeButtonColorA(false)
            setAttributeButtonColorB(false)
            setAttributeButtonColorC(false)
            setAttributeButtonColorD(false)
            setAttributeButtonColorE(true)
        }
        else {
            setAttributeButtonColorA(false)
            setAttributeButtonColorB(false)
            setAttributeButtonColorC(false)
            setAttributeButtonColorD(false)
            setAttributeButtonColorE(false)
        }
    }
    const [skillButtonColorA, setSkillButtonColorA] = React.useState(false)
    const [skillButtonColorB, setSkillButtonColorB] = React.useState(false)
    const [skillButtonColorC, setSkillButtonColorC] = React.useState(false)
    const [skillButtonColorD, setSkillButtonColorD] = React.useState(false)
    const [skillButtonColorE, setSkillButtonColorE] = React.useState(false)
    function handleSkillColor(skill) {
        if (skill == 'A') {
            setSkillButtonColorA(true)
            setSkillButtonColorB(false)
            setSkillButtonColorC(false)
            setSkillButtonColorD(false)
            setSkillButtonColorE(false)
        }
        else if (skill == 'B') {
            setSkillButtonColorA(false)
            setSkillButtonColorB(true)
            setSkillButtonColorC(false)
            setSkillButtonColorD(false)
            setSkillButtonColorE(false)
        }
        else if (skill == 'C') {
            setSkillButtonColorA(false)
            setSkillButtonColorB(false)
            setSkillButtonColorC(true)
            setSkillButtonColorD(false)
            setSkillButtonColorE(false)
        }
        else if (skill == 'D') {
            setSkillButtonColorA(false)
            setSkillButtonColorB(false)
            setSkillButtonColorC(false)
            setSkillButtonColorD(true)
            setSkillButtonColorE(false)
        }
        else if (skill == 'E') {
            setSkillButtonColorA(false)
            setSkillButtonColorB(false)
            setSkillButtonColorC(false)
            setSkillButtonColorD(false)
            setSkillButtonColorE(true)
        }
        else {
            setSkillButtonColorA(false)
            setSkillButtonColorB(false)
            setSkillButtonColorC(false)
            setSkillButtonColorD(false)
            setSkillButtonColorE(false)
        }
    }
    const [magicButtonColorA, setMagicButtonColorA] = React.useState(false)
    const [magicButtonColorB, setMagicButtonColorB] = React.useState(false)
    const [magicButtonColorC, setMagicButtonColorC] = React.useState(false)
    const [magicButtonColorD, setMagicButtonColorD] = React.useState(false)
    const [magicButtonColorE, setMagicButtonColorE] = React.useState(false)
    function handleMagicColor(magic) {
        if (magic == 'A') {
            setMagicButtonColorA(true)
            setMagicButtonColorB(false)
            setMagicButtonColorC(false)
            setMagicButtonColorD(false)
            setMagicButtonColorE(false)
        }
        else if (magic == 'B') {
            setMagicButtonColorA(false)
            setMagicButtonColorB(true)
            setMagicButtonColorC(false)
            setMagicButtonColorD(false)
            setMagicButtonColorE(false)
        }
        else if (magic == 'C') {
            setMagicButtonColorA(false)
            setMagicButtonColorB(false)
            setMagicButtonColorC(true)
            setMagicButtonColorD(false)
            setMagicButtonColorE(false)
        }
        else if (magic == 'D') {
            setMagicButtonColorA(false)
            setMagicButtonColorB(false)
            setMagicButtonColorC(false)
            setMagicButtonColorD(true)
            setMagicButtonColorE(false)
        }
        else if (magic == 'E') {
            setMagicButtonColorA(false)
            setMagicButtonColorB(false)
            setMagicButtonColorC(false)
            setMagicButtonColorD(false)
            setMagicButtonColorE(true)
        }
        else {
            setMagicButtonColorA(false)
            setMagicButtonColorB(false)
            setMagicButtonColorC(false)
            setMagicButtonColorD(false)
            setMagicButtonColorE(false)
        }
    }
    const [resourceButtonColorA, setResourceButtonColorA] = React.useState(false)
    const [resourceButtonColorB, setResourceButtonColorB] = React.useState(false)
    const [resourceButtonColorC, setResourceButtonColorC] = React.useState(false)
    const [resourceButtonColorD, setResourceButtonColorD] = React.useState(false)
    const [resourceButtonColorE, setResourceButtonColorE] = React.useState(false)
    function handleResourceColor(resource) {
        if (resource == 'A') {
            setResourceButtonColorA(true)
            setResourceButtonColorB(false)
            setResourceButtonColorC(false)
            setResourceButtonColorD(false)
            setResourceButtonColorE(false)
        }
        else if (resource == 'B') {
            setResourceButtonColorA(false)
            setResourceButtonColorB(true)
            setResourceButtonColorC(false)
            setResourceButtonColorD(false)
            setResourceButtonColorE(false)
        }
        else if (resource == 'C') {
            setResourceButtonColorA(false)
            setResourceButtonColorB(false)
            setResourceButtonColorC(true)
            setResourceButtonColorD(false)
            setResourceButtonColorE(false)
        }
        else if (resource == 'D') {
            setResourceButtonColorA(false)
            setResourceButtonColorB(false)
            setResourceButtonColorC(false)
            setResourceButtonColorD(true)
            setResourceButtonColorE(false)
        }
        else if (resource == 'E') {
            setResourceButtonColorA(false)
            setResourceButtonColorB(false)
            setResourceButtonColorC(false)
            setResourceButtonColorD(false)
            setResourceButtonColorE(true)
        }
        else {
            setResourceButtonColorA(false)
            setResourceButtonColorB(false)
            setResourceButtonColorC(false)
            setResourceButtonColorD(false)
            setResourceButtonColorE(false)
        }
    }
    // button color block ends

    // This block handles the state of the drop down rows that store information about the respective rows
    // It is needed for them to toggle between open and closed
    const [openMetatypes, setMetatypesOpen] = React.useState(false);
    const [openAttributes, setAttributesOpen] = React.useState(false);
    const [openSkills, setSkillsOpen] = React.useState(false);
    const [openMagic, setMagicOpen] = React.useState(false);
    const [openResources, setResourcesOpen] = React.useState(false);
    // drop down row block ends

    // this block handles the points associated with the buttons selected for character creation
    const [metatypePoints, setMetatypePoints] = React.useState(0);
    function handleMetatypePoints(metatype) {
        if (metatype == 'A') {
            setMetatypePoints(13)
        }
        else if (metatype == 'B') {
            setMetatypePoints(11)
        }
        else if (metatype == 'C') {
            setMetatypePoints(9)
        }
        else if (metatype == 'D') {
            setMetatypePoints(4)
        }
        else if (metatype == 'E') {
            setMetatypePoints(1)
        }
        else {
            setMetatypePoints(0)
            // this needs to throw an error at 0 on submit
        }
    }
    const [attributePoints, setAttributePoints] = React.useState(0);
    function handleAttributePoints(attribute) {
        if (attribute == 'A') {
            setAttributePoints(24)
        }
        else if (attribute == 'B') {
            setAttributePoints(16)
        }
        else if (attribute == 'C') {
            setAttributePoints(12)
        }
        else if (attribute == 'D') {
            setAttributePoints(8)
        }
        else if (attribute == 'E') {
            setAttributePoints(2)
        }
        else {
            setAttributePoints(0)
            // this needs to throw an error at 0 on submit
        }
    }
    const [skillPoints, setSkillPoints] = React.useState(0);
    function handleSkillPoints(skill) {
        if (skill == 'A') {
            setSkillPoints(32)
        }
        else if (skill == 'B') {
            setSkillPoints(24)
        }
        else if (skill == 'C') {
            setSkillPoints(20)
        }
        else if (skill == 'D') {
            setSkillPoints(16)
        }
        else if (skill == 'E') {
            setSkillPoints(10)
        }
        else {
            setSkillPoints(0)
            // this needs to throw an error at 0 on submit
        }
    }
    const [magicPoints, setMagicPoints] = React.useState();
    // find a way to have it change based on whether they are aspected, mystic adept, etc. 
    const [resourcePoints, setResourcePoints] = React.useState(0);
    function handleResourcePoints(resource) {
        if (resource == 'A') {
            setResourcePoints(450000)
        }
        else if (resource == 'B') {
            setResourcePoints(275000)
        }
        else if (resource == 'C') {
            setResourcePoints(150000)
        }
        else if (resource == 'D') {
            setResourcePoints(50000)
        }
        else if (resource == 'E') {
            setResourcePoints(8000)
        }
        else {
            setResourcePoints(0)
            // this needs to throw an error at 0 on submit
        }
    }
    // end points block

    // this block handles the immediate update of the metatypePoints value
    useEffect(() => {
        handleMetatypePoints(metatypeState)
        handleMetaDisable(metatypePoints)
        console.log({
            metatypePoints
        })
    }, [metatypePoints])
    // end metatypePoints update block

    // this block handles storing the race value for button select and deselect as well as use later
    const [race, setRace] = React.useState(null);
    const handleRace = (selectedRace) => {
        if (race == selectedRace) {
            setRace(null)
        }
        else {
            setRace(selectedRace)
        }
    }
    useEffect(() => {
        handleRaceButtonColor(race)
        console.log({
            race
        })
    }, [race])
    // end race storage block

    // this block handles the race buttons and enabling/disabling them
    const [disableHuman, setDisableHuman] = React.useState(true);
    const [disableElf, setDisableElf] = React.useState(true);
    const [disableDwarf, setDisableDwarf] = React.useState(true);
    const [disableOrk, setDisableOrk] = React.useState(true);
    const [disableTroll, setDisableTroll] = React.useState(true);
    function handleMetaDisable(metaPoints) {
        if (metaPoints == 13) {
            setDisableHuman(true) 
            setDisableElf(true)
            setDisableDwarf(false)
            setDisableOrk(false)
            setDisableTroll(false)
        }
        else if (metaPoints == 11) {
            setDisableHuman(true)
            setDisableElf(false)
            setDisableDwarf(false)
            setDisableOrk(false)
            setDisableTroll(false)
        }
        else if (metaPoints == 9) {
            setDisableHuman(false)
            setDisableElf(false)
            setDisableDwarf(false)
            setDisableOrk(false)
            setDisableTroll(false)
        }
        else if (metaPoints == 4) {
            setDisableHuman(false)
            setDisableElf(false)
            setDisableDwarf(false)
            setDisableOrk(false)
            setDisableTroll(false)
        }
        else if (metaPoints == 1) {
            setDisableHuman(false) 
            setDisableElf(false)
            setDisableDwarf(false)
            setDisableOrk(false)
            setDisableTroll(false)
        }
        else {
            setDisableHuman(true) 
            setDisableElf(true)
            setDisableDwarf(true)
            setDisableOrk(true)
            setDisableTroll(true)
        }
    }
    // end race button block

    // this block handles the button color of the selected button for the races
    const [humanButtonColor, setHumanButtonColor] = React.useState(false);
    const [elfButtonColor, setElfButtonColor] = React.useState(false);
    const [dwarfButtonColor, setDwarfButtonColor] = React.useState(false);
    const [orkButtonColor, setOrkButtonColor] = React.useState(false);
    const [trollButtonColor, setTrollButtonColor] = React.useState(false);
    const handleRaceButtonColor = (raceValue) => {
        if (raceValue == 'Human') {
            setHumanButtonColor(true)
            setElfButtonColor(false)
            setDwarfButtonColor(false)
            setOrkButtonColor(false)
            setTrollButtonColor(false)
        }
        else if (raceValue == 'Elf') {
            setHumanButtonColor(false)
            setElfButtonColor(true)
            setDwarfButtonColor(false)
            setOrkButtonColor(false)
            setTrollButtonColor(false)
        }
        else if (raceValue == 'Dwarf') {
            setHumanButtonColor(false)
            setElfButtonColor(false)
            setDwarfButtonColor(true)
            setOrkButtonColor(false)
            setTrollButtonColor(false)
        }
        else if (raceValue == 'Ork') {
            setHumanButtonColor(false)
            setElfButtonColor(false)
            setDwarfButtonColor(false)
            setOrkButtonColor(true)
            setTrollButtonColor(false)
        }
        else if (raceValue == 'Troll') {
            setHumanButtonColor(false)
            setElfButtonColor(false)
            setDwarfButtonColor(false)
            setOrkButtonColor(false)
            setTrollButtonColor(true)
        }
        else {
            setHumanButtonColor(false)
            setElfButtonColor(false)
            setDwarfButtonColor(false)
            setOrkButtonColor(false)
            setTrollButtonColor(false)
        }
    }
    // end race button color block

    return (
        <Box sx={{minWidth: 1010}}>
        <TableContainer sx={{minWidth: 1010, minHeight: 550}} component={Paper}>
            <Table aria-label='priority table'>
                <TableHead>
                    <TableRow sx={{height: 55}}>
                        <TableCell 
                            style={{
                                backgroundColor: headerBackground,
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Segoe UI',
                            }}
                        />
                        <TableCell 
                            style={{
                                backgroundColor: headerBackground,
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Segoe UI',
                            }}
                        />
                        <TableCell 
                            style={{
                                backgroundColor: headerBackground,
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Segoe UI',
                            }}
                            align='center'
                        >
                            Priority A
                        </TableCell>
                        <TableCell 
                            style={{
                                backgroundColor: headerBackground,
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Segoe UI',
                            }}
                            align='center'
                        >
                            Priority B
                        </TableCell>
                        <TableCell 
                            style={{
                                backgroundColor: headerBackground,
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Segoe UI',
                            }}
                            align='center'
                        >
                            Priority C
                        </TableCell>
                        <TableCell 
                            style={{
                                backgroundColor: headerBackground,
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Segoe UI',
                            }}
                            align='center'
                        >
                            Priority D
                        </TableCell>
                        <TableCell 
                            style={{
                                backgroundColor: headerBackground,
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Segoe UI',
                            }}
                            align='center'
                        >
                            Priority E
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {metatype.map((metatype) => (
                        <TableRow sx={{ '& > *': { borderBottom: 'unset'} }} hover>
                            <TableCell sx={{minWidth: 35}}>
                                <IconButton aria-label='expand row' size='small' onClick={() => setMetatypesOpen(!openMetatypes)}>
                                    {openMetatypes ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </TableCell>
                            <TableCell 
                                component='th' 
                                scope='metatype'
                                align='center'
                            >
                                <Typography
                                    variant='h4'
                                    style={{
                                        fontSize: 16,
                                        fontFamily: 'Segoe UI',
                                        fontWeight: 500
                                    }}
                                >
                                    {metatype.row_name}
                                </Typography>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='A' 
                                    onClick={e => handleMetatypeState(e.target.value)} 
                                    disabled={disableMetaA} 
                                    color={metatypeButtonColorA ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 100, 
                                        minHeight: 100, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 12
                                    }}
                                >
                                    {metatype.A}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='B' 
                                    onClick={e => handleMetatypeState(e.target.value)} 
                                    disabled={disableMetaB} 
                                    color={metatypeButtonColorB ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 100, 
                                        minHeight: 100, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 12}}
                                >
                                    {metatype.B}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='C' 
                                    onClick={e => handleMetatypeState(e.target.value)} 
                                    disabled={disableMetaC} 
                                    color={metatypeButtonColorC ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 100, 
                                        minHeight: 100, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 12}}
                                >
                                    {metatype.C}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='D' 
                                    onClick={e => handleMetatypeState(e.target.value)} 
                                    disabled={disableMetaD} 
                                    color={metatypeButtonColorD ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 100, 
                                        minHeight: 100, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 12}}
                                >
                                    {metatype.D}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='E' 
                                    onClick={e => handleMetatypeState(e.target.value)} 
                                    disabled={disableMetaE} 
                                    color={metatypeButtonColorE ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 100, 
                                        minHeight: 100, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 12}}
                                >
                                    {metatype.E}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
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
                    {attributes.map((attributes) => (
                        <TableRow sx={{ '& > *': { borderBottom: 'unset'} }} hover>
                            <TableCell>
                                <IconButton aria-label='expand row' size='small' onClick={() => setAttributesOpen(!openAttributes)}>
                                    {openAttributes ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </TableCell>
                            <TableCell 
                                component='th' 
                                scope='attributes'
                                align='center'
                            >
                                <Typography
                                    variant='h4'
                                    style={{
                                        fontSize: 16,
                                        fontFamily: 'Segoe UI',
                                        fontWeight: 500
                                    }}
                                >
                                {attributes.row_name}
                                </Typography>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='A' 
                                    onClick={e => handleAttributeState(e.target.value)} 
                                    disabled={disableAttrA} 
                                    color={attributeButtonColorA ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 50, 
                                        minHeight: 50, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 16}}
                                >
                                    {attributes.A}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='B' 
                                    onClick={e => handleAttributeState(e.target.value)} 
                                    disabled={disableAttrB} 
                                    color={attributeButtonColorB ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 50, 
                                        minHeight: 50, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 16}}
                                >
                                    {attributes.B}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='C' 
                                    onClick={e => handleAttributeState(e.target.value)} 
                                    disabled={disableAttrC} 
                                    color={attributeButtonColorC ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 50, 
                                        minHeight: 50, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 16}}
                                >
                                    {attributes.C}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='D' 
                                    onClick={e => handleAttributeState(e.target.value)} 
                                    disabled={disableAttrD} 
                                    color={attributeButtonColorD ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 50, 
                                        minHeight: 50, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 16}}
                                >
                                    {attributes.D}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='E' 
                                    onClick={e => handleAttributeState(e.target.value)} 
                                    disabled={disableAttrE} 
                                    color={attributeButtonColorE ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 50, 
                                        minHeight: 50, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 16}}
                                >
                                    {attributes.E}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                            <Collapse in={openAttributes} timeout='auto' unmountOnExit>
                                <Box sx={{ margin: 1 }}>
                                    <Typography variant='h6' gutterBottom component='div'>
                                        History
                                    </Typography>
                                </Box>
                            </Collapse>
                        </TableCell>
                    </TableRow>
                    {skill.map((skill) => (
                        <TableRow sx={{ '& > *': { borderBottom: 'unset'} }} hover>
                            <TableCell>
                                <IconButton aria-label='expand row' size='small' onClick={() => setSkillsOpen(!openSkills)}>
                                    {openSkills ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </TableCell>
                            <TableCell 
                                component='th' 
                                scope='skill'
                                align='center'
                            >
                                <Typography
                                    variant='h4'
                                    style={{
                                        fontSize: 16,
                                        fontFamily: 'Segoe UI',
                                        fontWeight: 500
                                    }}
                                >
                                    {skill.row_name}
                                </Typography>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='A' 
                                    onClick={e => handleSkillState(e.target.value)} 
                                    disabled={disableSkillA} 
                                    color={skillButtonColorA ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 50, 
                                        minHeight: 50, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 16
                                    }}
                                >
                                    {skill.A}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='B' 
                                    onClick={e => handleSkillState(e.target.value)} 
                                    disabled={disableSkillB} 
                                    color={skillButtonColorB ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 50, 
                                        minHeight: 50, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 16
                                    }}
                                >
                                    {skill.B}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='C' 
                                    onClick={e => handleSkillState(e.target.value)} 
                                    disabled={disableSkillC} 
                                    color={skillButtonColorC ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 50, 
                                        minHeight: 50, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 16
                                    }}
                                >
                                    {skill.C}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='D' 
                                    onClick={e => handleSkillState(e.target.value)} 
                                    disabled={disableSkillD} 
                                    color={skillButtonColorD ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 50, 
                                        minHeight: 50, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 16
                                    }}
                                >
                                    {skill.D}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='E' 
                                    onClick={e => handleSkillState(e.target.value)} 
                                    disabled={disableSkillE}
                                    color={skillButtonColorE ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 50, 
                                        minHeight: 50, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 16
                                    }}
                                >
                                    {skill.E}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
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
                    {magic_or_resonance.map((magic_or_resonance) => (
                        <TableRow sx={{ '& > *': { borderBottom: 'unset'} }} hover>
                            <TableCell>
                                <IconButton aria-label='expand row' size='small' onClick={() => setMagicOpen(!openMagic)}>
                                    {openMagic ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </TableCell>
                            <TableCell 
                                component='th' 
                                scope='magic_or_resonance'
                                align='center'
                            >
                                <Typography
                                    variant='h4'
                                    style={{
                                        fontSize: 16,
                                        fontFamily: 'Segoe UI',
                                        fontWeight: 500
                                    }}
                                >
                                    {magic_or_resonance.row_name}
                                </Typography>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='A' 
                                    onClick={e => handleMagicState(e.target.value)} 
                                    disabled={disableMagicA} 
                                    color={magicButtonColorA ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 100, 
                                        minHeight: 100, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 12
                                    }}
                                >
                                    {magic_or_resonance.A}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='B' 
                                    onClick={e => handleMagicState(e.target.value)} 
                                    disabled={disableMagicB} 
                                    color={magicButtonColorB ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 100, 
                                        minHeight: 100, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 12}}
                                >
                                    {magic_or_resonance.B}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='C' 
                                    onClick={e => handleMagicState(e.target.value)} 
                                    disabled={disableMagicC} 
                                    color={magicButtonColorC ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 100, 
                                        minHeight: 100, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 12}}
                                >
                                    {magic_or_resonance.C}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='D' 
                                    onClick={e => handleMagicState(e.target.value)} 
                                    disabled={disableMagicD} 
                                    color={magicButtonColorD ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 100, 
                                        minHeight: 100, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 12}}
                                >
                                    {magic_or_resonance.D}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='E' 
                                    onClick={e => handleMagicState(e.target.value)} 
                                    disabled={disableMagicE} 
                                    color={magicButtonColorE ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 100, 
                                        minHeight: 100, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 12}}
                                >
                                    {magic_or_resonance.E}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
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
                    {resources.map((resources) => (
                        <TableRow sx={{ '& > *': { borderBottom: 'unset'} }} hover>
                            <TableCell>
                                <IconButton aria-label='expand row' size='small' onClick={() => setResourcesOpen(!openResources)}>
                                    {openResources ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </TableCell>
                            <TableCell 
                                component='th' 
                                scope='resources'
                                align='center'
                            >
                                <Typography
                                    variant='h4'
                                    style={{
                                        fontSize: 16,
                                        fontFamily: 'Segoe UI',
                                        fontWeight: 500
                                    }}
                                >
                                    {resources.row_name}
                                </Typography>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='A' 
                                    onClick={e => handleRsrcState(e.target.value)} 
                                    disabled={disableRsrcA} 
                                    color={resourceButtonColorA ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 50, 
                                        minHeight: 50, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 16
                                    }}
                                >
                                    {resources.A}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='B' 
                                    onClick={e => handleRsrcState(e.target.value)} 
                                    disabled={disableRsrcB} 
                                    color={resourceButtonColorB ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 50, 
                                        minHeight: 50, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 16
                                    }}
                                >
                                    {resources.B}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='C' 
                                    onClick={e => handleRsrcState(e.target.value)} 
                                    disabled={disableRsrcC} 
                                    color={resourceButtonColorC ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 50, 
                                        minHeight: 50, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 16
                                    }}
                                >
                                    {resources.C}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='D' 
                                    onClick={e => handleRsrcState(e.target.value)} 
                                    disabled={disableRsrcD} 
                                    color={resourceButtonColorD ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 50, 
                                        minHeight: 50, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 16
                                    }}
                                >
                                    {resources.D}
                                </Button>
                            </TableCell>
                            <TableCell 
                                align='center'
                                sx={{minWidth: 120, maxWidth: 120}}
                            >
                                <Button 
                                    variant='contained' 
                                    value='E' 
                                    onClick={e => handleRsrcState(e.target.value)} 
                                    disabled={disableRsrcE}
                                    color={resourceButtonColorE ? 'success' : 'primary'}
                                    fullWidth={true}
                                    size='large'
                                    sx={{
                                        maxHeight: 50, 
                                        minHeight: 50, 
                                        typography: 'button', 
                                        fontFamily: 'Segoe UI',
                                        fontSize: 16
                                    }}
                                >
                                    {resources.E}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
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
                <TableHead>
                    <TableRow sx={{height: 55}}>
                        <TableCell 
                            style={{
                                backgroundColor: headerBackground
                            }}
                            colSpan={7}
                        />
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'} }} hover>
                        <TableCell sx={{minWidth: 35}} />
                        <TableCell 
                            component='th' 
                            scope='metatype'
                            align='center'
                        >
                            <Typography
                                variant='h4'
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500
                                }}
                            >
                                Race
                            </Typography>
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                        >
                            <Button 
                                variant='contained' 
                                value='Human' 
                                onClick={e => handleRace(e.target.value)} 
                                disabled={disableHuman} 
                                color={humanButtonColor ? 'success' : 'primary'}
                                fullWidth={true}
                                size='large'
                                sx={{
                                    maxHeight: 50, 
                                    minHeight: 50, 
                                    typography: 'button', 
                                    fontFamily: 'Segoe UI',
                                    fontSize: 12
                                }}
                            >
                                Human
                            </Button>
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                        >
                            <Button 
                                variant='contained' 
                                value='Elf' 
                                onClick={e => handleRace(e.target.value)} 
                                disabled={disableElf} 
                                color={elfButtonColor ? 'success' : 'primary'}
                                fullWidth={true}
                                size='large'
                                sx={{
                                    maxHeight: 50, 
                                    minHeight: 50, 
                                    typography: 'button', 
                                    fontFamily: 'Segoe UI',
                                    fontSize: 12}}
                            >
                                Elf
                            </Button>
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                        >
                            <Button 
                                variant='contained' 
                                value='Dwarf' 
                                onClick={e => handleRace(e.target.value)} 
                                disabled={disableDwarf} 
                                color={dwarfButtonColor ? 'success' : 'primary'}
                                fullWidth={true}
                                size='large'
                                sx={{
                                    maxHeight: 50, 
                                    minHeight: 50, 
                                    typography: 'button', 
                                    fontFamily: 'Segoe UI',
                                    fontSize: 12}}
                            >
                                Dwarf
                            </Button>
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                        >
                            <Button 
                                variant='contained' 
                                value='Ork' 
                                onClick={e => handleRace(e.target.value)} 
                                disabled={disableOrk} 
                                color={orkButtonColor ? 'success' : 'primary'}
                                fullWidth={true}
                                size='large'
                                sx={{
                                    maxHeight: 50, 
                                    minHeight: 50, 
                                    typography: 'button', 
                                    fontFamily: 'Segoe UI',
                                    fontSize: 12}}
                            >
                                Ork
                            </Button>
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                        >
                            <Button 
                                variant='contained' 
                                value='Troll' 
                                onClick={e => handleRace(e.target.value)} 
                                disabled={disableTroll} 
                                color={trollButtonColor ? 'success' : 'primary'}
                                fullWidth={true}
                                size='large'
                                sx={{
                                    maxHeight: 50, 
                                    minHeight: 50, 
                                    typography: 'button', 
                                    fontFamily: 'Segoe UI',
                                    fontSize: 12}}
                            >
                                Troll
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableHead>
                    <TableRow sx={{height: 55}}>
                        <TableCell 
                            style={{
                                backgroundColor: headerBackground
                            }}
                            colSpan={7}
                        />
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'} }} hover>
                        <TableCell sx={{minWidth: 35}} />
                        <TableCell 
                            component='th' 
                            scope='metatype'
                            align='center'
                        >
                            <Typography
                                variant='h4'
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500
                                }}
                            >
                                Attribute
                            </Typography>
                            <Typography
                                variant='h4'
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500,
                                    color: pointColor
                                }}
                            >
                                {attributePoints}
                            </Typography>
                        </TableCell>
                        <TableCell 
                            component='th' 
                            scope='metatype'
                            align='center'
                        >
                            <Typography
                                variant='h4'
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500
                                }}
                            >
                                Adjustment
                            </Typography>
                            <Typography
                                variant='h4'
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500,
                                    color: pointColor
                                }}
                            >
                                {metatypePoints}
                            </Typography>
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                            colSpan={4}
                        />
                    </TableRow>
                </TableBody>
                <TableHead>
                    <TableRow sx={{height: 55}}>
                        <TableCell 
                            style={{
                                backgroundColor: subHeaderBackground,
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Segoe UI',
                            }}
                        />
                        <TableCell 
                            style={{
                                backgroundColor: subHeaderBackground,
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Segoe UI',
                            }}
                            align='center'
                        >
                            Attribute Name
                        </TableCell>
                        <TableCell 
                            style={{
                                backgroundColor: subHeaderBackground,
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Segoe UI',
                            }}
                            align='center'
                            colSpan={4}
                        >
                            Priority D
                        </TableCell>
                        <TableCell 
                            style={{
                                backgroundColor: subHeaderBackground,
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Segoe UI',
                            }}
                            align='center'
                        >
                            Attribute Cap
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'} }} hover>
                        <TableCell sx={{minWidth: 35}} />
                        <TableCell 
                            component='th' 
                            align='center'
                        >
                            <Typography
                                variant='h4'
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500
                                }}
                            >
                                Body
                            </Typography>
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                            colSpan={4}
                        >
                            stat placement here
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                        >
                            cap here
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'} }} hover>
                        <TableCell sx={{minWidth: 35}} />
                        <TableCell 
                            component='th' 
                            align='center'
                        >
                            <Typography
                                variant='h4'
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500
                                }}
                            >
                                Agility
                            </Typography>
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                            colSpan={4}
                        >
                            stat placement here
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                        >
                            cap here
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'} }} hover>
                        <TableCell sx={{minWidth: 35}} />
                        <TableCell 
                            component='th' 
                            align='center'
                        >
                            <Typography
                                variant='h4'
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500
                                }}
                            >
                                Reaction
                            </Typography>
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                            colSpan={4}
                        >
                            stat placement here
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                        >
                            cap here
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'} }} hover>
                        <TableCell sx={{minWidth: 35}} />
                        <TableCell 
                            component='th' 
                            align='center'
                        >
                            <Typography
                                variant='h4'
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500
                                }}
                            >
                                Strength
                            </Typography>
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                            colSpan={4}
                        >
                            stat placement here
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                        >
                            cap here
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'} }} hover>
                        <TableCell sx={{minWidth: 35}} />
                        <TableCell 
                            component='th' 
                            align='center'
                        >
                            <Typography
                                variant='h4'
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500
                                }}
                            >
                                Willpower
                            </Typography>
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                            colSpan={4}
                        >
                            stat placement here
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                        >
                            cap here
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'} }} hover>
                        <TableCell sx={{minWidth: 35}} />
                        <TableCell 
                            component='th' 
                            align='center'
                        >
                            <Typography
                                variant='h4'
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500
                                }}
                            >
                                Logic
                            </Typography>
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                            colSpan={4}
                        >
                            stat placement here
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                        >
                            cap here
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'} }} hover>
                        <TableCell sx={{minWidth: 35}} />
                        <TableCell 
                            component='th' 
                            align='center'
                        >
                            <Typography
                                variant='h4'
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500
                                }}
                            >
                                Intuition
                            </Typography>
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                            colSpan={4}
                        >
                            stat placement here
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                        >
                            cap here
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset'} }} hover>
                        <TableCell sx={{minWidth: 35}} />
                        <TableCell 
                            component='th' 
                            align='center'
                        >
                            <Typography
                                variant='h4'
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500
                                }}
                            >
                                Charisma
                            </Typography>
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                            colSpan={4}
                        >
                            stat placement here
                        </TableCell>
                        <TableCell 
                            align='center'
                            sx={{minWidth: 120, maxWidth: 120}}
                        >
                            cap here
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        Metatype Points: {metatypePoints}<br />
        Attribute Points: {attributePoints}<br />
        Skill Points: {skillPoints}<br />
        Resource Points: {resourcePoints}<br />
        </Box>
    );
}