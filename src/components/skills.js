import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button, ButtonGroup, FormControl, Select, MenuItem } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import {
    Table,
    TableRow,
    TableCell
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';


const headerBackground = grey[800];

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

const skills = [
    {
        name: 'Astral',
        subcategories: ['No Selection', 'Astral Combat', 'Astral Signatures', 'Emotional States', 'Spirit Types'],
        untrained: false,
        magic: true,
        attribute: 'Intuition'
    },
    {
        name: 'Athletics',
        subcategories: ['No Selection', 'Archery', 'Climbing', 'Flying', 'Gymnastics', 'Sprinting', 'Swimming', 'Throwing'],
        untrained: true,
        magic: false,
        attribute: 'Agility'
    },
    {
        name: 'Biotech',
        subcategories: ['No Selection', 'Biotechnology', 'Cybertechnology', 'First Aid', 'Medicine'],
        untrained: false,
        magic: false,
        attribute: 'Logic'
    },
    {
        name: 'Close Combat',
        subcategories: ['No Selection', 'Blades', 'Clubs', 'Unarmed Combat'],
        untrained: true,
        magic: false,
        attribute: 'Agility'
    },
    {
        name: 'Con',
        subcategories: ['No Selection', 'Acting', 'Disguise', 'Impersonation', 'Performance'],
        untrained: true,
        magic: false,
        attribute: 'Charisma'
    },
    {
        name: 'Conjuring',
        subcategories: ['No Selection', 'Banishing', 'Summoning'],
        untrained: false,
        magic: true,
        attribute: 'Magic'
    },
    {
        name: 'Cracking',
        subcategories: ['No Selection', 'Cybercombat', 'Electronic Warfare', 'Hacking'],
        untrained: false,
        magic: false,
        attribute: 'Logic'
    },
    {
        name: 'Electronics',
        subcategories: ['No Selection', 'Computer', 'Hardware', 'Software'],
        untrained: true,
        magic: false,
        attribute: 'Logic'
    },
    {
        name: 'Enchanting',
        subcategories: ['No Selection', 'Alchemy', 'Artificing', 'Disenchanting'],
        untrained: false,
        magic: true,
        attribute: 'Magic'
    },
    {
        name: 'Engineering',
        subcategories: ['No Selection', 'Aeronautics Mechanic', 'Armorer', 'Automotive Mechanic', 'Demolitions', 'Gunnery', 'Industrial Mechanic', 'Lockpicking', 'Nautical Mechanic'],
        untrained: true,
        magic: false,
        attribute: 'Logic'
    },
    {
        name: 'Exotic Weapons',
        subcategories: ['No Selection', 'A', 'B', 'C'],
        untrained: false,
        magic: false,
        attribute: 'Agility'
    },
    {
        name: 'Firearms',
        subcategories: ['No Selection', 'Tasers', 'Hold-Outs', 'Light Pistols', 'Machine Pistols', 'Heavy Pistols', 'Submachine Guns', 'Shotguns', 'Rifles', 'Machine Guns', 'Assault Cannons'],
        untrained: true,
        magic: false,
        attribute: 'Agility'
    },
    {
        name: 'Influence',
        subcategories: ['No Selection', 'Etiquette', 'Instruction', 'Intimidation', 'Leadership', 'Negotiation'],
        untrained: true,
        magic: false,
        attribute: 'Charisma'
    },
    {
        name: 'Outdoors',
        subcategories: ['No Selection', 'Navigation', 'Survival', 'Tracking'], //by environmet (urban, desert, woods, etc.)
        untrained: true,
        magic: false,
        attribute: 'Intuition'
    },
    {
        name: 'Perception',
        subcategories: ['No Selection', 'Visual', 'Aural', 'Tactile'], //by environmet (urban, desert, woods, etc.)
        untrained: true,
        magic: false,
        attribute: 'Intuition'
    },
    {
        name: 'Piloting',
        subcategories: ['No Selection', 'Groundcraft', 'Aircraft', 'Watercraft'],
        untrained: true,
        magic: false,
        attribute: 'Reaction'
    },
    {
        name: 'Sorcery',
        subcategories: ['No Selection', 'Counterspelling', 'Ritual Spellcasting', 'Spellcasting'],
        untrained: false,
        magic: true,
        attribute: 'Magic'
    },
    {
        name: 'Stealth',
        subcategories: ['No Selection', 'Comouflage', 'Palming', 'Sneaking'],
        untrained: true,
        magic: false,
        attribute: 'Agility'
    },
    {
        name: 'Tasking',
        subcategories: ['No Selection', 'Compiling', 'Decompiling', 'Registering'],
        untrained: false,
        magic: true,
        attribute: 'Resonance'
    }
]

export default function Skills({skillsTaken, handleUpdateSkillsTaken, priorityButtons}) {
    const [selectedSkills, setSelectedSkills] = useState([]);
    useEffect(() => {
        console.log(selectedSkills)
    }, [selectedSkills])

    const handleCheckboxChange = (event, skill) => {
        if (event.target.checked) {
            setSelectedSkills([...selectedSkills, skill]);
        } else {
            setSelectedSkills(selectedSkills.filter(selectedSkill => selectedSkill !== skill));
        }
    };

    const skillList = skills.sort(function(a, b) {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    }).map((selectedSkillObj, index) => {
        const { name, subcategories, attribute, magic } = selectedSkillObj;
        console.log(priorityButtons.magic, attribute === 'Magic')
        if(priorityButtons.magic === 4 && magic === true) {
            return null;
        }

        return (

            <ListItem disablePadding={true} key={index}>
                <ListItemText 
                    primaryTypographyProps={{
                        fontFamily: 'Segoe UI',
                        fontSize: 20,
                        fontWeight: 500
                    }}
                    primary={
                        <Table>
                            <TableRow>
                                <TableCell sx={{ width: '10%' }}>
                                    <Checkbox 
                                        checked={skillsTaken.some(skill => skill.name === name)}
                                        onChange={(event) => handleUpdateSkillsTaken('checkbox', event, name)}
                                    />
                                </TableCell>
                                <TableCell sx={{ width: '20%' }}>
                                    {name}
                                </TableCell>
                                <TableCell align='center' sx={{ width: '15%' }}>
                                <ButtonGroup disabled={skillsTaken.some(skill => skill.name === name) ? false : true} variant='filled'>
                                    <Button sx={{width: 45}} onClick={() => handleUpdateSkillsTaken('sub', null, name)}>
                                        <RemoveCircleIcon/>
                                    </Button>
                                    <TextField value={skillsTaken.some(skill => skill.name === name) ? `${skillsTaken.find(skill => skill.name === name)?.rating || 0} / 6` : ''} inputProps={{readOnly: true, style: {textAlign: 'center'}}} sx={{width: 65}} size='small'/>
                                    <Button sx={{width: 45}} onClick={() => handleUpdateSkillsTaken('add', null, name)}>
                                        <AddCircleIcon/>
                                    </Button>
                                </ButtonGroup>
                                </TableCell>
                                <TableCell sx={{ width: '20%' }}>
                                    {attribute}
                                </TableCell>
                                <TableCell sx={{ width: '30%' }}>
                                    <FormControl fullWidth disabled={skillsTaken.find(skill => skill.name === name)?.rating >= 5 && skillsTaken.some(skill => skill.name === name) ? false : true} size='small'>
                                        <Select
                                            variant='outlined'
                                            sx={{
                                                bgcolor: 'white',
                                            }}
                                            value={skillsTaken.find((skill) => skill.name === name)?.spec || subcategories[0]}
                                            onChange={(e) => handleUpdateSkillsTaken('spec', e, name)}
                                        >
                                            {subcategories.map((subcategory, index) => (
                                                <MenuItem key={index} value={subcategory}>
                                                {subcategory}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                            </TableRow>
                        </Table>
                    }
                />
            </ListItem>
        );
    });
    
    return (
        <Grid xl={8} lg={8} md={8} sm={8} xs={8} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
            <Item>
                <List
                    sx={{
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 800,
                        padding: 0
                    }}
                >
                    <ListSubheader 
                        align='left' 
                        sx={{
                            height: 55,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', 
                            bgcolor: headerBackground, 
                            color: 'white',
                            fontFamily: 'Segoe UI',
                            fontSize: 20,
                            fontWeight: 500,
                        }}
                    >
                        <Table>
                            <TableRow>
                                <TableCell sx={{ width: '10%' }}>
                                    Select
                                </TableCell>
                                <TableCell sx={{ width: '20%' }}>
                                    Skill
                                </TableCell>
                                <TableCell sx={{ width: '30%' }}>
                                    Rating / Max Rating
                                </TableCell>
                                <TableCell sx={{ width: '10%' }}>
                                    Attribute
                                </TableCell>
                                <TableCell sx={{ width: '30%' }}>
                                    Specialization
                                </TableCell>
                            </TableRow>
                        </Table>
                        {/*<Grid container spacing={2} direction='column' columns={12} sx={{height: '100%', padding: 0, justifyContent: 'center'}}>
                            <Grid item xs={7} sx={{height: '100%'}}>
                                {SkillsSelectionForm}
                            </Grid>
                            <Grid item xs={2.5}>
                                <Button fullWidth variant='contained' onClick={handleAddSkill}>
                                    <AddCircleIcon/>
                                </Button>
                            </Grid>
                            <Grid item xs={2.5}>
                                <Button fullWidth variant='contained' onClick={handleRemoveSkill}>
                                    <RemoveCircleIcon/>
                                </Button>
                            </Grid>
                        </Grid>*/}
                    </ListSubheader>
                    {skillList}
                </List>
            </Item>
        </Grid>
    );
}