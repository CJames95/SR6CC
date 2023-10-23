import React, { useState } from 'react';
import { 
    Button, 
    ButtonGroup,
    List,
    ListSubheader,
    ListItem,
    Table,
    Grid,
    ListDivider,
} from '@mui/joy';

export default function Priorities({ Item, priorityButtons, handlePriorityButtons }) {
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
    const metatypeRestrictions = [
        { restriction: 'Elf', indexes: [0] },
        { restriction: 'Dalakitnon', indexes: [0] },
        { restriction: 'Dryad', indexes: [0] },
        { restriction: 'Nocturna', indexes: [0] },
        { restriction: 'Wakyambi', indexes: [0, 4] },
        { restriction: 'Xaipiri Thëpë', indexes: [0] },
        { restriction: 'Human', indexes: [0, 1] },
        { restriction: 'Nartaki', indexes: [0, 1, 4] },
        { restriction: 'Valkyrie', indexes: [0, 4] },
        { restriction: 'No restrictions', indexes: [2, 3] },
        { restriction: 'Menehune', indexes: [4] },
        { restriction: 'Satyr', indexes: [4] },
        { restriction: 'Fomorian', indexes: [4] },
        { restriction: 'Centaurs', indexes: [4] },
        { restriction: 'Merrow', indexes: [4] },
        { restriction: 'Naga', indexes: [4] },
        { restriction: 'Pixie', indexes: [4] },
        { restriction: 'Sasquatch', indexes: [4] }
    ];

    
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
            name: 'Magic or Resonance',
            idA: 0,
            A: 'Magical',
            idB: 1,
            B: 'Magical',
            idC: 2,
            C: 'Magical',
            idD: 3,
            D: 'Magical',
            idE: 4,
            E: 'Mundane',
            state: priorityButtons.magic,
            change: value => handlePriorityButtons('magic', parseInt(value)),
            collapse: openMagic,
            set: handleOpenMagic
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
        }     
    ]

    const priorityRows = priorities.map((priorities, index) => {
        return (
            <ListItem
                sx={{
                    height: '19%',
                    width: '100%',
                    padding: 0
                }}
            >
                <List 
                    orientation='horizontal'
                    sx={{
                        height: '100%',
                        width: '100%',
                        padding: 0
                    }}
                >
                    <ListItem
                        sx={{
                            height: '100%',
                            width: '20%',
                            bgcolor: '#424242',
                            color: '#ffffff',
                            justifyContent: 'center',
                            fontFamily: 'Segoe UI',
                            fontWeight: 500,
                            fontSize: '1vw',
                            borderBottomLeftRadius: priorities.name === 'Resources' ?  4 : 0
                        }}
                    >
                        {priorities.name}
                    </ListItem>
                    <ListItem
                        sx={{
                            height: '100%',
                            width: '16%',
                        }}
                    >
                        <Button 
                            value={priorities.idA} 
                            onClick={e => priorities.change(e.target.value)} 
                            color={(priorities.state == 0) ? 'info' : 'primary'} 
                            fullWidth 
                            variant='solid'
                            sx={{
                                height: '80%',
                                fontFamily: 'Segoe UI',
                                fontWeight: 500,
                                fontSize: '.9vw'   
                            }}
                        >
                            {priorities.A}
                        </Button>
                    </ListItem>
                    <ListItem
                        sx={{
                            height: '100%',
                            width: '16%',
                            
                        }}
                    >
                        <Button 
                            value={priorities.idB} 
                            onClick={e => priorities.change(e.target.value)} 
                            color={(priorities.state == 1) ? 'info' : 'primary'} 
                            fullWidth 
                            variant='solid'
                            sx={{
                                height: '80%',
                                fontFamily: 'Segoe UI',
                                fontWeight: 500,
                                fontSize: '.9vw'
                            }}
                        >
                            {priorities.B}
                        </Button>
                    </ListItem>
                    <ListItem
                        sx={{
                            height: '100%',
                            width: '16%',
                            
                        }}
                    >
                        <Button 
                            value={priorities.idC} 
                            onClick={e => priorities.change(e.target.value)} 
                            color={(priorities.state == 2) ? 'info' : 'primary'} 
                            fullWidth 
                            variant='solid'
                            sx={{
                                height: '80%',
                                fontFamily: 'Segoe UI',
                                fontWeight: 500,
                                fontSize: '.9vw'
                            }}
                        >
                            {priorities.C}
                        </Button>
                    </ListItem>
                    <ListItem
                        sx={{
                            height: '100%',
                            width: '16%',
                            
                        }}
                    >
                        <Button 
                            value={priorities.idD} 
                            onClick={e => priorities.change(e.target.value)} 
                            color={(priorities.state == 3) ? 'info' : 'primary'} 
                            fullWidth 
                            variant='solid'
                            sx={{
                                height: '80%',
                                fontFamily: 'Segoe UI',
                                fontWeight: 500,
                                fontSize: '.9vw'
                            }}
                        >
                            {priorities.D}
                        </Button>
                    </ListItem>
                    <ListItem
                        sx={{
                            height: '100%',
                            width: '16%',
                            
                        }}
                    >
                            <Button 
                                value={priorities.idE} 
                                onClick={e => priorities.change(e.target.value)} 
                                color={(priorities.state == 4) ? 'info' : 'primary'} 
                                fullWidth 
                                variant='solid'
                                sx={{
                                    height: '80%',
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500,
                                    fontSize: '.9vw'
                                }}
                            >
                                {priorities.E}
                            </Button>
                    </ListItem>
                </List>
            </ListItem>
        );
    });
    const metatypeRestrictionRows = metatypeRestrictions
        .filter(( {indexes }) => indexes.includes(priorityButtons.metatype))
        .map((metatype, index) => {
            return (
                <>
                    <ListItem 
                        key={index}
                        sx={{
                            height: '5%',
                            justifyContent: 'center',
                            fontFamily: 'Segoe UI',
                            fontWeight: 500,
                            fontSize: '.9vw'   
                        }}
                    >
                        {metatype.restriction}
                    </ListItem>
                    <ListDivider />
                </>
            );
    });

    const [selectedPriority, setSelectedPriority] = useState('');
  
    const handlePriorityChange = (event) => {
      setSelectedPriority(event.target.value);
    };


    return (
        <>
            <div className='h-[calc(100vh-74px)] z-0 max-w-md mx-auto shadow-md md:max-w-2xl bg-gray-400'>
                <div className='px-4 py-2'>
                    <div className='grid grid-cols-1 bg-gray-500'>
                        <div className='grid grid-cols-5 gap-0.5'>
                            <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                                Metatype
                            </div>
                            <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                                Attributes
                            </div>
                            <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                                Skills
                            </div>
                            <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                                Magic
                            </div>
                            <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                                Resources
                            </div>
                        </div>
                        <div className='grid grid-cols-5 gap-0.5'>
                            <>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('metatype', 0)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.metatype === 0 ? 'bg-blue-500' : 'bg-gray-200'} 
                                        ${priorityButtons.metatype === 0 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'} 
                                        ${priorityButtons.metatype === 0 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                                            13
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('attribute', 0)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.attribute === 0 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.attribute === 0 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.attribute === 0 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                                            24
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('skill', 0)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.skill === 0 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.skill === 0 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.skill === 0 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                                            32
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('magic', 0)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.magic === 0 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.magic === 0 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.magic === 0 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                                            5/4
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('resource', 0)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.resource === 0 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.resource === 0 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.resource === 0 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                                            ¥450,000
                                        </div>
                                    </button>
                                </div>
                            </>
                            <>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('metatype', 1)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.metatype === 1 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.metatype === 1 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.metatype === 1 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                                            11
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('attribute', 1)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.attribute === 1 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.attribute === 1 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.attribute === 1 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                                            16
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('skill', 1)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.skill === 1 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.skill === 1 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.skill === 1 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                                            24
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('magic', 1)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.magic === 1 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.magic === 1 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.magic === 1 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                                            4/3
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('resource', 1)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.resource === 1 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.resource === 1 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.resource === 1 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                                            ¥275,000
                                        </div>
                                    </button>
                                </div>
                            </>
                            <>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('metatype', 2)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.metatype === 2 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.metatype === 2 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.metatype === 2 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'> 
                                            9
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('attribute', 2)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.attribute === 2 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.attribute === 2 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.attribute === 2 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'> 
                                            12
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('skill', 2)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.skill === 2 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.skill === 2 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.skill === 2 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'> 
                                            20
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('magic', 2)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.magic === 2 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.magic === 2 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.magic === 2 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'> 
                                            3/2
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('resource', 2)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.resource === 2 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.resource === 2 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.resource === 2 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'> 
                                            ¥150,000
                                        </div>
                                    </button>
                                </div>
                            </>
                            <>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('metatype', 3)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.metatype === 3 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.metatype === 3 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.metatype === 3 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'> 
                                            4
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('attribute', 3)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.attribute === 3 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.attribute === 3 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.attribute === 3 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'> 
                                            8
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('skill', 3)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.skill === 3 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.skill === 3 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.skill === 3 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'> 
                                            16
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('magic', 3)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.magic === 3 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.magic === 3 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.magic === 3 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'> 
                                            2/1
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('resource', 3)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.resource === 3 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.resource === 3 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}  
                                        ${priorityButtons.resource === 3 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'> 
                                            ¥50,000
                                        </div>
                                    </button>
                                </div>
                            </>
                            <>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('metatype', 4)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.metatype === 4 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.metatype === 4 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.metatype === 4 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'> 
                                            1
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('attribute', 4)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.attribute === 4 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.attribute === 4 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.attribute === 4 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'> 
                                            2
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('skill', 4)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.skill === 4 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.skill === 4 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.skill === 4 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'> 
                                            10
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('magic', 4)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.magic === 4 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.magic === 4 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.magic === 4 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'> 
                                            0/0
                                        </div>
                                    </button>
                                </div>
                                <div className='text-center h-full'>
                                    <button onClick={() => handlePriorityButtons('resource', 4)} className={`w-full py-3 shadow-md focus:outline-none
                                        ${priorityButtons.resource === 4 ? 'bg-blue-500' : 'bg-gray-200'}
                                        ${priorityButtons.resource === 4 ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}
                                        ${priorityButtons.resource === 4 ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                                    `}>
                                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'> 
                                            ¥8,000
                                        </div>
                                    </button>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
                <div className='px-4 py-2'>
                    <div className='grid grid-cols-1 bg-gray-500'>
                        <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                            Help with Magic
                        </div>
                        <div className='h-[calc(100vh-542px)] bg-gray-600 items-center p-4'>
                            <p>The two numbers under the magic column are a shorthand for the points you get based on your magic archetype choice.</p>

                            <p>For example, 5/4 would translate into: </p>
                            <ul>
                                <li>
                                    Aspected Magician: 5 Magic Points
                                </li>
                                <li>
                                    Magician: 4 Magic Points
                                </li>
                                <li>
                                    Mystic Adept: 4 Magic Points
                                </li>
                                <li>
                                    Adept: 4 Magic Points
                                </li>
                                <li>
                                    Technomancer: 4 Resonance Points
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    {/*
    <Grid xs={80} sx={{ bgcolor: '#e1e1da', padding: 1, height: "100%" }}>
                <Item sx={{ boxSizing: 'border-box', height: '100%', padding: 0 }}>
                    <List 
                        sx={{
                            height: '100%',
                            width: '100%',
                            padding: 0
                        }}
                    >
                        <ListSubheader sx={{
                            height: '5%',
                            width: '100%',
                            bgcolor: '#424242', 
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4,
                            padding: 0,
                        }}>
                            <List 
                                orientation='horizontal'
                                sx={{
                                    height: '100%',
                                    width: '100%',
                                    padding: 0
                                }}
                            >
                                <ListItem
                                    sx={{
                                        height: '100%',
                                        width: '20%',
                                        justifyContent: 'center',
                                        fontFamily: 'Segoe UI',
                                        color: '#ffffff',
                                        fontWeight: 500,
                                        fontSize: '1vw'
                                    }}
                                >
                                    Priority
                                </ListItem>
                                <ListItem
                                    sx={{
                                        height: '100%',
                                        width: '16%',
                                        justifyContent: 'center',
                                        fontFamily: 'Segoe UI',
                                        color: '#ffffff',
                                        fontWeight: 500,
                                        fontSize: '1vw'
                                    }}
                                >
                                    A
                                </ListItem>
                                <ListItem
                                    sx={{
                                        height: '100%',
                                        width: '16%',
                                        justifyContent: 'center',
                                        fontFamily: 'Segoe UI',
                                        color: '#ffffff',
                                        fontWeight: 500,
                                        fontSize: '1vw'
                                    }}
                                >
                                    B
                                </ListItem>
                                <ListItem
                                    sx={{
                                        height: '100%',
                                        width: '16%',
                                        justifyContent: 'center',
                                        fontFamily: 'Segoe UI',
                                        color: '#ffffff',
                                        fontWeight: 500,
                                        fontSize: '1vw'
                                    }}
                                >
                                    C
                                </ListItem>
                                <ListItem
                                    sx={{
                                        height: '100%',
                                        width: '16%',
                                        justifyContent: 'center',
                                        fontFamily: 'Segoe UI',
                                        color: '#ffffff',
                                        fontWeight: 500,
                                        fontSize: '1vw'
                                    }}
                                >
                                    D
                                </ListItem>
                                <ListItem
                                    sx={{
                                        height: '100%',
                                        width: '16%',
                                        justifyContent: 'center',
                                        fontFamily: 'Segoe UI',
                                        color: '#ffffff',
                                        fontWeight: 500,
                                        fontSize: '1vw'
                                    }}
                                >
                                    E
                                </ListItem>
                            </List>
                        </ListSubheader>
                        {priorityRows}
                    </List>
                </Item>
            </Grid>
            <Grid xs={20} sx={{ bgcolor: '#e1e1da', padding: 1, height: "100%" }}>
                <Item sx={{ boxSizing: 'border-box', height: '100%', padding: 0 }}>
                    <List
                        sx={{
                            height: '59%',
                            width: '100%',
                            padding: 0,
                            overflow: 'auto',
                        }}
                    >
                        <ListSubheader
                            sticky
                            sx={{
                                height: '5%',
                                width: '100%',
                                bgcolor: '#424242', 
                                justifyContent: 'center',
                                fontFamily: 'Segoe UI',
                                color: '#ffffff',
                                fontWeight: 500,
                                fontSize: '.9vw',
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4,
                            }}
                        >
                            Metatypes Not Available
                        </ListSubheader>
                        <ListItem
                            sx={{
                                width: '100%',
                                padding: 0,
                            }}
                        >
                            <List
                                sx={{
                                    width: '100%',
                                    padding: 0,
                                }}
                            >
                                {metatypeRestrictionRows}
                            </List>
                        </ListItem>
                    </List>
                    <List
                        sx={{
                            height: '41%',
                            width: '100%',
                            padding: 0,
                            overflow: 'auto',
                        }}
                    >
                        <ListSubheader
                            sticky
                            sx={{
                                height: '5%',
                                width: '100%',
                                bgcolor: '#424242', 
                                justifyContent: 'center',
                                fontFamily: 'Segoe UI',
                                color: '#ffffff',
                                fontWeight: 500,
                                fontSize: '.9vw'
                            }}
                        >
                            Magic and Resonance
                        </ListSubheader>
                        {priorityButtons.magic !== 4 &&
                            <ListItem
                                sx={{
                                    flex: '1 1 auto',
                                    justifyContent: 'center',
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500,
                                    fontSize: '.9vw'
                                }}
                            >
                                {AwakenedOrEmerged[priorityButtons.magic][0]}
                            </ListItem>
                        }
                        <ListItem
                            sx={{
                                flex: '1 1 auto',
                                justifyContent: 'center',
                                fontFamily: 'Segoe UI',
                                fontWeight: 500,
                                fontSize: '.9vw'
                            }}
                        >
                            {AwakenedOrEmerged[priorityButtons.magic][1]}
                        </ListItem>
                        {priorityButtons.magic !== 4 &&
                            <ListItem
                                sx={{
                                    flex: '1 1 auto',
                                    justifyContent: 'center',
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500,
                                    fontSize: '.9vw'
                                }}
                            >
                                {AwakenedOrEmerged[priorityButtons.magic][2]}
                            </ListItem>
                        }
                        {priorityButtons.magic !== 4 &&
                            <ListItem
                                sx={{
                                    flex: '1 1 auto',
                                    justifyContent: 'center',
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500,
                                    fontSize: '.9vw'
                                }}
                            >
                                {AwakenedOrEmerged[priorityButtons.magic][3]}
                            </ListItem>
                        }
                        {priorityButtons.magic !== 4 &&
                            <ListItem
                                sx={{
                                    flex: '1 1 auto',
                                    justifyContent: 'center',
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500,
                                    fontSize: '.9vw'
                                }}
                            >
                                {AwakenedOrEmerged[priorityButtons.magic][4]}
                            </ListItem>
                        }
                        {priorityButtons.magic !== 4 &&
                            <ListItem
                                sx={{
                                    flex: '1 1 auto',
                                    justifyContent: 'center',
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500,
                                    fontSize: '.9vw'
                                }}
                            >
                                {AwakenedOrEmerged[priorityButtons.magic][5]}
                            </ListItem>
                        }
                    </List>
                </Item>
            </Grid>
    */}
}