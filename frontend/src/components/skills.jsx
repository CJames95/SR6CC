import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import {
    karma as karmaAtom,
    priorities as prioritiesAtom,
    skillPoints as skillPointsAtom,
    skills as skillsAtom
} from '../atoms.js';

const skillsArray = [
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

export default function Skills() {

    const [karma, setKarma] = useAtom(karmaAtom);
    const [prioritySelections, setPrioritySelections] = useAtom(prioritiesAtom);
    const [skillPoints, setSkillPoints] = useAtom(skillPointsAtom);
    const [skills, setSkills] = useAtom(skillsAtom);

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
                        setSkills(prevSkills => [
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
                        setSkills(prevSkills => prevSkills.filter(skills => skills.name !== value));
                    }
                }
                break;
            case 'add':
                if( skillPoints.skill === 0 ||
                    skills.find(skill => skill.name === value)?.rating === 6) {
                    return;
                }
                else {
                    setSkillPoints(prevSkillPoints => ({
                        ...prevSkillPoints,
                        skill: prevSkillPoints.skill - 1
                    }));
                    setSkills(prevSkills =>
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
                    skills.find(skill => skill.name === value)?.rating === 1) {
                    return;
                }
                else {
                    if(skills.find(skill => skill.name === value)?.rating-1 < 5 && skills.find(skill => skill.name === value)?.spec !== 'No Selection') {
                        setSkillPoints(prevSkillPoints => ({
                            ...prevSkillPoints,
                            skill: prevSkillPoints.skill + 2
                        }));
                        setSkills(prevSkills =>
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
                        setSkills(prevSkills =>
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
                if(skills.find(skill => skill.name === value)?.spec === 'No Selection' && event.target.value !== 'No Selection') {
                    if( skillPoints.skill === 0 ||
                        skills.find(skill => skill.name === value)?.rating < 5) {
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
                setSkills(prevSkills =>
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

    const [scrollbarVisible, setScrollbarVisible] = useState(false);
    useEffect(() => {
        const element = document.getElementById('scrollContainer');
        function checkScrollbar() {
            if (element.scrollHeight > element.clientHeight) {
                setScrollbarVisible(true);
            } else {
                setScrollbarVisible(false);
            }
        }
        checkScrollbar(); // Initial check
        // Check again whenever the element's size changes
        window.addEventListener('resize', checkScrollbar);
        return () => window.removeEventListener('resize', checkScrollbar);
    }, []);

    const rows = skillsArray.sort(function(a, b) {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    }).map((selectedSkillObj, index) => {
        const { name, subcategories, attribute, magic } = selectedSkillObj;
        console.log(prioritySelections.magic, attribute === 'Magic')
        if(prioritySelections.magic === 4 && magic === true) {
            return null;
        }

        return (
            <div key={index} className='grid grid-cols-12 gap-0.5'>
                <div className='text-center h-full col-span-1'>
                    <input 
                        type="checkbox" 
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                        checked={skills.some(skill => skill.name === name)}
                        onChange={(event) => handleUpdateSkillsTaken('checkbox', event, name)}
                    />
                </div>
                <div className='text-center h-full col-span-3'>
                    {name}
                </div>
                <div className='text-center h-full col-span-2'>
                        <div className='grid grid-cols-4 gap-0.5'>
                            <button 
                                onClick={() => handleUpdateSkillsTaken('sub', null, name)} 
                                className="flex flex-auto col-span-1"
                                disabled={skills.some(skill => skill.name === name) ? false : true}
                            >
                                <span class="material-symbols-sharp">do_not_disturb_on</span>
                            </button>
                            <input 
                                value={skills.some(skill => skill.name === name) ? `${skills.find(skill => skill.name === name)?.rating || 0} / 6` : ''} 
                                className="flex flex-auto bg-gray-200 font-sans col-span-2" size='md'
                                disabled={skills.some(skill => skill.name === name) ? false : true}
                            />
                            <button 
                                onClick={() => handleUpdateSkillsTaken('add', null, name)} 
                                className="flex flex-auto col-span-1"
                                disabled={skills.some(skill => skill.name === name) ? false : true}
                            >
                                <span class="material-symbols-sharp">add_circle</span>
                            </button>
                        </div>
                </div>
                <div className='text-center h-full col-span-2'>
                    {attribute}
                </div>
                <div className='text-center h-full col-span-4'>
                    <select
                        className={`rounded border p-2 bg-white w-full ${skills.find(skill => skill.name === name)?.rating >= 5 && skills.some(skill => skill.name === name) ? '' : 'cursor-not-allowed opacity-50'}`}
                        value={skills.find((skill) => skill.name === name)?.spec || subcategories[0]}
                        onChange={(e) => handleUpdateSkillsTaken('spec', e, name)}
                        disabled={!(skills.find(skill => skill.name === name)?.rating >= 5 && skills.some(skill => skill.name === name))}
                    >
                        {subcategories.map((subcategory, index) => (
                            <option key={index} value={subcategory}>
                                {subcategory}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );
    })
    
    return (
        <div className='h-[calc(100vh-74px)] z-0 max-w-md mx-auto shadow-md md:max-w-2xl bg-gray-400'>
            <div className='px-4 py-2'>
                <div className='grid grid-cols-1 bg-gray-500'>
                    <div className={`grid grid-cols-12 bg-gray-500 ${scrollbarVisible ? 'pr-4' : ''}`}>
                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5 col-span-1'>
                            Select
                        </div>
                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5 col-span-3'>
                            Skill
                        </div>
                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5 col-span-2'>
                            Rating/Max
                        </div>
                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5 col-span-2'>
                            Attribute
                        </div>
                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5 col-span-4'>
                            Specialization
                        </div>
                    </div>
                    <div id="scrollContainer" className='flex items-center justify-between flex-wrap overflow-auto' style={{ maxHeight: 'calc(100vh - 194px)' }}>
                        {rows}
                    </div>
                </div>
            </div>
            <div className='px-4 py-2'>
                <div className='grid grid-cols-1 bg-gray-500'>
                    <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                        Skill Points: {skillPoints.skill}
                    </div>
                </div>
            </div>
        </div>
        
    );
}
    {/*
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
                        </Grid>
                    </ListSubheader>
                    {skillList}
                </List>
            </Item>
        </Grid>
    */}